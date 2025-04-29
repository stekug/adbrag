export interface BragDocument {
  id: string;
  year: string;
  goalsThisYear: Goal[];
  goalsNextYear: Goal[];
  projects: Project[];
  collaborations: Collaboration[];
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

export interface Collaboration {
  id: string;
  type:
    | 'Code Review'
    | 'Internal Talk'
    | 'Mentoring'
    | 'Monitoring Improvement'
    | 'Meeting Notes'
    | 'Answered Questions';
  description: string;
  date: string;
  relatedTo: string;
}

export interface ProjectFormValue {
  title: string;
  subTitle: string;
  description: string;
  techStack: string;
  startDate: Date;
  endDate: Date;
}

export type GoalsSection = 'goalsThisYear' | 'goalsNextYear';
