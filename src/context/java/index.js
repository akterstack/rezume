export * from './masthead';

export const about = `
I am a full-stack developer working for 6+ years in Java and JavaScript stack.
 Other than that, I am an open stack enthusiast. Reading blog, learning new stacks
  exploring cities are in the list of my top favorite hobbies.
`;

export const skillSet = [
  {
    label: 'Backend',
    skills: [
      'Java 8, Kotlin, Groovy, Node.js',
      'Spring Boot, Webflux, Cloud, ExpressJS, TypeORM',
      'JUnit 5, Mockito, Jest',
      'PostgreSQL, MySQL, MongoDB, ElasticSearch',
    ]
  },
  {
    label: 'Frontend',
    skills: [
      'TypeScript, ES6',
      'React, Redux, Vue, jQuery',
      'Bootstrap, TailwindCSS',
    ]
  },
  {
    label: 'DevOps',
    skills: [
      'Docker, Kubernetes, Jenkins, CI/CD',
    ]
  },
  {
    label: 'Misc.',
    skills: [
      'Microservice, REST, GraphQL',
      'JIRA, SCRUM, Kanban, Agile',
      'Git, Gradle, Maven, Webpack',
    ]
  },
];

export const experiences = [
  {
    duration: ['December 2017', 'Ongoing'],
    company: {
      title: 'Cefalo Bangladesh Ltd, Dhaka',
      website: 'http://www.cefalo.com',
    },
    roles: [
      {
        title: 'Lead Full-stack Developer',
        duration: ['Nov 2018', 'Present'],
        details: [
          'Design & develop features'
        ],
      },
      {
        title: 'Java Developer',
        duration: ['Dec 2017', 'Oct 2018'],
        details: '',
      }
    ]
  }, {
    duration: ['September 2014', 'December 2017'],
    company: {
      title: 'Dynamic Solution Innovators Ltd, Dhaka',
      website: 'http://www.dsinnovators.com',
    },
    roles: [
      {
        title: 'Team Lead',
        duration: ['Jul 2016', 'Dec 2017'],
        details: [
          'Managed a small development team with 3 full-stack developers and one QA member.',
          'Collected product features from product owner and break down the tasks and assigned developers',
          'Managed daily stand up meeting, test progress and deployments',
        ],
      },
      {
        title: 'Software Developer',
        duration: ['Sept 2014', 'Jun 2016'],
        details: [
          'Developed features using a custom in house Java EE framework',
          'Built a Java functional library using lambda to encourage declarative programming inside the team'
        ],
      }
    ]
  }, {
    duration: ['September 2014', 'December 2017'],
    company: {
      title: 'Bit Mascot (Pvt.) Ltd, Dhaka',
      website: 'https://www.bitmascot.com',
    },
    roles: [
      {
        title: 'Junior Software Developer (Full-stack)',
        duration: ['Aug 2013', 'Sept 2014'],
        details: [
          ''
        ],
      }
    ]
  },
];
