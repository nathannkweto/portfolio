export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  githubUrl?: string; // Optional
  demoUrl?: string; // Optional
  features: string[];
}
