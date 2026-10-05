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
  Folder,
  Layers, 
  FolderTree,
  RotateCcw, 
  Sparkles,
  FlaskConical, 
  GraduationCap, 
  Star,
  ChevronRight,
  SlidersHorizontal,
  Dna,
  Atom
} from 'lucide-react';
import { ScienceResource, KeyStage, ScienceDiscipline, ResourceCategory } from './types';
import { INITIAL_REPOSITORIES } from './data/defaultRepos';
import { UnlockGate } from './components/UnlockGate';
import { TopBar } from './components/TopBar';
import { RepoCard } from './components/RepoCard';
import { RepoModal } from './components/RepoModal';
import { PreviewModal } from './components/PreviewModal';
import { FolderTreeNav } from './components/FolderTreeNav';

const STORAGE_KEY_AUTH = 'pyrex_science_auth_v1';
const STORAGE_KEY_REPOS = 'teach_science_first_resources_v4';

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

  // Resources State - loaded from resources/ structure
  const [repositories, setRepositories] = useState<ScienceResource[]>(() => {
    try {
      // 1. Try primary storage key v4
      const saved = localStorage.getItem(STORAGE_KEY_REPOS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.path?.startsWith('resources/')) {
          const validCategories = new Set(['Concepts', 'Simulations']);
          const cleaned = parsed.filter((r: any) => validCategories.has(r.category));
          const existingIds = new Set(cleaned.map((r: any) => r.id));
          const missingDefaults = INITIAL_REPOSITORIES.filter(r => !existingIds.has(r.id));
          if (missingDefaults.length > 0) {
            return [...cleaned, ...missingDefaults];
          }
          if (cleaned.length > 0) return cleaned;
        }
      }

      // 2. Fallback check legacy v3 cache & merge new resources
      const legacySaved = localStorage.getItem('teach_science_first_resources_v3');
      if (legacySaved) {
        const parsed = JSON.parse(legacySaved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validCategories = new Set(['Concepts', 'Simulations']);
          const cleaned = parsed.filter((r: any) => validCategories.has(r.category));
          const existingIds = new Set(cleaned.map((r: any) => r.id));
          const missingDefaults = INITIAL_REPOSITORIES.filter(r => !existingIds.has(r.id));
          return [...cleaned, ...missingDefaults];
        }
      }
    } catch {
      // ignore
    }
    return INITIAL_REPOSITORIES;
  });

  // Hierarchy Navigation State
  const [selectedKeyStage, setSelectedKeyStage] = useState<KeyStage | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<ScienceDiscipline | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'All'>('All');
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  // Folder Tree visibility
  const [showFolderTree, setShowFolderTree] = useState<boolean>(true);

  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'title' | 'stage' | 'subject'>('default');

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRepo, setEditingRepo] = useState<ScienceResource | null>(null);
  const [previewRepo, setPreviewRepo] = useState<ScienceResource | null>(null);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_REPOS, JSON.stringify(repositories));
    } catch (e) {
      console.error('Failed to save repositories to localStorage', e);
    }
  }, [repositories]);

  // Keyboard shortcut for search
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
    showToast('Pyrex Science Teaching Portal Unlocked.');
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

  const handleSaveRepo = (repo: ScienceResource) => {
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

  const handleToggleFavorite = (id: string) => {
    setRepositories(prev => prev.map(r => {
      if (r.id === id) {
        return { ...r, isFavorite: !r.isFavorite };
      }
      return r;
    }));
  };

  const handleResetDefaults = () => {
    if (window.confirm('Reset all repositories back to the default resources directory applications?')) {
      setRepositories(INITIAL_REPOSITORIES);
      localStorage.removeItem(STORAGE_KEY_REPOS);
      showToast('Restored default resources curriculum suite.');
    }
  };

  const handleClearFilters = () => {
    setSelectedKeyStage('All');
    setSelectedSubject('All');
    setSelectedCategory('All');
    setSelectedResourceId(null);
    setSearchQuery('');
    setOnlyFavorites(false);
  };

  const handleSelectResourceFromTree = (res: ScienceResource) => {
    setSelectedResourceId(res.id);
    setSelectedKeyStage(res.keyStage);
    setSelectedSubject(res.subject);
    setSelectedCategory(res.category);
    // Scroll item into view if in grid
    const el = document.getElementById(`card-${res.id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  // Filter Logic based on the Folder Structure & Search
  const filteredRepos = useMemo(() => {
    return repositories.filter(repo => {
      // KeyStage filter
      if (selectedKeyStage !== 'All' && repo.keyStage !== selectedKeyStage) {
        return false;
      }
      // Subject filter
      if (selectedSubject !== 'All' && repo.subject !== selectedSubject) {
        return false;
      }
      // Category filter
      if (selectedCategory !== 'All' && repo.category !== selectedCategory) {
        return false;
      }
      // Specific resource selection if active
      if (selectedResourceId && repo.id !== selectedResourceId) {
        // If user specifically picked one resource from tree, we keep showing it
        // but still allow query to filter
      }
      // Favorites filter
      if (onlyFavorites && !repo.isFavorite) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = repo.title.toLowerCase().includes(q);
        const matchesDesc = repo.description.toLowerCase().includes(q);
        const matchesPath = repo.path.toLowerCase().includes(q);
        const matchesSlug = repo.slug.toLowerCase().includes(q);
        const matchesSubj = repo.subject.toLowerCase().includes(q);
        const matchesStage = repo.keyStage.toLowerCase().includes(q);
        return matchesTitle || matchesDesc || matchesPath || matchesSlug || matchesSubj || matchesStage;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'stage') return a.keyStage.localeCompare(b.keyStage);
      if (sortBy === 'subject') return a.subject.localeCompare(b.subject);
      return 0;
    });
  }, [repositories, selectedKeyStage, selectedSubject, selectedCategory, selectedResourceId, onlyFavorites, searchQuery, sortBy]);

  // Statistics
  const stats = useMemo(() => {
    const total = repositories.length;
    const ks3Count = repositories.filter(r => r.keyStage === 'KS3').length;
    const ks4Count = repositories.filter(r => r.keyStage === 'KS4').length;
    const ks5Count = repositories.filter(r => r.keyStage === 'KS5').length;
    const bioCount = repositories.filter(r => r.subject === 'Biology').length;
    const chemCount = repositories.filter(r => r.subject === 'Chemistry').length;
    const physCount = repositories.filter(r => r.subject === 'Physics').length;
    return { total, ks3Count, ks4Count, ks5Count, bioCount, chemCount, physCount };
  }, [repositories]);

  // If locked, render authentication gate
  if (!isUnlocked) {
    return <UnlockGate onUnlock={handleUnlock} />;
  }

  const subjects: (ScienceDiscipline | 'All')[] = ['All', 'Biology', 'Chemistry', 'Physics'];
  const categories: (ResourceCategory | 'All')[] = ['All', 'Simulations', 'Concepts'];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      
      {/* 3-Zone Top Navigation Contract */}
      <TopBar
        currentKeyStage={selectedKeyStage}
        onSelectKeyStage={(ks) => {
          setSelectedKeyStage(ks);
          setSelectedResourceId(null);
        }}
        showFolderTree={showFolderTree}
        onToggleFolderTree={() => setShowFolderTree(!showFolderTree)}
        onLock={handleLock}
        totalApps={repositories.length}
      />

      {/* Main Workspace Container */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-5 sm:py-6 flex flex-col gap-5">
        
        {/* Breadcrumbs Navigation Bar (Mirroring resources/ folder structure) */}
        <nav 
          aria-label="Breadcrumb navigation"
          className="flex items-center gap-1.5 px-3.5 py-2 bg-slate-900/90 border border-slate-800 rounded-xl text-xs font-mono text-slate-400 overflow-x-auto no-scrollbar shadow-sm"
        >
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold cursor-pointer shrink-0"
          >
            <Folder className="w-3.5 h-3.5" />
            <span>resources</span>
          </button>

          {selectedKeyStage !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <button
                onClick={() => {
                  setSelectedSubject('All');
                  setSelectedCategory('All');
                  setSelectedResourceId(null);
                }}
                className="text-amber-400 hover:text-amber-300 font-semibold cursor-pointer shrink-0"
              >
                {selectedKeyStage.toLowerCase()}
              </button>
            </>
          )}

          {selectedSubject !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedResourceId(null);
                }}
                className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer shrink-0"
              >
                {selectedSubject}
              </button>
            </>
          )}

          {selectedCategory !== 'All' && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-purple-400 font-semibold shrink-0">
                {selectedCategory.toLowerCase()}
              </span>
            </>
          )}

          {selectedResourceId && (
            <>
              <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
              <span className="text-slate-200 shrink-0">
                {repositories.find(r => r.id === selectedResourceId)?.slug}/index.html
              </span>
            </>
          )}

          {/* Quick Active Match Badge */}
          <div className="ml-auto text-[11px] text-slate-500 font-mono shrink-0 pl-2">
            Showing <span className="text-cyan-400 font-bold">{filteredRepos.length}</span> of {repositories.length} applications
          </div>
        </nav>

        {/* 2-Column Split: Folder Tree Navigation + Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Left Column: Interactive Folder Tree Navigation */}
          {showFolderTree && (
            <div className="lg:col-span-4 xl:col-span-3 sticky top-20">
              <FolderTreeNav
                resources={repositories}
                selectedKeyStage={selectedKeyStage}
                selectedSubject={selectedSubject}
                selectedCategory={selectedCategory}
                selectedResourceId={selectedResourceId}
                onSelectKeyStage={(ks) => {
                  setSelectedKeyStage(ks);
                  setSelectedResourceId(null);
                }}
                onSelectSubject={(subj) => {
                  setSelectedSubject(subj);
                  setSelectedResourceId(null);
                }}
                onSelectCategory={(cat) => {
                  setSelectedCategory(cat);
                  setSelectedResourceId(null);
                }}
                onSelectResource={handleSelectResourceFromTree}
                onPreviewResource={(res) => setPreviewRepo(res)}
                onClearFilters={handleClearFilters}
              />
            </div>
          )}

          {/* Right Column: Search, Subject Tabs, and Applications Grid */}
          <div className={`${showFolderTree ? 'lg:col-span-8 xl:col-span-9' : 'lg:col-span-12'} flex flex-col gap-4`}>
            
            {/* Subject Tabs & Category Filters */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              {/* Subject Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                <span className="text-xs font-mono text-slate-500 mr-1 hidden sm:inline">Subject:</span>
                {subjects.map((subj) => {
                  const isActive = selectedSubject === subj;
                  return (
                    <button
                      key={subj}
                      onClick={() => {
                        setSelectedSubject(subj);
                        setSelectedResourceId(null);
                      }}
                      className={`px-3 py-1 text-xs rounded-lg whitespace-nowrap transition-colors flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-slate-800 text-cyan-300 font-bold border border-cyan-500/40'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`}
                    >
                      {subj === 'Biology' && <Dna className="w-3 h-3 text-emerald-400" />}
                      {subj === 'Chemistry' && <FlaskConical className="w-3 h-3 text-amber-400" />}
                      {subj === 'Physics' && <Atom className="w-3 h-3 text-cyan-400" />}
                      <span>{subj}</span>
                    </button>
                  );
                })}
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-800">
                <span className="text-xs font-mono text-slate-500 mr-1 hidden sm:inline">Type:</span>
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setSelectedResourceId(null);
                      }}
                      className={`px-2.5 py-1 text-[11px] font-mono rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-cyan-950 text-cyan-300 border border-cyan-700/50 font-semibold'
                          : 'text-slate-500 hover:text-slate-300 hover:bg-slate-800/40'
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Search & Actions Bar */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 25 labs, practicals, keywords (e.g. 'osmosis', 'half-life', 'trypsin')..."
                  className="w-full pl-9 pr-12 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
                />
                <div className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-1 text-[10px] text-slate-500 font-mono bg-slate-950 px-1 py-0.2 rounded border border-slate-800">
                  <span>/</span>
                </div>
              </div>

              {/* Utility actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setOnlyFavorites(!onlyFavorites)}
                  className={`px-2.5 py-2 text-xs rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
                    onlyFavorites
                      ? 'bg-amber-950/60 border-amber-600 text-amber-300 font-medium'
                      : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                  title="Filter starred applications"
                >
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="hidden sm:inline">Favorites</span>
                </button>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="px-2.5 py-2 text-xs bg-slate-900 border border-slate-800 text-slate-300 rounded-lg outline-none cursor-pointer"
                >
                  <option value="default">Default Tree Order</option>
                  <option value="title">Sort: Title (A-Z)</option>
                  <option value="stage">Sort: Key Stage</option>
                  <option value="subject">Sort: Subject</option>
                </select>

                <button
                  onClick={() => {
                    setEditingRepo(null);
                    setIsModalOpen(true);
                  }}
                  className="px-3 py-2 text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
                  title="Add custom teaching lab"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Lab</span>
                </button>

                <button
                  onClick={handleResetDefaults}
                  title="Restore default curriculum suite"
                  className="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 rounded-lg text-xs transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Applications Grid */}
            <div className="mt-1">
              {filteredRepos.length === 0 ? (
                <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-10 text-center flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-slate-800/60 flex items-center justify-center text-slate-400">
                    <Search className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-slate-200">No applications match filter</h3>
                  <p className="text-xs text-slate-400 max-w-sm">
                    No resources found matching the current folder or search selection.
                  </p>
                  <button
                    onClick={handleClearFilters}
                    className="mt-2 px-3.5 py-1.5 bg-cyan-600 text-slate-950 font-bold text-xs rounded-lg transition-colors cursor-pointer"
                  >
                    Clear All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredRepos.map((repo) => (
                    <div id={`card-${repo.id}`} key={repo.id}>
                      <RepoCard
                        repo={repo}
                        onPreview={(r) => setPreviewRepo(r)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pedagogy & Navigation Footer Info Card */}
            <div className="mt-4 p-4 bg-slate-900/40 border border-slate-800/70 rounded-xl grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <FileCode2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Dedicated Tab Execution</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Clicking <strong>Open index.html</strong> launches the application standalone in a new browser tab with full viewport space.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <FolderTree className="w-3.5 h-3.5 text-amber-400" />
                  <span>Resources Directory Structure</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Organized by Key Stage (KS3, KS4, KS5) → Subject (Biology, Chemistry, Physics) → Concepts & Simulations.
                </p>
              </div>

              <div className="space-y-1">
                <div className="font-semibold text-slate-200 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{repositories.length} Curriculum Practicals &amp; Concepts</span>
                </div>
                <p className="leading-relaxed text-[11px]">
                  Includes required practicals for AQA, Edexcel, and OCR specifications with live data collection and calculations.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-5 text-center text-xs text-slate-500 font-mono">
        Teach Science First · SHA-256 Passcode Protected (pyrexpyrex) · {repositories.length} Teaching Modules in resources/
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
