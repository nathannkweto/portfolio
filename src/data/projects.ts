import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'enterprise-dashboard',
    title: 'Financial Analytics Dashboard',
    shortDescription: 'High-performance React dashboard for real-time market data.',
    fullDescription:
      'Designed and implemented a sub-millisecond latency dashboard for trading desks...',
    technologies: ['React', 'TypeScript', 'WebSocket', 'D3.js'],
    features: [
      'Real-time data visualization',
      'Role-based access control (RBAC)',
      'Offline caching strategy',
    ],
  },
  {
    id: 'auth-service',
    title: 'OAuth2 Identity Provider',
    shortDescription: 'Centralized authentication service for microservices architecture.',
    fullDescription:
      'Built a compliant OAuth2/OIDC provider to unify login across 12 internal apps...',
    technologies: ['Node.js', 'Redis', 'Docker'],
    features: ['JWT token rotation', 'Rate limiting middleware', 'Audit logging'],
  },
];
