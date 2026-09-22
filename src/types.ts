export interface SkillItem {
  id: string;
  name: string;
  level?: string;
  category: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  technology: string;
  level: string;
  projectUrl: string; // placeholder e.g. '#project-link'
  codeSnippet?: string;
  highlights: string[];
}

export interface JourneyStep {
  number: string;
  title: string;
  description: string;
  skillsFocus: string[];
}
