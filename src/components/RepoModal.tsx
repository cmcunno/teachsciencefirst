import React, { useState, useEffect } from 'react';
import { X, Plus, Save, ExternalLink, Globe, FileCode2 } from 'lucide-react';
import { ScienceRepo, ScienceDiscipline } from '../types';

interface RepoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (repo: ScienceRepo) => void;
  initialRepo?: ScienceRepo | null;
}

const DISCIPLINES: ScienceDiscipline[] = [
  'Physics',
  'Chemistry',
  'Biology',
  'Earth & Space',
  'Teaching Tools'
];

export const RepoModal: React.FC<RepoModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialRepo
}) => {
  const [title, setTitle] = useState('');
  const [discipline, setDiscipline] = useState<ScienceDiscipline>('Physics');
  const [url, setUrl] = useState('');
  const [gradeLevel, setGradeLevel] = useState('Grades 9-12');
  const [description, setDescription] = useState('');
  const [topicsStr, setTopicsStr] = useState('');
  const [authorNotes, setAuthorNotes] = useState('');
  const [isLocalRepo, setIsLocalRepo] = useState(true);

  useEffect(() => {
    if (initialRepo) {
      setTitle(initialRepo.title);
      setDiscipline(initialRepo.discipline);
      setUrl(initialRepo.url);
      setGradeLevel(initialRepo.gradeLevel);
      setDescription(initialRepo.description);
      setTopicsStr(initialRepo.topics.join(', '));
      setAuthorNotes(initialRepo.authorNotes || '');
      setIsLocalRepo(initialRepo.isLocalRepo);
    } else {
      setTitle('');
      setDiscipline('Physics');
      setUrl('/repos/my-science-lab/index.html');
      setGradeLevel('Grades 9-12');
      setDescription('');
      setTopicsStr('');
      setAuthorNotes('');
      setIsLocalRepo(true);
    }
  }, [initialRepo, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !url.trim()) return;

    const topics = topicsStr
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const updatedRepo: ScienceRepo = {
      id: initialRepo?.id || `repo-custom-${Date.now()}`,
      title: title.trim(),
      discipline,
      url: url.trim(),
      gradeLevel: gradeLevel.trim() || 'General Science',
      description: description.trim(),
      topics: topics.length > 0 ? topics : ['Science Lab', 'Interactive'],
      isLocalRepo: isLocalRepo || url.endsWith('.html') || url.startsWith('/repos/'),
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
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-semibold text-slate-100">
              {initialRepo ? 'Edit Repository Entry' : 'Register New Repository'}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 text-sm">
          
          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Repository / Homepage Title *
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Thermodynamics & Heat Engine Simulation"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Discipline Category
              </label>
              <select
                value={discipline}
                onChange={(e) => setDiscipline(e.target.value as ScienceDiscipline)}
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              >
                {DISCIPLINES.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                Target Grade Level
              </label>
              <input
                type="text"
                value={gradeLevel}
                onChange={(e) => setGradeLevel(e.target.value)}
                placeholder="e.g. Grades 9-12 · AP Physics"
                className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-mono uppercase text-slate-400">
                Target URL or Local index.html Path *
              </label>
              <span className="text-[11px] text-cyan-400 font-mono">
                Opens in new tab
              </span>
            </div>
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
              placeholder="/repos/my-module/index.html or https://..."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
            <p className="text-[11px] text-slate-500 mt-1">
              Local paths start with <code className="text-slate-400 font-mono">/repos/.../index.html</code>, or paste any external web curriculum URL.
            </p>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Curriculum Description & Learning Objectives
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
              Topics / Keywords (comma-separated)
            </label>
            <input
              type="text"
              value={topicsStr}
              onChange={(e) => setTopicsStr(e.target.value)}
              placeholder="e.g. Conservation of Energy, Work-Kinetic Theorem, Joules"
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
              Educator Notes & Lesson Tips (Optional)
            </label>
            <input
              type="text"
              value={authorNotes}
              onChange={(e) => setAuthorNotes(e.target.value)}
              placeholder="e.g. Recommended for unit 3 lab assessment."
              className="w-full px-3 py-2 bg-slate-950 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
            />
          </div>

          <div className="pt-4 border-t border-slate-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium text-xs transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 text-slate-950 rounded-lg font-semibold text-xs transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Save className="w-3.5 h-3.5" />
              <span>{initialRepo ? 'Save Changes' : 'Add to Portal'}</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
