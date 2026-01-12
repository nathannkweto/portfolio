export type ProjectStatus = 'production' | 'production-ready' | 'mvp' | 'prototype';

export interface ArchitectureDiagram {
  title: string;
  description: string;
  imagePath: string; // local static asset
}

export interface DesignDecision {
  decision: string;
  rationale: string;
  tradeOffs: string;
}

export interface SecurityConsideration {
  area: string;
  description: string;
}

export interface FailureMode {
  scenario: string;
  handling: string;
}

export interface TechnologyStack {
  category: string; // e.g. "Backend", "Authentication", "Infrastructure"
  technologies: string[];
}

export interface ProjectCaseStudy {
  /** Identity */
  id: string;
  name: string;
  shortDescription: string;
  role: string;
  status: ProjectStatus;

  /** Problem & Scope */
  problemStatement: string;
  inScope: string[];
  outOfScope: string[];

  /** Architecture */
  architectureOverview: string;
  architectureDiagrams: ArchitectureDiagram[];

  /** Engineering Decisions */
  designDecisions: DesignDecision[];

  /** Risk & Security */
  securityConsiderations: SecurityConsideration[];

  /** Reliability */
  failureModes: FailureMode[];

  /** Technology */
  technologyStack: TechnologyStack[];

  /** Quality */
  testingStrategy: string;

  /** Maturity */
  knownLimitations: string[];
  lessonsLearned: string[];

  /** References */
  repositoryUrl?: string;
}
