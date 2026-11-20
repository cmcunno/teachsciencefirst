import React from 'react';
import { Atom, Dna, FlaskConical } from 'lucide-react';
import { KeyStage, ScienceDiscipline } from '../types';

/** One place for each subject's colour and icon, so every view agrees. */
export const SUBJECT_STYLE: Record<
  ScienceDiscipline,
  { text: string; bg: string; soft: string; Icon: React.FC<{ className?: string }> }
> = {
  Biology: { text: 'text-bio', bg: 'bg-bio', soft: 'bg-bio-soft', Icon: Dna },
  Chemistry: { text: 'text-chem', bg: 'bg-chem', soft: 'bg-chem-soft', Icon: FlaskConical },
  Physics: { text: 'text-phys', bg: 'bg-phys', soft: 'bg-phys-soft', Icon: Atom },
};

export const SUBJECT_ORDER: ScienceDiscipline[] = ['Biology', 'Chemistry', 'Physics'];

export const KEY_STAGE_INFO: Record<KeyStage, { short: string; heading: string; detail: string }> = {
  KS3: { short: 'KS3', heading: 'Key Stage 3', detail: 'Ages 11–14' },
  KS4: { short: 'GCSE', heading: 'Key Stage 4 · GCSE', detail: 'Ages 14–16' },
  KS5: { short: 'A-Level', heading: 'Key Stage 5 · A-Level', detail: 'Ages 16–18' },
};

export const KEY_STAGES: KeyStage[] = ['KS3', 'KS4', 'KS5'];
