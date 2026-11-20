import React, { useState, useEffect } from 'react';
import { X, Save, FileCode2, Globe } from 'lucide-react';
import { ScienceResource, KeyStage, ScienceDiscipline, ResourceCategory } from '../types';

interface RepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (repo: ScienceResource) => void;
  initialRepo: ScienceResource | null;
}

export const RepoModal: React.FC<RepoModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialRepo,
}) => {
  const [title, setTitle] = useState('');
  const [keyStage, setKeyStage] = useState<KeyStage>('KS4');
  const [subject, setSubject] = useState<ScienceDiscipline>('Biology');
  const [category, setCategory] = useState<ResourceCategory>('Simulations');
  const [url, setUrl] = useState('/resources/ks4/Biology/simulations/my-lab/index.html');
  const [description, setDescription] = useState('');
  const [authorNotes, setAuthorNotes] = useState('');
  const [isLocalRepo, setIsLocalRepo] = useState(true);

  useEffect(() => {
    if (initialRepo) {
      setTitle(initialRepo.title);
      setKeyStage(initialRepo.keyStage);
      setSubject(initialRepo.subject);
      setCategory(initialRepo.category);
      setUrl(initialRepo.url);
      setDescription(initialRepo.description);
      setAuthorNotes(initialRepo.authorNotes || '');
      setIsLocalRepo(initialRepo.isLocalRepo);
    } else {
      setTitle('');
      setKeyStage('KS4');
      setSubject('Biology');
      setCategory('Simulations');
      setUrl('/resources/ks4/Biology/simulations/my-lab/index.html');
      setDescription('');
      setAuthorNotes('');
      setIsLocalRepo(true);
    }
  }, [initialRepo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const slug = title.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const pathStr = url.startsWith('/') ? url.slice(1) : url;
    const fileName = pathStr.split('/').pop() || 'index.html';

    const stageLevel = keyStage === 'KS3' ? 'KS3 (Ages 11-14)' : keyStage === 'KS4' ? 'KS4 / GCSE (Ages 14-16)' : 'KS5 / A-Level (Ages 16-18)';

    const updatedRepo: ScienceResource = {
      id: initialRepo?.id || `res-custom-${Date.now()}`,
      title: title.trim(),
      keyStage,
      stageLevel,
      subject,
      category,
      slug: initialRepo?.slug || slug,
      url: url.trim(),
      path: pathStr,
      fileName,
      description: description.trim() || `Interactive ${category.toLowerCase()} resource for ${keyStage} ${subject}.`,
      isLocalRepo: isLocalRepo || url.endsWith('.html') || url.startsWith('/resources/'),
      authorNotes: authorNotes.trim(),
      isFavorite: initialRepo?.isFavorite || false,
    };

    onSave(updatedRepo);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-surface border border-line rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-line flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-ink">
              {initialRepo ? 'Edit resource' : 'Add a resource'}
            </h2>
            <p className="text-xs text-muted">
              Link to an activity in the resources folder or anywhere on the web
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-muted hover:text-ink hover:bg-sunken transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Calorimetry & Specific Heat Capacity Lab"
              className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink placeholder:text-faint text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-sm font-medium text-ink mb-1">
                Key Stage
              </label>
              <select
                value={keyStage}
                onChange={(e) => setKeyStage(e.target.value as KeyStage)}
                className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
              >
                <option value="KS3">KS3 (Ages 11-14)</option>
                <option value="KS4">KS4 / GCSE (Ages 14-16)</option>
                <option value="KS5">KS5 / A-Level (Ages 16-18)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as ScienceDiscipline)}
                className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
              >
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-ink mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ResourceCategory)}
                className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
              >
                <option value="Simulations">Simulations</option>
                <option value="Concepts">Concepts</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Link (web address or /resources/… path)
            </label>
            <input
              type="text"
              required
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                if (e.target.value.startsWith('http')) {
                  setIsLocalRepo(false);
                } else if (e.target.value.includes('.html')) {
                  setIsLocalRepo(true);
                }
              }}
              placeholder="/resources/ks4/Biology/simulations/my-lab/index.html"
              className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink placeholder:text-faint text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
            />
            <p className="text-[11px] text-faint mt-1">
              Local paths start with <code className="text-muted">/resources/.../index.html</code>.
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Description
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what students will explore and key scientific principles demonstrated..."
              className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink placeholder:text-faint text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-ink mb-1">
              Notes (optional)
            </label>
            <input
              type="text"
              value={authorNotes}
              onChange={(e) => setAuthorNotes(e.target.value)}
              placeholder="e.g. Ideal for pre-lab homework or revision recap..."
              className="w-full px-3 py-2 bg-page border border-line-strong rounded-lg text-ink placeholder:text-faint text-sm focus:outline-none focus:ring-2 focus:border-accent focus:ring-accent/20"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-line flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-accent hover:bg-accent-hover text-accent-ink font-semibold text-sm rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
