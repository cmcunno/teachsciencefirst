export type KeyStage = 'KS3' | 'KS4' | 'KS5';
export type ScienceDiscipline = 'Biology' | 'Chemistry' | 'Physics';
export type ResourceCategory = 'Concepts' | 'Simulations';

export interface ScienceResource {
  id: string;
  title: string;
  keyStage: KeyStage;
  stageLevel: string; // e.g. 'KS3 (Ages 11-14)', 'KS4 / GCSE (Ages 14-16)', 'KS5 / A-Level (Ages 16-18)'
  subject: ScienceDiscipline;
  category: ResourceCategory;
  slug: string;
  description: string;
  url: string; // e.g., '/resources/ks4/Biology/simulations/osmosis/index.html'
  path: string; // e.g., 'resources/ks4/Biology/simulations/osmosis/index.html'
  fileName: string; // 'index.html'
  isLocalRepo: boolean;
  isFavorite?: boolean;
  dateAdded?: string;
  authorNotes?: string;
}

// ScienceRepo alias for backwards compatibility
export type ScienceRepo = ScienceResource;

export interface AuthState {
  isUnlocked: boolean;
  unlockedAt: number | null;
}

export interface FolderNode {
  name: string;
  path: string;
  type: 'folder' | 'file';
  keyStage?: KeyStage;
  subject?: ScienceDiscipline;
  category?: ResourceCategory;
  resource?: ScienceResource;
  children?: FolderNode[];
  itemCount?: number;
}
