import React, { useState } from 'react';
import { ExternalLink, Eye, Copy, Check, Edit2, Trash2, Globe, FileCode2, Star } from 'lucide-react';
import { ScienceRepo } from '../types';

interface RepoCardProps {
  repo: ScienceRepo;
  onPreview: (repo: ScienceRepo) => void;
  onEdit: (repo: ScienceRepo) => void;
  onDelete: (id: string) => void;
  onToggleFavorite: (id: string) => void;
}

export const RepoCard: React.FC<RepoCardProps> = ({
  repo,
  onPreview,
  onEdit,
  onDelete,
  onToggleFavorite,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    const fullUrl = repo.url.startsWith('http')
      ? repo.url
      : `${window.location.origin}${repo.url.startsWith('/') ? repo.url : `/${repo.url}`}`;
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="group bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-xl p-5 flex flex-col justify-between transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/20">
      
      {/* Top zone: Kicker & Favorite */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-2">
          {/* Unboxed metadata line with typographic separator */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono tracking-wide">
            <span className="text-cyan-400 font-medium">{repo.discipline}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{repo.gradeLevel}</span>
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
        <h3 className="text-lg font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors leading-snug mb-2">
          <a
            href={repo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline flex items-center justify-between gap-1"
          >
            <span>{repo.title}</span>
            <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-slate-400 line-clamp-3 leading-relaxed mb-4">
          {repo.description}
        </p>

        {/* Path / Target File Indicator */}
        <div className="flex items-center gap-2 p-2 bg-slate-950/80 border border-slate-800/80 rounded-lg text-xs font-mono text-slate-300 mb-4 overflow-hidden">
          {repo.isLocalRepo ? (
            <FileCode2 className="w-4 h-4 text-emerald-400 shrink-0" />
          ) : (
            <Globe className="w-4 h-4 text-sky-400 shrink-0" />
          )}
          <span className="truncate text-slate-300" title={repo.url}>
            {repo.url}
          </span>
        </div>

        {/* Topics unboxed list */}
        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-500 mb-4">
            {repo.topics.map((t, idx) => (
              <React.Fragment key={t}>
                <span className="hover:text-slate-300 transition-colors">{t}</span>
                {idx < repo.topics.length - 1 && (
                  <span aria-hidden="true" className="text-slate-700">·</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>

      {/* Action Bar */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 mt-auto">
        {/* Primary Action: Open index.html in New Tab */}
        <a
          href={repo.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-cyan-600/90 hover:bg-cyan-500 text-slate-950 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
          title="Open repository index.html in a new tab"
        >
          <span>Open index.html</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        {/* Secondary In-App Preview */}
        <button
          onClick={() => onPreview(repo)}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title="Preview inside portal frame"
        >
          <Eye className="w-3.5 h-3.5" />
        </button>

        {/* Copy Link */}
        <button
          onClick={handleCopy}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title={copied ? 'Copied to clipboard' : 'Copy link'}
        >
          {copied ? (
            <Check className="w-3.5 h-3.5 text-emerald-400" />
          ) : (
            <Copy className="w-3.5 h-3.5" />
          )}
        </button>

        {/* Edit repo */}
        <button
          onClick={() => onEdit(repo)}
          className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer"
          title="Edit repository details"
        >
          <Edit2 className="w-3.5 h-3.5" />
        </button>

        {/* Delete repo */}
        <button
          onClick={() => onDelete(repo.id)}
          className="p-2 bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-300 rounded-lg transition-colors cursor-pointer"
          title="Remove from portal"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      </div>

    </article>
  );
};
