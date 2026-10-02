import React, { useState } from 'react';
import { 
  ExternalLink, 
  Eye, 
  Copy, 
  Check, 
  FileCode2, 
  Star, 
  Folder, 
  Dna, 
  FlaskConical, 
  Atom
} from 'lucide-react';
import { ScienceResource } from '../types';

interface RepoCardProps {
  repo: ScienceResource;
  onPreview: (repo: ScienceResource) => void;
  onToggleFavorite: (id: string) => void;
}

export const RepoCard: React.FC<RepoCardProps> = ({
  repo,
  onPreview,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const fullUrl = `${window.location.origin}${repo.url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getSubjectIcon = () => {
    switch (repo.subject) {
      case 'Biology':
        return <Dna className="w-3.5 h-3.5 text-emerald-400 shrink-0" />;
      case 'Chemistry':
        return <FlaskConical className="w-3.5 h-3.5 text-amber-400 shrink-0" />;
      case 'Physics':
        return <Atom className="w-3.5 h-3.5 text-cyan-400 shrink-0" />;
    }
  };

  const getCategoryColor = () => {
    switch (repo.category) {
      case 'Simulations':
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40';
      case 'Concepts':
        return 'text-emerald-400 bg-emerald-950/60 border-emerald-800/40';
      default:
        return 'text-cyan-400 bg-cyan-950/60 border-cyan-800/40';
    }
  };

  return (
    <article className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-700/60 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/30">
      
      {/* Top zone: Breadcrumb Hierarchy & Star */}
      <div>
        {/* Hierarchy path */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 tracking-wide overflow-hidden truncate">
            <span className="text-cyan-400 font-semibold">{repo.keyStage}</span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className="text-slate-300 flex items-center gap-1">
              {getSubjectIcon()}
              <span>{repo.subject}</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">/</span>
            <span className={`px-1.5 py-0.2 rounded text-[10px] border ${getCategoryColor()}`}>
              {repo.category}
            </span>
          </div>

          <button
            onClick={() => onToggleFavorite(repo.id)}
            className={`p-1 rounded hover:bg-slate-800 transition-colors cursor-pointer ${
              repo.isFavorite ? 'text-amber-400' : 'text-slate-600 hover:text-slate-400'
            }`}
            title={repo.isFavorite ? 'Remove from favorites' : 'Mark as favorite'}
          >
            <Star className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Primary Title */}
        <h3 className="text-base sm:text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug mb-2">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-start justify-between gap-1.5"
          >
            <span>{repo.title}</span>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-3">
          {repo.description}
        </p>

        {/* Folder Structure Path Location */}
        <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-slate-800/90 rounded-lg text-xs font-mono text-slate-300 mb-3 overflow-hidden">
          <Folder className="w-3.5 h-3.5 text-amber-400/90 shrink-0" />
          <span className="truncate text-slate-400 text-[11px]" title={repo.path}>
            {repo.path}
          </span>
        </div>

        {/* Notes if available */}
        {repo.authorNotes && (
          <p className="text-[11px] text-slate-500 italic mb-4">
            💡 {repo.authorNotes}
          </p>
        )}
      </div>

      {/* Action Bar */}
      <div className="pt-3.5 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
        {/* Primary Action: Open index.html in New Tab */}
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-cyan-600/95 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
          title={`Launch ${repo.fileName} in a dedicated new tab`}
        >
          <span>Open {repo.fileName}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Secondary In-App Preview */}
        <button
          onClick={() => onPreview(repo)}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title="Preview application in portal iframe"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title={copied ? 'URL Copied!' : 'Copy full URL to clipboard'}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

    </article>
  );
};
