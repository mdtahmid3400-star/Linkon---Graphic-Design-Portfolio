export type Page = 'home' | 'work' | 'about' | 'contact';

export interface Project {
  id: string;
  title: string;
  image: string;
  tags: string[];
  // Fix: Add optional properties to support ProjectDetailPage and resolve TypeScript errors.
  heroImage?: string;
  tagline?: string;
  summary?: string;
  role?: string;
  projectType?: string;
  problem?: string;
  responsibilities?: string[];
  process?: string;
  wireframesImage?: string;
  finalScreens?: string[];
  outcomes?: string;
}
