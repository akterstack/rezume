export * from './masthead';

export const about = `
Full-stack developer working for 6+ years in Java and JavaScript stack.
 Open stack enthusiast. In leisure periods, read tech blog, learn trending
  tech & tools. Exploring cities and countryside are in the top of the list of hobbies.
`;

export const workflow = `
Beginning of a feature implementation or solving a problem, I frame box the 
problem/feature within some design patterns to keep the implementation clean 
and scalable. While writing code, I focus on design principles to 
keep code readable and maintainable. As a passionate software developer, I write 
tests of my code, do daily scrum, review pull request, share own opinion 
and thus try to play the role of a team player.
`;

export const skillSet = [
  {
    label: 'Backend',
    skills: [
      'Java 8, Kotlin, Groovy, Node.js',
      'Spring Boot, Webflux, Hibernate, ExpressJS, TypeORM',
      'PostgreSQL, MySQL, MongoDB, ElasticSearch',
      'JUnit 5, Mockito',
    ]
  },
  {
    label: 'Frontend',
    skills: [
      'TypeScript, JavaScript, ES6',
      'React, Redux, Vue, Webpack',
    ]
  },
  {
    label: 'DevOps',
    skills: [
      'Docker, Kubernetes, CI/CD',
    ]
  },
  {
    label: 'Misc.',
    skills: [
      'Microservice, REST, GraphQL',
      'Agile, SCRUM, Kanban, JIRA',
    ]
  },
];

export const projects = [
  {
    title: 'News Publication System',
    description: `A SaaS (multi-tenant) web publication system. The most challengin
    part is to serve custom data structures, themes and features from same instance 
    of the server. The backend system architecture includes multiple 
    <b>microservices</b> using <b>Java 8, Spring, RabbitMQ, ElasticSearch, S3, Docker,
    Kubernetes</b> etc. The frontends are built on top of <b>Node.js, React & Vue</b>.`
  },
  {
    title: 'E-commerce CMS',
    description: `A full-stack e-commerce CMS. The mentionable features are curated
    user feed according to their interest and buying history, caching
    product details page, real time customer review & third party plugin like
    related product, recommended product, minimum shipping box size calculator etc.
    `
  },
];

export const educations = [
  {
    title: 'BSc (Engg) in Information and Communication Technology',
    duration: ['2008', '2012'],
    school: {
      title: 'Mawlana Bhashani Science and Technology University, Bangladesh',
      website: 'https://mbstu.ac.bd'
    },
  }
];

export const experiences = [
  {
    title: 'Software Engineer',
    duration: ['December 2017', 'Ongoing'],
    company: {
      title: 'Cefalo Bangladesh Ltd',
      website: 'http://www.cefalo.com',
    },
    roles: [
      `Working as a consultant for <a class="inline-link" target="_blank" href="https://www.nhst.no/">NHST Media Group, Norway</a>`,
      'Lead and maintain a full-stack project based on Node.js & Vue',
      'Write & review code of several Java based Microservices',
      'Follow Agile, SCRUM, TDD, CI/CD (Jenkins on OpenShift)'
    ]
  }, {
    title: 'Software Engineer',
    duration: ['September 2014', 'December 2017'],
    company: {
      title: 'Dynamic Solution Innovators Ltd',
      website: 'http://www.dsinnovators.com',
    },
    roles: [
      `Worked as a software consultant for <a class="inline-link" target="_blank" href="https://www.jenzabar.com/">Jenzabar, USA</a>`,
      'Managed a full-stack development team consisting 5 developers and QA',
      'Worked directly to the product owner to collect new feature requirements',
      'Maintained daily stand up meeting, test progress and production deployments',
      'Developed a Java functional library using lambda on top of legacy custom Java EE framework'
    ]
  }, {
    title: 'Software Developer',
    duration: ['August 2013', 'September 2014'],
    company: {
      title: 'Bit Mascot (Pvt.) Ltd',
      website: 'https://www.bitmascot.com',
    },
    roles: [
      'Worked as a full-stack developer in an e-commerce CMS project',
      'Used Java, Spring, Hibernate and JavaScript',
      'Got experience in production grade support'
    ]
  },
];
