/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Star, X } from 'lucide-react';
import { ScienceResource, KeyStage, ScienceDiscipline, ResourceCategory } from './types';
import { INITIAL_REPOSITORIES } from './data/defaultRepos';
import { UnlockGate } from './components/UnlockGate';
import { TopBar } from './components/TopBar';
import { RepoCard } from './components/RepoCard';
import { RepoModal } from './components/RepoModal';
import { PreviewModal } from './components/PreviewModal';
import { SUBJECT_STYLE, SUBJECT_ORDER, KEY_STAGE_INFO, KEY_STAGES } from './utils/subjects';

const STORAGE_KEY_AUTH = 'pyrex_science_auth_v1';
const STORAGE_KEY_REPOS = 'teach_science_first_resources_v7';
const STORAGE_KEY_THEME = 'tsf_theme';

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
      const isExcluded = (r: any) =>
        r?.id === 'res-ks4-physics-simulations-gm-tube' ||
        r?.id === 'res-ks4-physics-simulations-g-m-tube' ||
        r?.id === 'res-ks3-biology-concepts-body-systems' ||
        r?.slug === 'g m-tube' ||
        r?.path?.includes('g m-tube');

      // Built-in resources always take their details (title, description, video...)
      // from the code, so edits show up; only the teacher's favourite flag is kept.
      const DEFAULTS = new Map(INITIAL_REPOSITORIES.map(r => [r.id, r]));
      const refresh = (list: any[]) =>
        list.map((r: any) => {
          const d = DEFAULTS.get(r.id);
          return d ? { ...d, isFavorite: r.isFavorite ?? d.isFavorite } : r;
        });

      // 1. Try primary storage key v7
      const saved = localStorage.getItem(STORAGE_KEY_REPOS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0 && parsed[0]?.path?.startsWith('resources/')) {
          const validCategories = new Set(['Concepts', 'Simulations']);
          const cleaned = refresh(parsed.filter((r: any) => validCategories.has(r.category) && !isExcluded(r)));
          const existingIds = new Set(cleaned.map((r: any) => r.id));
          const missingDefaults = INITIAL_REPOSITORIES.filter(r => !existingIds.has(r.id));
          if (missingDefaults.length > 0) {
            return [...cleaned, ...missingDefaults];
          }
          if (cleaned.length > 0) return cleaned;
        }
      }

      // 2. Fallback check legacy v4 or v3 caches & merge/clean resources
      const legacyKey = localStorage.getItem('teach_science_first_resources_v4') ? 'teach_science_first_resources_v4' : 'teach_science_first_resources_v3';
      const legacySaved = localStorage.getItem(legacyKey);
      if (legacySaved) {
        const parsed = JSON.parse(legacySaved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const validCategories = new Set(['Concepts', 'Simulations']);
          const cleaned = refresh(parsed.filter((r: any) => validCategories.has(r.category) && !isExcluded(r)));
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


  // Filters
  const [selectedKeyStage, setSelectedKeyStage] = useState<KeyStage | 'All'>('All');
  const [selectedSubject, setSelectedSubject] = useState<ScienceDiscipline | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyFavorites, setOnlyFavorites] = useState(false);

  // Theme (initial class is set by an inline script in index.html to avoid a flash)
  const [isDark, setIsDark] = useState<boolean>(() => document.documentElement.classList.contains('dark'));
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
    try {
      localStorage.setItem(STORAGE_KEY_THEME, isDark ? 'dark' : 'light');
    } catch {
      // ignore
    }
  }, [isDark]);

  // Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingRepo, setEditingRepo] = useState<ScienceResource | null>(null);
  const [previewRepo, setPreviewRepo] = useState<ScienceResource | null>(null);

  // Toast
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_REPOS, JSON.stringify(repositories));
    } catch (e) {
      console.error('Failed to save repositories to localStorage', e);
    }
  }, [repositories]);

  // "/" or Ctrl/Cmd+K focuses search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) && isUnlocked) {
        const tag = document.activeElement?.tagName;
        if (tag !== 'INPUT' && tag !== 'TEXTAREA' && tag !== 'SELECT') {
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
    setTimeout(() => setToastMessage(null), 2800);
  };

  const handleUnlock = (remember: boolean) => {
    setIsUnlocked(true);
    try {
      (remember ? localStorage : sessionStorage).setItem(STORAGE_KEY_AUTH, 'true');
    } catch {
      // ignore
    }
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
    setRepositories(prev =>
      prev.some(r => r.id === repo.id) ? prev.map(r => (r.id === repo.id ? repo : r)) : [repo, ...prev]
    );
    showToast(`Saved “${repo.title}”`);
  };

  const handleToggleFavorite = (id: string) => {
    setRepositories(prev => prev.map(r => (r.id === id ? { ...r, isFavorite: !r.isFavorite } : r)));
  };

  const handleResetDefaults = () => {
    if (window.confirm('Restore the default list of resources? Any resources you added and your favourites will be reset.')) {
      setRepositories(INITIAL_REPOSITORIES);
      localStorage.removeItem(STORAGE_KEY_REPOS);
      showToast('Default resource list restored');
    }
  };

  const handleClearFilters = () => {
    setSelectedKeyStage('All');
    setSelectedSubject('All');
    setSelectedCategory('All');
    setSearchQuery('');
    setOnlyFavorites(false);
  };

  const filteredRepos = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return repositories.filter(repo => {
      if (selectedKeyStage !== 'All' && repo.keyStage !== selectedKeyStage) return false;
      if (selectedSubject !== 'All' && repo.subject !== selectedSubject) return false;
      if (selectedCategory !== 'All' && repo.category !== selectedCategory) return false;
      if (onlyFavorites && !repo.isFavorite) return false;
      if (q) {
        return [repo.title, repo.description, repo.slug, repo.subject, repo.keyStage, repo.authorNotes ?? '']
          .some(field => field.toLowerCase().includes(q));
      }
      return true;
    });
  }, [repositories, selectedKeyStage, selectedSubject, selectedCategory, onlyFavorites, searchQuery]);

  // Group results into key-stage sections, subjects in a fixed order within each.
  const sections = useMemo(() => {
    return KEY_STAGES.map(ks => ({
      keyStage: ks,
      items: filteredRepos
        .filter(r => r.keyStage === ks)
        .sort((a, b) => SUBJECT_ORDER.indexOf(a.subject) - SUBJECT_ORDER.indexOf(b.subject)),
    })).filter(s => s.items.length > 0);
  }, [filteredRepos]);

  if (!isUnlocked) {
    return <UnlockGate onUnlock={handleUnlock} />;
  }

  const hasActiveFilters =
    selectedKeyStage !== 'All' || selectedSubject !== 'All' || selectedCategory !== 'All' || onlyFavorites || searchQuery.trim() !== '';

  const chip = (active: boolean) =>
    `inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-full border transition-colors cursor-pointer whitespace-nowrap ${
      active
        ? 'bg-ink text-page border-ink font-medium'
        : 'bg-surface text-muted border-line hover:border-line-strong hover:text-ink'
    }`;

  return (
    <div className="min-h-screen bg-page text-ink flex flex-col font-sans">
      <TopBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        searchInputRef={searchInputRef}
        totalApps={repositories.length}
        isDark={isDark}
        onToggleTheme={() => setIsDark(d => !d)}
        onGoHome={handleClearFilters}
        onAddResource={() => {
          setEditingRepo(null);
          setIsModalOpen(true);
        }}
        onResetDefaults={handleResetDefaults}
        onLock={handleLock}
      />

      <main className="flex-1 max-w-6xl mx-auto w-full px-4 sm:px-6 pt-8 pb-16">
        {/* Intro */}
        <div className="mb-6">
          <h1 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
            Interactive science resources
          </h1>
          <p className="mt-2 text-muted text-base">
            Simulations and activities for KS3, GCSE and A-Level — open one in a new tab to teach from it.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col gap-3 pb-6 mb-8 border-b border-line">
          {/* Key stage — segmented control */}
          <div
            role="tablist"
            aria-label="Key stage"
            className="inline-flex self-start max-w-full overflow-x-auto no-scrollbar p-1 bg-sunken rounded-xl"
          >
            {(['All', ...KEY_STAGES] as const).map(ks => {
              const active = selectedKeyStage === ks;
              const count = ks === 'All' ? repositories.length : repositories.filter(r => r.keyStage === ks).length;
              return (
                <button
                  key={ks}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedKeyStage(ks)}
                  className={`px-4 py-2 text-sm rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    active ? 'bg-surface text-ink font-semibold shadow-sm' : 'text-muted hover:text-ink'
                  }`}
                >
                  {ks === 'All' ? 'All stages' : ks === 'KS3' ? 'KS3' : `${ks} · ${KEY_STAGE_INFO[ks].short}`}
                  <span className={`ml-1.5 text-xs ${active ? 'text-faint' : 'text-faint/80'}`}>{count}</span>
                </button>
              );
            })}
          </div>

          {/* Subject, type and favourites chips */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', ...SUBJECT_ORDER] as const).map(subj => {
              const active = selectedSubject === subj;
              const style = subj === 'All' ? null : SUBJECT_STYLE[subj];
              return (
                <button key={subj} onClick={() => setSelectedSubject(subj)} className={chip(active)} aria-pressed={active}>
                  {style && <span className={`w-2 h-2 rounded-full ${style.bg}`} aria-hidden="true" />}
                  {subj === 'All' ? 'All subjects' : subj}
                </button>
              );
            })}

            <span className="hidden sm:block w-px h-6 bg-line mx-1" aria-hidden="true" />

            {(['All', 'Simulations', 'Concepts'] as const).map(cat => {
              const active = selectedCategory === cat;
              return (
                <button key={cat} onClick={() => setSelectedCategory(cat)} className={chip(active)} aria-pressed={active}>
                  {cat === 'All' ? 'All types' : cat}
                </button>
              );
            })}

            <span className="hidden sm:block w-px h-6 bg-line mx-1" aria-hidden="true" />

            <button onClick={() => setOnlyFavorites(f => !f)} className={chip(onlyFavorites)} aria-pressed={onlyFavorites}>
              <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-current' : ''}`} />
              Favourites
            </button>

            {hasActiveFilters && (
              <button
                onClick={handleClearFilters}
                className="inline-flex items-center gap-1 px-2 py-1.5 text-sm text-accent hover:underline cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        {filteredRepos.length === 0 ? (
          <div className="py-20 text-center flex flex-col items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-sunken flex items-center justify-center text-faint">
              <Search className="w-5 h-5" />
            </div>
            <h2 className="text-lg font-semibold text-ink">Nothing matches that</h2>
            <p className="text-sm text-muted max-w-sm">Try a different word, or clear the filters to see everything.</p>
            <button
              onClick={handleClearFilters}
              className="mt-2 px-4 py-2 bg-accent hover:bg-accent-hover text-accent-ink font-semibold text-sm rounded-lg transition-colors cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-12">
            {searchQuery.trim() && (
              <p className="-mb-6 text-sm text-muted" aria-live="polite">
                {filteredRepos.length} {filteredRepos.length === 1 ? 'result' : 'results'} for “{searchQuery.trim()}”
              </p>
            )}
            {sections.map(section => {
              const info = KEY_STAGE_INFO[section.keyStage];
              return (
                <section key={section.keyStage} aria-labelledby={`heading-${section.keyStage}`}>
                  <div className="flex items-baseline gap-3 mb-4">
                    <h2 id={`heading-${section.keyStage}`} className="font-display text-2xl font-semibold text-ink tracking-tight">
                      {info.heading}
                    </h2>
                    <span className="text-sm text-faint">
                      {info.detail} · {section.items.length} {section.items.length === 1 ? 'resource' : 'resources'}
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.items.map(repo => (
                      <RepoCard
                        key={repo.id}
                        repo={repo}
                        onPreview={setPreviewRepo}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        )}
      </main>

      <footer className="border-t border-line py-6 text-center text-sm text-faint">
        Teach Science First · {repositories.length} resources for KS3 to A-Level
      </footer>

      <RepoModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingRepo(null);
        }}
        onSave={handleSaveRepo}
        initialRepo={editingRepo}
      />

      <PreviewModal repo={previewRepo} onClose={() => setPreviewRepo(null)} />

      {toastMessage && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 px-4 py-2.5 bg-ink text-page text-sm rounded-lg shadow-lg animate-[slideUp_0.2s_ease-out_both]"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
