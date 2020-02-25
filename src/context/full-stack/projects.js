export const projects = [
  {
    type: 'Private',
    duration: ['Jul 2018', 'Continuing'],
    img: '/resources/ride-hailing.png',
    title: 'A ride hailing and ticketing system for local transportation',
    description: `A multi-tenant SaaS eco-system. It contains 10+ 
    <b>microservices</b> and most of them are based on 
    <b>Java 8, Spring, RabbitMQ, ElasticSearch, S3, Docker,
    Kubernetes</b> etc. And the frontend part is based on <b>Vue, Webpack & Node</b>.
    The main challenging part is to support
    multiple clients(so far 12) from the single instance of service (SaaS).`,
  },
  {
    type: 'Private',
    duration: ['Aug 2013', 'Sept 2014'],
    img: '/resources/ecommerce-cms.png',
    title: 'E-commerce CMS',
    description: `A full-stack e-commerce CMS. The most challenging parts were curated
    user feed, caching product details page, real time customer review,
    related product, recommended product, shipping box size calculator etc.
    `,
  },
];
