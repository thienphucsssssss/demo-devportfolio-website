export interface Project {
  id: string;
  title: string;
  subtitle: string;
  techStack: string[];
  category: 'Web App' | 'E-commerce' | 'Web Design' | 'Optimization' | 'Mobile / Crypto';
  image: string;
  description: string;
  featured: boolean;
  liveUrl?: string;
  githubUrl?: string;
  client?: string;
  year: string;
  highlights: string[];
  challenge: string;
  solution: string;
  metrics?: { label: string; value: string }[];
}

export interface Skill {
  name: string;
  category: 'Frontend' | 'Backend' | 'DevOps & Tools' | 'Design & CMS';
  level: 'Expert' | 'Advanced' | 'Proficient';
  featured: boolean;
  icon?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  process: string[];
  duration: string;
  iconName: string;
}

export interface CVExperience {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  keyAchievements: string[];
  technologies: string[];
}

export interface CVEducation {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  message: string;
  createdAt: string;
  status: 'sent' | 'read';
}

export interface HireInquiry {
  id: string;
  fullName: string;
  email: string;
  company?: string;
  serviceType: string;
  budgetRange: string;
  timeline: string;
  projectOverview: string;
  createdAt: string;
}
