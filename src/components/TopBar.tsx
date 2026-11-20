import React, { useEffect, useRef, useState } from 'react';
import { Atom, Search, Sun, Moon, MoreHorizontal, Plus, RotateCcw, Lock, X } from 'lucide-react';

interface TopBarProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  searchInputRef: React.RefObject<HTMLInputElement | null>;
  totalApps: number;
  isDark: boolean;
  onToggleTheme: () => void;
  onGoHome: () => void;
  onAddResource: () => void;
  onResetDefaults: () => void;
  onLock: () => void;
}

const SearchBox: React.FC<Pick<TopBarProps, 'searchQuery' | 'onSearchChange' | 'searchInputRef' | 'totalApps'> & { id: string; showHint?: boolean }> = ({
  searchQuery,
  onSearchChange,
  searchInputRef,
  totalApps,
  id,
  showHint,
}) => (
  <div className="relative w-full">
    <label htmlFor={id} className="sr-only">Search resources</label>
    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-faint pointer-events-none" />
    <input
      id={id}
      ref={searchInputRef}
      type="search"
      value={searchQuery}
      onChange={(e) => onSearchChange(e.target.value)}
      placeholder={`Search ${totalApps} resources — e.g. osmosis, half-life`}
      className="w-full pl-9 pr-10 py-2 bg-sunken border border-transparent rounded-lg text-sm text-ink placeholder:text-faint focus:outline-none focus:bg-surface focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors [&::-webkit-search-cancel-button]:hidden"
    />
    {searchQuery ? (
      <button
        onClick={() => onSearchChange('')}
        className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-faint hover:text-ink cursor-pointer"
        aria-label="Clear search"
      >
        <X className="w-4 h-4" />
      </button>
    ) : showHint ? (
      <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[11px] text-faint border border-line rounded px-1.5 leading-5 font-sans">/</kbd>
    ) : null}
  </div>
);

export const TopBar: React.FC<TopBarProps> = (props) => {
  const { isDark, onToggleTheme, onGoHome, onAddResource, onResetDefaults, onLock } = props;
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  // The mobile search box gets its own ref so the "/" shortcut targets the visible desktop one.
  const mobileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const menuItem =
    'w-full flex items-center gap-2.5 px-3 py-2 text-sm text-ink rounded-md hover:bg-sunken transition-colors cursor-pointer text-left';

  return (
    <header className="sticky top-0 z-40 bg-page/90 backdrop-blur-md border-b border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-4">
        <button onClick={onGoHome} className="flex items-center gap-2.5 shrink-0 cursor-pointer" aria-label="Teach Science First — show all resources">
          <span className="w-8 h-8 rounded-lg bg-accent text-accent-ink flex items-center justify-center">
            <Atom className="w-[18px] h-[18px]" />
          </span>
          <span className="font-display text-lg font-semibold text-ink tracking-tight">Teach Science First</span>
        </button>

        <div className="hidden md:block flex-1 max-w-md mx-auto">
          <SearchBox {...props} id="search-desktop" showHint />
        </div>

        <div className="flex items-center gap-1 ml-auto md:ml-0 shrink-0">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-lg text-muted hover:text-ink hover:bg-sunken transition-colors cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            title={isDark ? 'Light mode' : 'Dark mode'}
          >
            {isDark ? <Sun className="w-[18px] h-[18px]" /> : <Moon className="w-[18px] h-[18px]" />}
          </button>

          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((o) => !o)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${menuOpen ? 'bg-sunken text-ink' : 'text-muted hover:text-ink hover:bg-sunken'}`}
              aria-label="More options"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              title="More options"
            >
              <MoreHorizontal className="w-[18px] h-[18px]" />
            </button>
            {menuOpen && (
              <div
                role="menu"
                className="absolute right-0 mt-2 w-60 p-1.5 bg-surface border border-line rounded-xl shadow-lg animate-[fadeIn_0.12s_ease-out]"
              >
                <button role="menuitem" className={menuItem} onClick={() => { setMenuOpen(false); onAddResource(); }}>
                  <Plus className="w-4 h-4 text-muted" /> Add a resource
                </button>
                <button role="menuitem" className={menuItem} onClick={() => { setMenuOpen(false); onResetDefaults(); }}>
                  <RotateCcw className="w-4 h-4 text-muted" /> Restore default list
                </button>
                <div className="my-1 border-t border-line" />
                <button role="menuitem" className={menuItem} onClick={() => { setMenuOpen(false); onLock(); }}>
                  <Lock className="w-4 h-4 text-muted" /> Lock portal
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="md:hidden px-4 pb-3">
        <SearchBox {...props} searchInputRef={mobileRef} id="search-mobile" />
      </div>
    </header>
  );
};
