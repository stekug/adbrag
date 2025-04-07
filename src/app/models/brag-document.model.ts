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
  date: Date;
  title: string;
  subTitel: string;
  description: string;
  techStack: string[];
}
