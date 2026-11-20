import React, { useEffect, useState } from 'react';
import { X, ExternalLink, RefreshCw, Maximize2, Minimize2 } from 'lucide-react';
import { ScienceResource } from '../types';
import { resolveResourceUrl } from '../utils/url';
import { SUBJECT_STYLE } from '../utils/subjects';

interface PreviewModalProps {
  repo: ScienceResource | null;
  onClose: () => void;
}

const iconButton =
  'p-2 rounded-lg text-muted hover:text-ink hover:bg-sunken transition-colors cursor-pointer';

export const PreviewModal: React.FC<PreviewModalProps> = ({ repo, onClose }) => {
  const [isMaximized, setIsMaximized] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    if (!repo) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (isMaximized) setIsMaximized(false);
      else onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [repo, onClose, isMaximized]);

  if (!repo) return null;

  const resolvedUrl = resolveResourceUrl(repo.url);
  const subject = SUBJECT_STYLE[repo.subject];

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm ${isMaximized ? 'p-0' : 'p-2 sm:p-6'}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={`Preview: ${repo.title}`}
        className={`bg-surface flex flex-col shadow-2xl overflow-hidden transition-all duration-200 ${
          isMaximized ? 'w-screen h-screen' : 'rounded-2xl w-full max-w-6xl h-[92vh] border border-line'
        }`}
      >
        <div className="pl-5 pr-3 py-2.5 border-b border-line flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${subject.bg}`} aria-hidden="true" />
            <h2 className="text-base font-semibold text-ink truncate">{repo.title}</h2>
            <span className="text-sm text-faint hidden sm:inline shrink-0">
              {repo.keyStage} · {repo.subject}
            </span>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            <button onClick={() => setReloadKey((k) => k + 1)} className={iconButton} aria-label="Reload" title="Reload">
              <RefreshCw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className={iconButton}
              aria-label={isMaximized ? 'Exit full screen' : 'Full screen'}
              title={isMaximized ? 'Exit full screen' : 'Full screen'}
            >
              {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <a
              href={resolvedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 px-3 py-1.5 bg-accent hover:bg-accent-hover text-accent-ink font-semibold text-sm rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span className="hidden sm:inline">Open in new tab</span>
              <span className="sm:hidden">Open</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button onClick={onClose} className={`${iconButton} ml-1`} aria-label="Close preview" title="Close (Esc)">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-white">
          <iframe
            key={reloadKey}
            src={resolvedUrl}
            title={repo.title}
            className="w-full h-full border-0"
            allow="fullscreen; autoplay"
            allowFullScreen
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
          />
        </div>
      </div>
    </div>
  );
};
