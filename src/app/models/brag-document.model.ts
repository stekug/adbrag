export interface BragDocument {
  id: string;
  year: string;
  goalsThisYear: Goal[];
  goalsNextYear: Goal[];
  projects: Project[];
}

export interface Goal {
  id: string;
  text: string;
}

export interface Project {
  id: string;
  startDate: string;
  endDate: string;
  title: string;
  subTitle: string;
  description: string;
  techStack: string[];
}

export type GoalsSection = 'goalsThisYear' | 'goalsNextYear';
