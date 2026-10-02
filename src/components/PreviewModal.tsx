import React, { useEffect } from 'react';
import { X, ExternalLink, RefreshCw, Folder, FileCode2 } from 'lucide-react';
import { ScienceResource } from '../types';

interface PreviewModalProps {
  repo: ScienceResource | null;
  onClose: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({ repo, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!repo) return null;

  const handleReload = () => {
    const iframe = document.getElementById('preview-frame') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-6xl h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Top Control Bar */}
        <div className="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/60 shrink-0">
              {repo.keyStage} · {repo.subject}
            </span>
            <h2 className="text-sm font-semibold text-slate-100 truncate">
              {repo.title}
            </h2>
            <span className="text-xs font-mono text-slate-500 hidden md:inline truncate">
              ({repo.path})
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleReload}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-xs transition-colors flex items-center gap-1 cursor-pointer"
              title="Reload Frame"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>

            {/* Crucial: Open in new tab from the preview */}
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              title="Open full page in a new browser tab"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
              title="Close Preview (Esc)"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Embedded Iframe */}
        <div className="flex-1 bg-slate-950 relative">
          <iframe
            id="preview-frame"
            src={repo.url}
            title={repo.title}
            className="w-full h-full border-0"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
          />
        </div>

        {/* Footer info strip */}
        <div className="px-4 py-2 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span className="flex items-center gap-1.5">
            <Folder className="w-3 h-3 text-amber-400" />
            <span className="text-slate-300">{repo.path}</span>
          </span>
          <span className="text-slate-500">Press ESC or click close to return to portal</span>
        </div>

      </div>
    </div>
  );
};
