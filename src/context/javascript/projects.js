export const projects = [
  {
    title: 'E-commerce eco-system',
    role: 'Junior Software Developer (Java & JavaScript)',
    duration: ['Aug 2013', 'Sept 2014'],
    img: '/resources/ecommerce-cms.png',
    description: `A full-stack e-commerce eco-system with headless CMS and separate publication tool(page builder). The core platform provides product details page with caching, product variation, order & inventory management, payment etc. Other necessary features are supported through its robust plugin system like related products, recommended products, shipping box size calculator, warehousing etc.
    `,
    tech: ['Java', 'Groovy', 'Spring', 'Hibernate', 'PostgreSQL'],
  },
  {
    title: 'Review and Recommendation Engine',
    role: 'Software Developer',
    duration: ['Sept 2014', 'Dec 2017'],
    img: '/resources/recommendation.png',
    description: `User can give their review based on different criteria on a topic/product. Based on user review, additional feedback, visiting and buying history, topic/products recommendations are generated for the related users. Multiple newsletters are sent based on the recommendation and subscription.`,
    tech: ['Java', 'Elasticsearch', 'MongoDB'],
  },
  {
    title: 'Ride sharing and ticketing system for local transportation',
    role: 'Full stack developer (Spring Boot, React, Node.js)',
    duration: ['Jan 2019', 'Ongoing'],
    img: '/resources/ride-hailing.png',
    description: `A ride sharing and ticket booking system for local markets with highly engaged traffic. Passengers can travel their destinations sharing with other passengers or can hire a full car. This service will run all over the cities along with highway traveling (inter-city).`,
    tech: [
      'Microservice',
      'Java',
      'Kotlin',
      'Spring Boot',
      'Elasticsearch',
      'MongoDB',
      'React',
      'Node.js',
    ],
  },
  {
    title: 'Config server for microservices',
    role: 'Lead developer and product architect',
    duration: ['Oct 2019', 'Ongoing'],
    img: '/resources/config-server.png',
    description: `Config server to manage all type of configurations like deployment, app context, page context etc for microservices with extendable environment feature like production, development, test, stage etc. It can be used in non microservice based infrastructure as well to keep all configuration in sync. It can push notification when any configuration has been changed to the related microservices`,
    tech: ['TypeScript', 'Node.js', 'React'],
  },
];
