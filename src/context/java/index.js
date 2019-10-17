export * from './masthead';

export const about = `
I am a full-stack developer working for 6+ years in Java and JavaScript stack.
 Other than that, I am an open stack enthusiast. Reading blog, learning new stacks
  exploring cities are in the list of my top favorite hobbies.
`;

export const workflow = `
Beginning of a feature implementation or solving a problem, I frame box the 
problem/feature within some design patterns to keep the implementation clean 
and scalable. While writing code, I focus on design principles as well to 
keep it readable and maintainable. As a passionate software developer, I write 
tests of my code, do daily scrum, review others code, share what I learn newly 
and thus try to play the role of a team player.
`;

export const skillSet = [
  {
    label: 'Backend',
    skills: [
      'Java 8, Kotlin, Groovy, Node.js',
      'Spring Boot, Webflux, Cloud, ExpressJS, TypeORM',
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
    title: 'Content Publication System',
    description: `A SaaS model (multi-tenant) web publication system. Serving custom
    data structure, themes and plugable custom features from same instance was 
    the most challenging part. The backend system architecture includes multiple 
    <b>microservices</b> using <b>Java 8, Spring, RabbitMQ, ElasticSearch, S3, Docker,
    Kubernetes</b> etc. The frontends are built on top of <b>Node.js, React & Vue</b>.`
  },
  {
    title: 'E-commerce CMS',
    description: `A full-stack e-commerce CMS. Supports third party plugin system.
    Besides contributing in core CMS development I wrote few plugins which are 
    related to product recommendation, minimum shipping box size calculator,
    user interests etc. <b>Java, JavaScript, Spring, Hibernate, Grails</b> are mostly
    used tech stack.`,
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
    duration: ['Dec 2017', 'Ongoing'],
    company: {
      title: 'Cefalo Bangladesh Ltd',
      website: 'http://www.cefalo.com',
    },
    roles: [
      `Work as a consultant for <a class="inline-link" target="_blank" href="https://www.nhst.no/">NHST Media Group, Norway</a>`,
      'Lead and maintain a full-stack project based on Node.js & Vue',
      'Write & review code of several Java based Microservices',
      'Follow Agile, SCRUM, TDD, CI/CD using Jenkins on OpenShift'
    ]
  }, {
    title: 'Software Developer',
    duration: ['Sept 2014', 'Dec 2017'],
    company: {
      title: 'Dynamic Solution Innovators Ltd',
      website: 'http://www.dsinnovators.com',
    },
    roles: [
      `Worked as a software consultant for <a class="inline-link" target="_blank" href="https://www.jenzabar.com/">Jenzabar, USA</a>`,
      'Managed a small full-stack development team with 5 developers and QA',
      'Worked directly to the product owner to collect new features and requirements',
      'Maintain daily stand up meeting, test progress and production deployments',
      'Developed a Java functional library using lambda on top of legacy custom Java EE framework'
    ]
  }, {
    title: 'Junior Software Developer',
    duration: ['Aug 2013', 'Sept 2014'],
    company: {
      title: 'Bit Mascot (Pvt.) Ltd',
      website: 'https://www.bitmascot.com',
    },
    roles: [
      'Worked as a full-stack developer in an e-commerce CMS project',
      'Used Java, Spring, Hibernate and JavaScript',
      'Regularly attended tech sessions'
    ]
  },
];
