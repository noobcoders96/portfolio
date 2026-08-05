export const profile = {
  name: 'Karthikeyan S',
  role: 'Java Developer',
  tagline: 'Backend Engineering · Java · Spring Boot · Microservices',
  email: 'karthikseenu1623@gmail.com',
  phone: '+91-9384665736',
  summary:
    "Java Developer at Tata Consultancy Services with 2+ years of experience building backend solutions in large-scale enterprise environments. Skilled in designing and developing Spring Boot-based backend services and REST APIs, with a focus on efficient data modeling and scalable, stable systems. Proficient in Java frameworks and microservices architecture, with a strong track record of collaborating effectively within cross-functional teams to deliver reliable, high-quality solutions on tight timelines.",
  matchScore: 98,
}

export const skillRows = [
  {
    title: 'Languages & Frameworks',
    items: ['Java', 'Spring Framework & Ecosystem', 'Spring Boot', 'SQL', 'Microservices'],
  },
  {
    title: 'Knowledge Areas',
    items: ['REST APIs', 'Concurrency', 'Multithreading', 'Computer Networks', 'DBMS'],
  },
  {
    title: 'Tools & Platforms',
    items: ['Postman', 'OpenAPI / Swagger UI', 'Git', 'Jenkins', 'Black Duck'],
  },
  {
    title: 'Currently Learning',
    items: ['Python'],
  },
]

// "Season 1" of his TCS role — each resume bullet reframed as an episode.
export const season = {
  seasonTitle: 'Systems Engineer · Tata Consultancy Services',
  seasonRange: '07/2024 – Present',
  episodes: [
    {
      title: 'The Struts Migration',
      synopsis:
        'Migrated key application components from Apache Struts to Spring Boot, improving maintainability, security, and deployment speed across legacy systems.',
    },
    {
      title: 'The Vulnerability Sweep',
      synopsis:
        'Led application revamp initiatives — dependency upgrades, version compatibility fixes, and vulnerability remediation using Black Duck — resolving issues across 7+ enterprise applications and improving security compliance and stability.',
    },
    {
      title: 'The Timeout Mystery',
      synopsis:
        'Diagnosed and resolved a critical database timeout issue causing failed row fetches under high traffic by tuning HikariCP connection pool settings — eliminating recurring timeouts and cutting average query response time by ~40% in production.',
    },
    {
      title: '20 Endpoints',
      synopsis:
        'Developed 20+ RESTful endpoints in Spring Boot for various enterprise applications, integrating with relational databases and automating daily report generation via scheduled cron jobs.',
    },
    {
      title: 'Lockdown',
      synopsis:
        'Designed and implemented secure authentication and authorization using Spring Security and JWT, enforcing role-based access control (RBAC) across REST APIs.',
    },
    {
      title: 'Sync',
      synopsis:
        'Built microservices-based applications with synchronous inter-service communication using OpenFeign Client, enabling reliable request-response interactions in a distributed architecture.',
    },
    {
      title: 'The N+1 Fix',
      synopsis:
        'Optimized database queries and JPA entity mappings, resolving N+1 query issues through fetch strategy tuning and reducing API response times for high-volume data processing.',
    },
    {
      title: 'Coverage',
      synopsis:
        'Wrote unit and integration tests using JUnit and Mockito across service and controller layers, improving code coverage and reducing regression defects.',
    },
    {
      title: 'Real-Time Status',
      synopsis:
        'Consumed external REST APIs and integrated with tools such as the Jira REST API to automate incident tracking and provide real-time status updates for stakeholders.',
    },
  ],
}

export const projects = [
  {
    title: 'BookMyShow Clone',
    badge: 'Personal Project',
    blurb:
      'A microservices-based clone of a ticket-booking platform with a React frontend and Spring Boot services — built to go hands-on with sync vs. async communication, distributed transactions, retries, and circuit breakers.',
    tags: ['React', 'Spring Boot', 'Microservices'],
  },
  {
    title: 'Multi-Tenant Job Board',
    badge: 'Reference Codebase',
    blurb:
      'A multi-tenant job board built with a microservices architecture, used as a practical anchor for the Java / Spring Boot stack — including Spring Security with JWT and multi-tenant ThreadLocal propagation.',
    tags: ['Spring Security', 'JWT', 'Multi-Tenant'],
  },
]
