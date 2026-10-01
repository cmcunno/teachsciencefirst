import React from 'react';
import { Lock, Plus, Atom } from 'lucide-react';
import { ScienceDiscipline } from '../types';

interface TopBarProps {
  currentCategory: ScienceDiscipline | 'All';
  onSelectCategory: (cat: ScienceDiscipline | 'All') => void;
  onAddRepo: () => void;
  onLock: () => void;
  repoCount: number;
}

const CATEGORIES: (ScienceDiscipline | 'All')[] = [
  'All',
  'Physics',
  'Chemistry',
  'Biology',
  'Earth & Space',
  'Teaching Tools'
];

export const TopBar: React.FC<TopBarProps> = ({
  currentCategory,
  onSelectCategory,
  onAddRepo,
  onLock,
  repoCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-2.5 shrink-0">
          <Atom className="w-5 h-5 text-cyan-400" />
          <button 
            onClick={() => onSelectCategory('All')} 
            className="text-base sm:text-lg font-bold tracking-tight text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Pyrex Science Hub
          </button>
        </div>

        {/* Zone 2: 4-6 clean text navigation links / filter controls */}
        <nav className="hidden md:flex items-center gap-1 sm:gap-2">
          {CATEGORIES.map((cat) => {
            const isActive = currentCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-slate-800 text-cyan-400 font-semibold shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <button
            onClick={onAddRepo}
            className="px-3 py-1.5 text-xs font-medium bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-lg transition-colors flex items-center gap-1.5 font-semibold whitespace-nowrap cursor-pointer shadow-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Add Repo</span>
            <span className="sm:hidden">Add</span>
          </button>

          <button
            onClick={onLock}
            title="Lock Portal Session"
            className="px-3 py-1.5 text-xs font-medium bg-slate-900 hover:bg-slate-800 border border-slate-700/80 text-slate-300 hover:text-slate-100 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <Lock className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Lock Portal</span>
            <span className="sm:hidden">Lock</span>
          </button>
        </div>

      </div>

      {/* Mobile navigation tab strip */}
      <div className="md:hidden border-t border-slate-800/80 px-4 py-2 flex items-center gap-1 overflow-x-auto no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = currentCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-2.5 py-1 text-xs font-medium rounded-md whitespace-nowrap shrink-0 transition-colors ${
                isActive
                  ? 'bg-slate-800 text-cyan-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>
    </header>
  );
};
