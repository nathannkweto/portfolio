import type { ProjectCaseStudy } from '../types/project';

export const projects: ProjectCaseStudy[] = [
  {
    id: 'charitysun-erp-fullstack(',
    name: 'CharitySun Engineering ERP System',
    shortDescription: 'Real-time data processing ERP system.',
    role: 'Tech Lead',
    status: 'prototype',

    problemStatement:
      'CharitySun Engineering employees relied on traditional, non-standard methods of accomplishing tasks such as accounting, project management and product management. They needed a web-based platform that combines their business activity into a standard, single source of truth to ensure data-driven decision making.',

    inScope: [
      'Role-based access control',
      'Financial accounting and planning',
      'Project management and task distribution',
      'Product management',
      'Human Resource management',
      'User administration',
    ],
    outOfScope: [
      'Task automation',
      'Multi-currency support',
      'Compliance variation (accounting)',
      'CRM and Invoicing',
    ],

    architectureOverview:
      'The application applies a simple Backend-to-frontend architecture with the backend application ' +
      'structured as a Modulith application to separate business concerns while maintaining a single code base. ' +
      'The frontend and backend applications are hosted separately and communiate via HTTP requests.',

    architectureDiagrams: [
      {
        title: 'System Context Diagram',
        description: 'High-level data flow from Backend Service to the Frontend Client.',
        imagePath: '../public/charitysun-architecture.webp',
      },
    ],

    designDecisions: [
      {
        decision: 'Used the Modulith (Modular Monolith) Architecture',
        rationale:
          'A microservice architecture was too costly for a startup, the modulith architecture allowed us to separate the ' +
          'several buiness components into modules while maintaining the single source code base.',
        tradeOffs:
          'Increased complexity in development of separate modules while keeping track of commons.',
      },
      {
        decision: 'Redux was used for state management over Zustand',
        rationale:
          'Zustand has a less established ecosystem for debugging tools compared to Redux DevTools, which would significantly' +
          'slow down our development process.',
        tradeOffs:
          'Redux is too boilerplate-heavy for the rapid state mutations required real-time data refreshing.',
      },
    ],

    securityConsiderations: [
      {
        area: 'Authentication',
        description:
          'Implemented password hashing and input validation ensuring only validated email and password input is accepted and guarded against injections.',
      },
      {
        area: 'Backend Access',
        description:
          'Strict Cross Origin Resource Sharing (CORS) Policy blocking all requests except from the client domain.',
      },
    ],

    failureModes: [
      {
        scenario: 'Service Runtime',
        handling:
          'On the Google Cloud Run test server, we have set scaling to a minimum of 1 running instance to ensure loading ' +
          'times are minimal on first request after idling.',
      },
      {
        scenario: 'Execution Timeout',
        handling:
          'Optimistic update is rolled back, and a "Retry" toast notification is presented to the user.',
      },
    ],

    technologyStack: [
      { category: 'Frontend', technologies: ['React', 'TypeScript', 'Redux', 'Material UI'] },
      { category: 'Backend', technologies: ['Spring Boot', 'Java', 'REST', 'OpenAPI'] },
      { category: 'DevOps', technologies: ['Docker', 'GitHub Actions', 'Google Cloud Run'] },
    ],

    testingStrategy:
      'Unit tests (JUnit) for all business logic utils. Integration tests (Postman) for all API endpoints.',

    knownLimitations: [
      'UI is not well adaptive to all device screens, may be stretch-distorted on tablets and iPads.',
      'Initial load payload is significantly large and might cause delay (optimization planned for next phase).',
    ],

    lessonsLearned: [
      'Enforcing API contracts on development ensures smoother integration between frontend and backend and could help separate teams.',
      'Flyway keeps a record of run migrations and checks it on every run migration.',
    ],

    repositoryUrl: 'https://github.com/nathannkweto/charitysun-erp',
  },

  {
    id: 'matem-college-system',
    name: 'MATEM College Digital Administration System',
    shortDescription: 'A digital system for managing college affairs for students, lecturers and administration.',
    role: 'Frontend & Integration',
    status: 'production-ready',

    problemStatement:
      'Matem College planned on migrating their student management and administrative tasks to a modern' +
      ' digital-incorporated model to allow for easier management and data collection with minimal human-' +
      'input to avoid human-related errors in handling student data.',

    inScope: [
      'College Administration login',
      'Student and Lecturer portal login',
      'Curriculum and semester Management',
      'Exam and results Management',
      'Automated student grading and promotion',
      'Student and Lecturer data management',
      'Timetables and logistics',
    ],
    outOfScope: [
      'File sharing',
      'E-learning facilities',
      'Integration with other tools (Moodle, Zoom)',
      'Cash transfers for fee payment',
    ],

    architectureOverview:
      'The system uses a single backend service to serve data to web, mobile and desktop frontend clients.' +
      ' All communication between client apps and the backend app is done through HTTP requests on RESTful APIs.',

    architectureDiagrams: [
      {
        title: 'System Context Diagram',
        description: 'High-level data flow from Backend Service to the Frontend Client.',
        imagePath: '../public/matem-architecture.webp',
      },
    ],

    designDecisions: [
      {
        decision: 'Used OpenAPI to generate Clients',
        rationale:
          'We needed to apply strict adherence to the API contract not "code now and integrate later" type of development.',
        tradeOffs:
          'Increased time spent reading and understanding the API specifications for proper implementation.',
      },
      {
        decision: 'Flutter for the Frontend',
        rationale:
          'Flutter allows developping a single codebase for web, mobile and desktop, significantly reducing the complexity of development.',
        tradeOffs:
          'None-native client for web with un-web like navigation and difficult rendering.',
      },
    ],

    securityConsiderations: [
      {
        area: 'Auuthentication & Authorization',
        description:
          'Implemented strict RBAC (Role-based access control) to ensure loged in users are only allowed to access their authorized information.',
      },
      {
        area: 'XSS Prevention',
        description:
          'Strict Content Security Policy (CSP) blocking all inline scripts and external domains.',
      },
    ],

    failureModes: [
      {
        scenario: 'Huge initial load time',
        handling:
          '(Yet to be handled).',
      },
      {
        scenario: 'Simultaneous data updating',
        handling:
          'Lock data editing in transaction to prevent simultaneous writes. Prevent data writes within 5 minute intervals',
      },
    ],

    technologyStack: [
      { category: 'Frontend', technologies: ['Flutter', 'Dart', 'Riverpod', 'Material UI'] },
      { category: 'Backend', technologies: ['Laravel', 'PHP', 'REST'] },
      { category: 'DevOps', technologies: ['GitHub Actions'] },
    ],

    testingStrategy:
      'Unit tests for all business logic utils. Integration tests (Postman) for all API endpoints.',

    knownLimitations: [
      'Student portal is read-only (to avoid content discrepancies).',
      'No way of creating admin user, this ensures elevated access to data is limited until proper compliance is put in place.',
    ],

    lessonsLearned: [
      'Riverpod presents a developer friendly state management library compared to provider with its decoupling from the widget tree allowing for easier testing.',
      'Frontend performance can be significanlty improved by managing payloads from the backend and caching persisting data.',
    ],

    repositoryUrl: 'https://github.com/nathannkweto/college-admin',
  },
];