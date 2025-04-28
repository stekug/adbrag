export const DUMMY_BRAGS = [
  {
    id: 'brag-2024',
    year: '2024',
    goalsThisYear: [
      { id: 'goal-1', text: 'Improve JavaScript fundamentals.' },
      { id: 'goal-2', text: 'Learn the basics of Angular.' },
      { id: 'goal-3', text: 'Complete at least two side projects.' },
      { id: 'goal-4', text: 'Start writing weekly learning notes.' },
    ],
    goalsNextYear: [
      {
        id: 'goal-5',
        text: 'Build and release a personal tool using Angular.',
      },
      {
        id: 'goal-6',
        text: 'Learn about state management patterns in frontend apps.',
      },
    ],
    projects: [
      {
        id: 'proj-1',
        startDate: '2024-03-01',
        endDate: '2024-04-12',
        title: 'Markdown Blog Generator',
        subTitle: 'CLI tool to create static markdown blogs',
        description:
          'Built a Node.js CLI app that generates a complete static blog folder structure with posts, images, and metadata from markdown files.',
        techStack: ['Node.js', 'JavaScript', 'Markdown'],
      },
      {
        id: 'proj-2',
        startDate: '2024-08-10',
        endDate: '2024-09-01',
        title: 'Angular Practice App',
        subTitle: 'Small task tracker to learn Angular fundamentals',
        description:
          'Created a small productivity app using Angular with routing, services, and basic component composition. Focused on learning the Angular CLI and modular structure.',
        techStack: ['Angular', 'TypeScript', 'SCSS'],
      },
    ],
    collaborations: [
      {
        id: 'collab-1',
        type: 'Mentoring',
        description:
          'Supported two junior developers during their onboarding process.',
        date: '2024-05-20',
        relatedTo: 'Team Alpha',
      },
      {
        id: 'collab-2',
        type: 'Code Review',
        description:
          'Reviewed and improved a complex feature PR related to authentication service.',
        date: '2024-06-10',
        relatedTo: 'Authentication Module',
      },
      {
        id: 'collab-3',
        type: 'Internal Talk',
        description:
          'Gave an internal workshop about best practices in writing clean JavaScript code.',
        date: '2024-07-05',
        relatedTo: 'Frontend Chapter',
      },
    ],
  },
  {
    id: 'brag-2025',
    year: '2025',
    goalsThisYear: [
      { id: 'goal-1', text: 'Build and release the first version of adbrag.' },
      {
        id: 'goal-2',
        text: 'Get more confident with Angular 19 and standalone components.',
      },
      {
        id: 'goal-3',
        text: 'Start tracking weekly learnings and accomplishments.',
      },
      {
        id: 'goal-4',
        text: 'Write at least one technical blog post about the brag-document concept.',
      },
      {
        id: 'goal-5',
        text: 'Contribute to an open-source project related to developer productivity.',
      },
    ],
    goalsNextYear: [
      { id: 'goal-6', text: 'Start mentoring junior developers regularly.' },
      {
        id: 'goal-7',
        text: 'Redesign adbrag with a team-focused collaboration mode.',
      },
      {
        id: 'goal-8',
        text: 'Explore full-stack integration with Supabase or Firebase.',
      },
      {
        id: 'goal-9',
        text: 'Give an internal talk on building personal productivity tools.',
      },
    ],
    projects: [
      {
        id: 'proj-1',
        startDate: '2025-01-10',
        endDate: '2025-02-15',
        title: 'Initial Release of adbrag',
        subTitle: 'Personal Brag Document App',
        description:
          'Designed and implemented the core structure of the application using Angular 19, including routing, service abstraction, and data persistence via localStorage.',
        techStack: ['Angular', 'TypeScript', 'SCSS', 'LocalStorage'],
      },
      {
        id: 'proj-2',
        startDate: '2025-03-01',
        endDate: '2025-04-01',
        title: 'UI Overhaul',
        subTitle: 'New component structure and layout redesign',
        description:
          'Refactored the layout using standalone components and improved accessibility. Integrated color themes and created a responsive layout for mobile use.',
        techStack: ['Angular', 'SCSS', 'RxJS', 'Figma'],
      },
      {
        id: 'proj-3',
        startDate: '2025-05-01',
        endDate: '2025-06-10',
        title: 'Export Feature',
        subTitle: 'PDF export for brag documents',
        description:
          'Added the ability to export completed brag documents as styled PDFs, ready for reviews or retros. Integrated third-party PDF export library.',
        techStack: ['Angular', 'jspdf', 'html2canvas'],
      },
    ],
    collaborations: [
      {
        id: 'collab-4',
        type: 'Monitoring Improvement',
        description:
          'Set up a new Grafana dashboard to monitor frontend API calls.',
        date: '2025-02-25',
        relatedTo: 'Frontend Monitoring',
      },
      {
        id: 'collab-5',
        type: 'Mentoring',
        description: 'Mentored Ben during his first Angular feature delivery.',
        date: '2025-03-15',
        relatedTo: 'Project Lighthouse',
      },
      {
        id: 'collab-6',
        type: 'Internal Talk',
        description:
          'Presented a session about scaling Angular applications in a team.',
        date: '2025-04-10',
        relatedTo: 'Dev Conference 2025',
      },
    ],
  },
];
