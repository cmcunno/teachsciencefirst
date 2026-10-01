export type ScienceDiscipline = 
  | 'Physics' 
  | 'Chemistry' 
  | 'Biology' 
  | 'Earth & Space' 
  | 'Teaching Tools';

export interface ScienceRepo {
  id: string;
  title: string;
  discipline: ScienceDiscipline;
  description: string;
  url: string; // e.g., '/repos/kinematics-motion-lab/index.html' or external homepage
  gradeLevel: string; // e.g. 'High School AP / College', 'Introductory 9-12'
  topics: string[];
  isLocalRepo: boolean; // true if index.html is bundled in this applet
  isFavorite?: boolean;
  dateAdded?: string;
  authorNotes?: string;
}

export interface AuthState {
  isUnlocked: boolean;
  unlockedAt: number | null;
}
