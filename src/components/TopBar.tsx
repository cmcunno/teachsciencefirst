import React from 'react';
import { Lock, Atom, FolderTree, LayoutGrid } from 'lucide-react';
import { KeyStage } from '../types';

interface TopBarProps {
  currentKeyStage: KeyStage | 'All';
  onSelectKeyStage: (ks: KeyStage | 'All') => void;
  showFolderTree: boolean;
  onToggleFolderTree: () => void;
  onLock: () => void;
  totalApps: number;
}

const KEY_STAGES: { id: KeyStage | 'All'; label: string; sub: string }[] = [
  { id: 'All', label: 'All Stages', sub: '24 Apps' },
  { id: 'KS3', label: 'KS3', sub: 'Ages 11-14' },
  { id: 'KS4', label: 'KS4 / GCSE', sub: 'Ages 14-16' },
  { id: 'KS5', label: 'KS5 / A-Level', sub: 'Ages 16-18' },
];

export const TopBar: React.FC<TopBarProps> = ({
  currentKeyStage,
  onSelectKeyStage,
  showFolderTree,
  onToggleFolderTree,
  onLock,
  totalApps
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Wordmark & count */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 rounded-lg bg-cyan-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Atom className="w-5 h-5 text-cyan-400" />
          </div>
          <button 
            onClick={() => onSelectKeyStage('All')} 
            className="text-left cursor-pointer"
          >
            <div className="text-sm sm:text-base font-bold tracking-tight text-slate-100 hover:text-cyan-400 transition-colors">
              Teach Science First
            </div>
            <div className="text-[10px] font-mono text-cyan-400/80 hidden sm:block">
              resources/ tree · {totalApps} modules
            </div>
          </button>
        </div>

        {/* Zone 2: Key Stage Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl">
          {KEY_STAGES.map((ks) => {
            const isActive = currentKeyStage === ks.id;
            return (
              <button
                key={ks.id}
                onClick={() => onSelectKeyStage(ks.id)}
                className={`px-3 py-1.5 text-xs rounded-lg whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-cyan-600 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 font-medium'
                }`}
              >
                <span>{ks.label}</span>
                <span className={`text-[10px] ${isActive ? 'text-slate-900/80' : 'text-slate-500'}`}>
                  {ks.sub}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Navigation toggles & Lock */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          {/* Toggle Folder Tree Sidebar */}
          <button
            onClick={onToggleFolderTree}
            className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg border transition-colors flex items-center gap-1.5 cursor-pointer ${
              showFolderTree 
                ? 'bg-slate-800 text-cyan-300 border-cyan-500/40' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
            }`}
            title="Toggle resources directory folder tree"
          >
            <FolderTree className="w-3.5 h-3.5 text-cyan-400" />
            <span className="hidden sm:inline">Folder Tree</span>
          </button>

          {/* Lock Portal */}
          <button
            onClick={onLock}
            title="Lock Portal (requires password pyrexpyrex to unlock)"
            className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-slate-100 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Lock</span>
          </button>
        </div>

      </div>

      {/* Mobile navigation tab strip for Key Stages */}
      <div className="md:hidden border-t border-slate-800/80 px-4 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {KEY_STAGES.map((ks) => {
          const isActive = currentKeyStage === ks.id;
          return (
            <button
              key={ks.id}
              onClick={() => onSelectKeyStage(ks.id)}
              className={`px-2.5 py-1 text-xs rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-cyan-600 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200 bg-slate-900'
              }`}
            >
              {ks.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
