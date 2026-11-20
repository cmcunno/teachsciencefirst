import React, { useState } from 'react';
import { ExternalLink, Maximize2, Link2, Check, Star } from 'lucide-react';
import { ScienceResource } from '../types';
import { resolveResourceUrl, getFullResourceUrl } from '../utils/url';
import { SUBJECT_STYLE } from '../utils/subjects';

interface RepoCardProps {
  repo: ScienceResource;
  onPreview: (repo: ScienceResource) => void;
  onToggleFavorite: (id: string) => void;
  showKeyStage?: boolean;
}

const iconButton =
  'p-2 rounded-lg text-faint hover:text-ink hover:bg-sunken transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-accent';

export const RepoCard: React.FC<RepoCardProps> = ({
  repo,
  onPreview,
  onToggleFavorite,
  showKeyStage = false,
}) => {
  const [copied, setCopied] = useState(false);
  const resolvedUrl = resolveResourceUrl(repo.url);
  const subject = SUBJECT_STYLE[repo.subject];
  const typeLabel = repo.category === 'Simulations' ? 'Simulation' : 'Concept';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullResourceUrl(repo.url));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable (e.g. insecure context) — fail quietly.
    }
  };

  return (
    <article className="group relative h-full bg-surface border border-line rounded-xl overflow-hidden flex flex-col transition-shadow hover:shadow-[0_6px_24px_-12px_rgba(20,30,40,0.25)] hover:border-line-strong">
      <div className={`h-1 ${subject.bg}`} aria-hidden="true" />

      <div className="p-5 pb-4 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2 text-xs font-medium">
            <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full ${subject.soft} ${subject.text}`}>
              <subject.Icon className="w-3.5 h-3.5" />
              {repo.subject}
            </span>
            <span className="text-faint">
              {showKeyStage && <>{repo.keyStage} · </>}
              {typeLabel}
            </span>
          </div>

          <button
            onClick={() => onToggleFavorite(repo.id)}
            className={`-mr-1.5 p-1.5 rounded-lg transition-colors cursor-pointer hover:bg-sunken ${
              repo.isFavorite ? 'text-chem' : 'text-line-strong hover:text-faint'
            }`}
            aria-pressed={!!repo.isFavorite}
            aria-label={repo.isFavorite ? `Remove ${repo.title} from favourites` : `Add ${repo.title} to favourites`}
            title={repo.isFavorite ? 'Remove from favourites' : 'Add to favourites'}
          >
            <Star className={`w-4 h-4 ${repo.isFavorite ? 'fill-current' : ''}`} />
          </button>
        </div>

        <h3 className="text-[17px] font-semibold text-ink leading-snug mb-1.5">
          <a href={resolvedUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            {repo.title}
          </a>
        </h3>

        <p className="text-sm text-muted leading-relaxed line-clamp-2" title={repo.description}>
          {repo.description}
        </p>
      </div>

      <div className="px-5 pb-5 flex items-center gap-1.5">
        <a
          href={resolvedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 bg-accent hover:bg-accent-hover text-accent-ink font-semibold text-sm rounded-lg transition-colors inline-flex items-center justify-center gap-1.5"
        >
          Open
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <button
          onClick={() => onPreview(repo)}
          className={iconButton}
          aria-label={`Preview ${repo.title} here`}
          title="Preview without leaving this page"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
        <button
          onClick={handleCopy}
          className={iconButton}
          aria-label={`Copy link to ${repo.title}`}
          title={copied ? 'Link copied' : 'Copy link (to share with students)'}
        >
          {copied ? <Check className="w-4 h-4 text-bio" /> : <Link2 className="w-4 h-4" />}
        </button>
      </div>
    </article>
  );
};
