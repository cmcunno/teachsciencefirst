/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Search, 
  Plus, 
  ExternalLink, 
  FileCode2, 
  SlidersHorizontal, 
  Download, 
  Upload, 
  RotateCcw, 
  Sparkles,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Layers,
  Star
} from 'lucide-react';
import { ScienceRepo, ScienceDiscipline } from './types';
import { INITIAL_REPOSITORIES } from './data/defaultRepos';
import { UnlockGate } from './components/UnlockGate';
import { TopBar } from './components/TopBar';
import { RepoCard } from './components/RepoCard';
import { RepoModal } from './components/RepoModal';
import { PreviewModal } from './components/PreviewModal';

const STORAGE_KEY_AUTH = 'pyrex_science_auth_v1';
const STORAGE_KEY_REPOS = 'pyrex_science_repos_v1';

export default function App() {
  // Authentication State
  const [isUnlocked, setIsUnlocked] = useState<boolean>(() => {
    try {
      const local = localStorage.getItem(STORAGE_KEY_AUTH);
      if (local === 'true') return true;
      const session = sessionStorage.getItem(STORAGE_KEY_AUTH);
      return session === 'true';
    } catch {
      return false;
    }
  });

  // Repositories State
  const [repositories, setRepositories] = useState<ScienceRepo[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_REPOS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_REPOSITORIES;
  });

  // Navigation & Filter State
  const [currentCategory, setCurrentCategory] = useState<ScienceDiscipline | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyLocal, setOnlyLocal] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'discipline'>('default');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRepo, setEditingRepo] = useState<ScienceRepo | null>(null);
  const [previewRepo, setPreviewRepo] = useState<ScienceRepo | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync repos to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_REPOS, JSON.stringify(repositories));
    } catch (e) {
      console.error('Failed to save repositories to localStorage', e);
    }
  }, [repositories]);

  // Keyboard shortcut for search (/ or Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || (e.ctrlKey && e.key === 'k') || (e.metaKey && e.key === 'k')) && isUnlocked) {
        if (document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
          e.preventDefault();
          searchInputRef.current?.focus();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isUnlocked]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleUnlock = (remember: boolean) => {
    setIsUnlocked(true);
    try {
      if (remember) {
        localStorage.setItem(STORAGE_KEY_AUTH, 'true');
      } else {
        sessionStorage.setItem(STORAGE_KEY_AUTH, 'true');
      }
    } catch {
      // ignore
    }
    showToast('Science Teaching Portal Unlocked.');
  };

  const handleLock = () => {
    setIsUnlocked(false);
    try {
      localStorage.removeItem(STORAGE_KEY_AUTH);
      sessionStorage.removeItem(STORAGE_KEY_AUTH);
    } catch {
      // ignore
    }
  };

  const handleSaveRepo = (repo: ScienceRepo) => {
    setRepositories(prev => {
      const exists = prev.some(r => r.id === repo.id);
      if (exists) {
        return prev.map(r => r.id === repo.id ? repo : r);
      } else {
        return [repo, ...prev];
      }
    });
    showToast(`Saved "${repo.title}"`);
  };

  const handleDeleteRepo = (id: string) => {
    const target = repositories.find(r => r.id === id);
    if (!target) return;
    
    // Non-blocking deletion with undo/restore capability
    setRepositories(prev => prev.filter(r => r.id !== id));
    showToast(`Removed "${target.title}"`);
  };

  const handleToggleFavorite = (id: string) => {
    setRepositories(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, isFavorite: !r.isFavorite };
      }
      return r;
    }));
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all repositories back to the default science curriculum suite?')) {
      setRepositories(INITIAL_REPOSITORIES);
      localStorage.removeItem(STORAGE_KEY_REPOS);
      showToast('Restored default science repositories.');
    }
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(repositories, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `science_teaching_repos_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast('Exported repository configuration.');
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target?.result as string);
        if (Array.isArray(json)) {
          setRepositories(json);
          showToast(`Imported ${json.length} repositories successfully.`);
        } else {
          alert('Invalid configuration format.');
        }
      } catch {
        alert('Failed to parse JSON file.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Filter & Search Logic
  const filteredRepos = useMemo(() => {
    return repositories.filter(repo => {
      // Category filter
      if (currentCategory !== 'All' && repo.discipline !== currentCategory) {
        return false;
      }
      // Favorites filter
      if (onlyFavorites && !repo.isFavorite) {
        return false;
      }
      // Local index.html only filter
      if (onlyLocal && !repo.isLocalRepo) {
        return false;
      }
      // Query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = repo.title.toLowerCase().includes(q);
        const matchesDesc = repo.description.toLowerCase().includes(q);
        const matchesUrl = repo.url.toLowerCase().includes(q);
        const matchesTopics = repo.topics.some(t => t.toLowerCase().includes(q));
        const matchesGrade = repo.gradeLevel.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesUrl || matchesTopics || matchesGrade;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'discipline') return a.discipline.localeCompare(b.discipline);
      return 0;
    });
  }, [repositories, currentCategory, searchQuery, onlyFavorites, onlyLocal, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const total = repositories.length;
    const localCount = repositories.filter(r => r.isLocalRepo).length;
    const favCount = repositories.filter(r => r.isFavorite).length;
    return { total, localCount, favCount };
  }, [repositories]);

  // If locked, render security gatekeeper
  if (!isUnlocked) {
    return <UnlockGate onUnlock={handleUnlock} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 3-Zone Top Navigation Contract */}
      <TopBar
        currentCategory={currentCategory}
        onSelectCategory={(cat) => setCurrentCategory(cat)}
        onAddRepo={() => {
          setEditingRepo(null);
          setIsModalOpen(true);
        }}
        onLock={handleLock}
        repoCount={filteredRepos.length}
      />

      {/* Main Educator Workspace */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 sm:py-8 flex flex-col gap-6">
        
        {/* Curated Educator Overview Banner */}
        <section className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 sm:p-7 relative overflow-hidden backdrop-blur-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-wide uppercase">
                <FlaskConical className="w-3.5 h-3.5" />
                <span>Science Teaching Hub</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Unlocked Session</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400">Tabs Open in New Window</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 font-display">
                Curriculum Repositories & Laboratory Launchpad
              </h1>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Click any simulation repository below to launch its full <code className="text-cyan-300 font-mono bg-slate-950 px-1 py-0.5 rounded text-xs border border-slate-800">index.html</code> in a dedicated tab. Add your own repos, preview simulations, or organize your course modules.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center min-w-[100px]">
                <div className="text-xs text-slate-500 font-mono uppercase mb-0.5">Total Repos</div>
                <div className="text-2xl font-bold text-slate-100 font-mono tabular-nums">{stats.total}</div>
              </div>
              <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center min-w-[100px]">
                <div className="text-xs text-slate-500 font-mono uppercase mb-0.5">Local Labs</div>
                <div className="text-2xl font-bold text-cyan-400 font-mono tabular-nums">{stats.localCount}</div>
              </div>
              <div className="px-4 py-3 bg-slate-950/80 border border-slate-800 rounded-xl text-center min-w-[100px]">
                <div className="text-xs text-slate-500 font-mono uppercase mb-0.5">Starred</div>
                <div className="text-2xl font-bold text-amber-400 font-mono tabular-nums">{stats.favCount}</div>
              </div>
            </div>

          </div>
        </section>

        {/* Filter, Search & Utility Bar */}
        <section className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search labs, formulas, topics (e.g. 'kinematics', 'optics', 'dna')..."
              className="w-full pl-9 pr-14 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[10px] text-slate-500 font-mono bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800">
              <span>/</span>
            </div>
          </div>

          {/* Quick Filters & Sorting */}
          <div className="flex flex-wrap items-center gap-2">
            
            <button
              onClick={() => setOnlyFavorites(!onlyFavorites)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                onlyFavorites
                  ? 'bg-amber-950/60 border-amber-600 text-amber-300 font-medium'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Starred</span>
            </button>

            <button
              onClick={() => setOnlyLocal(!onlyLocal)}
              className={`px-3 py-1.5 text-xs rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                onlyLocal
                  ? 'bg-cyan-950/60 border-cyan-600 text-cyan-300 font-medium'
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>Local index.html Only</span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-2.5 py-1.5 text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded-lg outline-none cursor-pointer"
            >
              <option value="default">Sort: Default Order</option>
              <option value="title">Sort: Title (A-Z)</option>
              <option value="discipline">Sort: Discipline</option>
            </select>

            {/* Config Import/Export */}
            <div className="flex items-center gap-1 ml-auto">
              <button
                onClick={handleExportJSON}
                title="Export repositories configuration as JSON"
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => fileInputRef.current?.click()}
                title="Import repositories configuration JSON"
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
              >
                <Upload className="w-3.5 h-3.5" />
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                className="hidden"
                onChange={handleImportJSON}
              />

              <button
                onClick={handleResetDefaults}
                title="Restore default science repositories"
                className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </section>

        {/* Repositories Grid */}
        <section>
          {filteredRepos.length === 0 ? (
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-12 text-center flex flex-col items-center justify-center gap-3">
              <div className="w-12 h-12 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-400">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-slate-200">No repositories found</h3>
              <p className="text-xs text-slate-400 max-w-sm">
                No science teaching repositories match the current filters or query "{searchQuery}".
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setCurrentCategory('All');
                  setOnlyFavorites(false);
                  setOnlyLocal(false);
                }}
                className="mt-2 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs rounded-lg transition-colors cursor-pointer font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredRepos.map((repo) => (
                <RepoCard
                  key={repo.id}
                  repo={repo}
                  onPreview={(r) => setPreviewRepo(r)}
                  onEdit={(r) => {
                    setEditingRepo(r);
                    setIsModalOpen(true);
                  }}
                  onDelete={handleDeleteRepo}
                  onToggleFavorite={handleToggleFavorite}
                />
              ))}
            </div>
          )}
        </section>

        {/* Teaching Notes & Classroom Tips Section */}
        <section className="mt-8 border-t border-slate-800/80 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
            <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl space-y-1.5">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>Opening in Dedicated Tabs</span>
              </div>
              <p className="leading-relaxed">
                Clicking <code className="text-cyan-300 font-mono">Open index.html</code> opens each simulation in a new browser tab with full viewport controls and zero iframe latency.
              </p>
            </div>

            <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl space-y-1.5">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Plus className="w-3.5 h-3.5 text-emerald-400" />
                <span>Extensible Curriculum Suite</span>
              </div>
              <p className="leading-relaxed">
                Use the <strong>+ Add Repo</strong> button to link your own local HTML simulations or online resources. Everything stays synced to your browser storage.
              </p>
            </div>

            <div className="p-4 bg-slate-900/40 border border-slate-800/60 rounded-xl space-y-1.5">
              <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                <span>Classroom Presentation Ready</span>
              </div>
              <p className="leading-relaxed">
                Quickly project or screen-share without exposing configuration files. The portal can be locked in one click when finished teaching.
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 font-mono">
        Pyrex Science Teaching Portal · SHA-256 Passcode Protected (pyrexpyrex) · {stats.total} Science Repositories
      </footer>

      {/* Add / Edit Modal */}
      <RepoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingRepo(null);
        }}
        onSave={handleSaveRepo}
        initialRepo={editingRepo}
      />

      {/* Iframe Preview Modal */}
      <PreviewModal
        repo={previewRepo}
        onClose={() => setPreviewRepo(null)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 px-4 py-2.5 bg-slate-900 border border-cyan-500/40 text-slate-100 text-xs rounded-xl shadow-2xl flex items-center gap-2 animate-[slideUp_0.2s_ease-out]">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
