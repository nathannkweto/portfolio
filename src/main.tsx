import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './app/App';
import { ErrorBoundary } from './components/common/ErrorBoundary';

/**
 * Application Entry Point
 *
 * This file is responsible for initializing the React application
 * and mounting it to the DOM.
 *
 * ReactDOM.createRoot enables React 18's concurrent features,
 * providing improved performance and future scalability.
 */

// Locate the root DOM element where the React application will be mounted.
// The non-null assertion operator (!) is safe here because the element
// is guaranteed to exist in index.html.
const rootElement = document.getElementById('root')!;

ReactDOM.createRoot(rootElement).render(
  /**
   * React.StrictMode is a development-only tool that helps identify
   * potential problems such as unsafe lifecycle usage, deprecated APIs,
   * and unintended side effects.
   *
   * It does not affect production builds.
   */
  <React.StrictMode>
    <ErrorBoundary>
      {/* App serves as the root component that contains global providers,
          routing configuration, and application-level state. */}
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
