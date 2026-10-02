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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h2 className="text-base font-semibold text-slate-100">
              {initialRepo ? 'Edit Science Resource' : 'Add Teaching Resource'}
            </h2>
            <p className="text-xs text-slate-400">
              Configure application path and hierarchy
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Resource Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Calorimetry & Specific Heat Capacity Lab"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Key Stage
              </label>
              <select
                value={keyStage}
                onChange={(e) => setKeyStage(e.target.value as KeyStage)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="KS3">KS3 (Ages 11-14)</option>
                <option value="KS4">KS4 / GCSE (Ages 14-16)</option>
                <option value="KS5">KS5 / A-Level (Ages 16-18)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Subject
              </label>
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value as ScienceDiscipline)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="Biology">Biology</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Physics">Physics</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ResourceCategory)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                <option value="Simulations">Simulations</option>
                <option value="Concepts">Concepts</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              File Path or URL (e.g. /resources/.../index.html) *
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
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Local paths start with <code className="text-slate-400 font-mono">/resources/.../index.html</code>.
            </p>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Description & Learning Objectives
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe what students will explore and key scientific principles demonstrated..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Teacher / Pedagogy Notes (Optional)
            </label>
            <input
              type="text"
              value={authorNotes}
              onChange={(e) => setAuthorNotes(e.target.value)}
              placeholder="e.g. Ideal for pre-lab homework or revision recap..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Save className="w-4 h-4" />
              <span>Save Resource</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
