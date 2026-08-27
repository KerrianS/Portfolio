export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  level: number; // 0–100
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}
