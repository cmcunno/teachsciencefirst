import React, { useState } from 'react';
import { 
  Folder, 
  FolderOpen, 
  FileCode2, 
  ChevronRight, 
  ChevronDown, 
  ExternalLink, 
  Eye, 
  Layers, 
  FlaskConical, 
  Atom, 
  Dna, 
  Sparkles,
  Search
} from 'lucide-react';
import { ScienceResource, KeyStage, ScienceDiscipline, ResourceCategory } from '../types';
import { resolveResourceUrl } from '../utils/url';

interface FolderTreeNavProps {
  resources: ScienceResource[];
  selectedKeyStage: KeyStage | 'All';
  selectedSubject: ScienceDiscipline | 'All';
  selectedCategory: ResourceCategory | 'All';
  selectedResourceId: string | null;
  onSelectKeyStage: (ks: KeyStage | 'All') => void;
  onSelectSubject: (sub: ScienceDiscipline | 'All') => void;
  onSelectCategory: (cat: ResourceCategory | 'All') => void;
  onSelectResource: (res: ScienceResource) => void;
  onPreviewResource: (res: ScienceResource) => void;
  onClearFilters: () => void;
}

export const FolderTreeNav: React.FC<FolderTreeNavProps> = ({
  resources,
  selectedKeyStage,
  selectedSubject,
  selectedCategory,
  selectedResourceId,
  onSelectKeyStage,
  onSelectSubject,
  onSelectCategory,
  onSelectResource,
  onPreviewResource,
  onClearFilters,
}) => {
  // Set of expanded folder paths
  const [expandedFolders, setExpandedFolders] = useState<Set<string>>(
    new Set(['resources', 'resources/ks3', 'resources/ks4', 'resources/ks5'])
  );
  const [treeSearch, setTreeSearch] = useState('');

  const toggleFolder = (folderKey: string) => {
    setExpandedFolders(prev => {
      const next = new Set(prev);
      if (next.has(folderKey)) {
        next.delete(folderKey);
      } else {
        next.add(folderKey);
      }
      return next;
    });
  };

  const expandAll = () => {
    const allPaths = new Set<string>(['resources']);
    stages.forEach(s => {
      allPaths.add(`resources/${s.toLowerCase()}`);
      ['Biology', 'Chemistry', 'Physics'].forEach(subj => {
        allPaths.add(`resources/${s.toLowerCase()}/${subj}`);
        ['concepts', 'simulations'].forEach(cat => {
          allPaths.add(`resources/${s.toLowerCase()}/${subj}/${cat}`);
        });
      });
    });
    setExpandedFolders(allPaths);
  };

  const collapseAll = () => {
    setExpandedFolders(new Set(['resources']));
  };

  const stages: KeyStage[] = ['KS3', 'KS4', 'KS5'];

  // Helper to get resources matching search within the tree
  const filterBySearch = (list: ScienceResource[]) => {
    if (!treeSearch.trim()) return list;
    const q = treeSearch.toLowerCase();
    return list.filter(r => 
      r.title.toLowerCase().includes(q) ||
      r.slug.toLowerCase().includes(q) ||
      r.path.toLowerCase().includes(q) ||
      r.subject.toLowerCase().includes(q)
    );
  };

  const subjectIcon = (subj: ScienceDiscipline) => {
    switch (subj) {
      case 'Biology':
        return <Dna className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'Chemistry':
        return <FlaskConical className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'Physics':
        return <Atom className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    }
  };

  const isFolderOpen = (key: string) => expandedFolders.has(key);

  return (
    <aside className="bg-slate-900/90 border border-slate-800 rounded-2xl flex flex-col overflow-hidden shadow-xl h-full">
      {/* Header bar */}
      <div className="p-3.5 border-b border-slate-800 flex items-center justify-between bg-slate-950/60">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span className="text-xs font-bold tracking-wider uppercase text-slate-200 font-mono">
            Resources Tree
          </span>
          <span className="px-1.5 py-0.5 text-[10px] font-mono bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 rounded">
            {resources.length} apps
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <button
            onClick={expandAll}
            className="px-2 py-0.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition-colors"
            title="Expand all folders"
          >
            Expand
          </button>
          <span className="text-slate-700">·</span>
          <button
            onClick={collapseAll}
            className="px-2 py-0.5 text-slate-400 hover:text-cyan-300 hover:bg-slate-800 rounded transition-colors"
            title="Collapse all folders"
          >
            Collapse
          </button>
        </div>
      </div>

      {/* Quick Search inside Tree */}
      <div className="p-2 border-b border-slate-800/80 bg-slate-950/40">
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={treeSearch}
            onChange={(e) => setTreeSearch(e.target.value)}
            placeholder="Filter files & folders..."
            className="w-full pl-8 pr-2.5 py-1.5 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder:text-slate-500 font-mono focus:outline-none focus:border-cyan-500/50"
          />
          {treeSearch && (
            <button
              onClick={() => setTreeSearch('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Tree Content Area */}
      <div className="p-2.5 overflow-y-auto space-y-1 text-xs select-none max-h-[calc(100vh-280px)] min-h-[350px]">
        {/* Root: resources/ */}
        <div className="space-y-0.5">
          <div 
            onClick={() => {
              toggleFolder('resources');
              onClearFilters();
            }}
            className={`flex items-center justify-between px-2 py-1.5 rounded-lg cursor-pointer transition-colors ${
              selectedKeyStage === 'All' && selectedSubject === 'All' && selectedCategory === 'All'
                ? 'bg-cyan-950/40 text-cyan-200 font-medium'
                : 'text-slate-300 hover:bg-slate-800/60'
            }`}
          >
            <div className="flex items-center gap-1.5">
              {isFolderOpen('resources') ? (
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              ) : (
                <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
              )}
              {isFolderOpen('resources') ? (
                <FolderOpen className="w-4 h-4 text-cyan-400" />
              ) : (
                <Folder className="w-4 h-4 text-cyan-400" />
              )}
              <span className="font-mono font-semibold">resources/</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono">
              {resources.length}
            </span>
          </div>

          {/* Subfolders: ks3, ks4, ks5 */}
          {isFolderOpen('resources') && (
            <div className="pl-3.5 ml-2 border-l border-slate-800/80 space-y-1 pt-0.5">
              {stages.map((stage) => {
                const stageKey = `resources/${stage.toLowerCase()}`;
                const stageOpen = isFolderOpen(stageKey);
                const stageResources = resources.filter(r => r.keyStage === stage);
                const isStageActive = selectedKeyStage === stage;
                
                // Get unique subjects in this stage
                const subjectsInStage = Array.from(new Set(stageResources.map(r => r.subject))) as ScienceDiscipline[];

                return (
                  <div key={stage} className="space-y-0.5">
                    {/* Stage Folder */}
                    <div 
                      onClick={() => {
                        toggleFolder(stageKey);
                        onSelectKeyStage(stage);
                      }}
                      className={`flex items-center justify-between px-2 py-1 rounded-md cursor-pointer transition-colors ${
                        isStageActive && selectedSubject === 'All'
                          ? 'bg-cyan-900/30 text-cyan-300 font-medium'
                          : 'text-slate-300 hover:bg-slate-800/50'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {stageOpen ? (
                          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
                        ) : (
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                        )}
                        {stageOpen ? (
                          <FolderOpen className="w-3.5 h-3.5 text-amber-400/90" />
                        ) : (
                          <Folder className="w-3.5 h-3.5 text-amber-400/90" />
                        )}
                        <span className="font-mono font-semibold text-slate-200">
                          {stage.toLowerCase()}
                        </span>
                        <span className="text-[10px] text-slate-500 font-sans">
                          {stage === 'KS3' ? '(Ages 11-14)' : stage === 'KS4' ? '(GCSE)' : '(A-Level)'}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 px-1 py-0.2 rounded bg-slate-800/60">
                        {stageResources.length}
                      </span>
                    </div>

                    {/* Subjects inside Stage */}
                    {stageOpen && (
                      <div className="pl-3.5 ml-2 border-l border-slate-800/80 space-y-0.5 pt-0.5">
                        {subjectsInStage.map((subj) => {
                          const subjKey = `${stageKey}/${subj}`;
                          const subjOpen = isFolderOpen(subjKey);
                          const subjResources = stageResources.filter(r => r.subject === subj);
                          const isSubjActive = isStageActive && selectedSubject === subj;

                          // Get unique categories (concepts, simulations)
                          const catsInSubj = Array.from(new Set(subjResources.map(r => r.category.toLowerCase())));

                          return (
                            <div key={subj} className="space-y-0.5">
                              {/* Subject Folder */}
                              <div
                                onClick={() => {
                                  toggleFolder(subjKey);
                                  onSelectKeyStage(stage);
                                  onSelectSubject(subj);
                                }}
                                className={`flex items-center justify-between px-2 py-1 rounded cursor-pointer transition-colors ${
                                  isSubjActive && selectedCategory === 'All'
                                    ? 'bg-slate-800 text-cyan-300 font-medium'
                                    : 'text-slate-300 hover:bg-slate-800/40'
                                }`}
                              >
                                <div className="flex items-center gap-1.5">
                                  {subjOpen ? (
                                    <ChevronDown className="w-3 h-3 text-slate-500" />
                                  ) : (
                                    <ChevronRight className="w-3 h-3 text-slate-500" />
                                  )}
                                  {subjectIcon(subj)}
                                  <span className="font-mono">{subj}</span>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">
                                  {subjResources.length}
                                </span>
                              </div>

                              {/* Categories inside Subject */}
                              {subjOpen && (
                                <div className="pl-3 ml-2 border-l border-slate-800/60 space-y-0.5 pt-0.5">
                                  {catsInSubj.map((catSlug) => {
                                    const catKey = `${subjKey}/${catSlug}`;
                                    const catOpen = isFolderOpen(catKey);
                                    const catDisplayName = catSlug.charAt(0).toUpperCase() + catSlug.slice(1) as ResourceCategory;
                                    const catResources = filterBySearch(
                                      subjResources.filter(r => r.category.toLowerCase() === catSlug)
                                    );
                                    const isCatActive = isSubjActive && selectedCategory === catDisplayName;

                                    if (treeSearch && catResources.length === 0) {
                                      return null;
                                    }

                                    return (
                                      <div key={catSlug} className="space-y-0.5">
                                        {/* Category Folder */}
                                        <div
                                          onClick={() => {
                                            toggleFolder(catKey);
                                            onSelectKeyStage(stage);
                                            onSelectSubject(subj);
                                            onSelectCategory(catDisplayName);
                                          }}
                                          className={`flex items-center justify-between px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                                            isCatActive
                                              ? 'bg-cyan-950/60 text-cyan-200'
                                              : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-200'
                                          }`}
                                        >
                                          <div className="flex items-center gap-1.5">
                                            {catOpen ? (
                                              <ChevronDown className="w-2.5 h-2.5 text-slate-500" />
                                            ) : (
                                              <ChevronRight className="w-2.5 h-2.5 text-slate-500" />
                                            )}
                                            {catOpen ? (
                                              <FolderOpen className="w-3 h-3 text-slate-400" />
                                            ) : (
                                              <Folder className="w-3 h-3 text-slate-400" />
                                            )}
                                            <span className="font-mono text-[11px] text-slate-300">
                                              {catSlug}/
                                            </span>
                                          </div>
                                          <span className="text-[10px] font-mono text-slate-500">
                                            {catResources.length}
                                          </span>
                                        </div>

                                        {/* Application Files inside Category */}
                                        {catOpen && (
                                          <div className="pl-3 ml-1.5 border-l border-slate-800/40 space-y-0.5 pt-0.5 pb-1">
                                            {catResources.map((res) => {
                                              const isSelected = selectedResourceId === res.id;
                                              return (
                                                <div
                                                  key={res.id}
                                                  onClick={() => onSelectResource(res)}
                                                  className={`group/item flex items-center justify-between px-2 py-1 rounded cursor-pointer transition-all ${
                                                    isSelected
                                                      ? 'bg-cyan-600/20 text-cyan-200 border border-cyan-500/40'
                                                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                                                  }`}
                                                  title={`${res.title}\nPath: ${res.path}`}
                                                >
                                                  <div className="flex items-center gap-1.5 truncate">
                                                    <FileCode2 className={`w-3.5 h-3.5 shrink-0 ${
                                                      res.category === 'Simulations' 
                                                        ? 'text-cyan-400' 
                                                        : 'text-emerald-400'
                                                    }`} />
                                                    <span className="truncate font-mono text-[11px]">
                                                      {res.slug}/
                                                      <span className="text-slate-500">{res.fileName}</span>
                                                    </span>
                                                  </div>

                                                  <div className="flex items-center gap-1 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                    {/* Quick Preview in Portal */}
                                                    <button
                                                      onClick={(e) => {
                                                        e.stopPropagation();
                                                        onPreviewResource(res);
                                                      }}
                                                      className="p-1 hover:bg-slate-700 rounded text-slate-300 hover:text-white"
                                                      title="Preview application"
                                                    >
                                                      <Eye className="w-3 h-3" />
                                                    </button>

                                                    {/* Open in new tab */}
                                                    <a
                                                      href={resolveResourceUrl(res.url)}
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                      onClick={(e) => e.stopPropagation()}
                                                      className="p-1 hover:bg-cyan-600 hover:text-slate-950 rounded text-cyan-400"
                                                      title="Launch index.html in new tab"
                                                    >
                                                      <ExternalLink className="w-3 h-3" />
                                                    </a>
                                                  </div>
                                                </div>
                                              );
                                            })}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Footer Status */}
      <div className="p-2.5 border-t border-slate-800 bg-slate-950/60 text-[11px] text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-1 font-mono text-[10px]">
          <Sparkles className="w-3 h-3 text-cyan-400" />
          <span>Vite Resources Directory</span>
        </span>
        <button
          onClick={onClearFilters}
          className="text-xs text-cyan-400 hover:text-cyan-300 underline font-mono"
        >
          Reset Filters
        </button>
      </div>
    </aside>
  );
};
