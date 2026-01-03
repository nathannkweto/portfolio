import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';

/**
 * App
 *
 * Root application component.
 * Responsible for bootstrapping the React app and wiring up the global
 * routing configuration.
 */
export const App: React.FC = () => {
  return (
    /**
     * RouterProvider injects the routing context into the entire application,
     * allowing all child components to access navigation and route params
     */
    <RouterProvider router={router} />
  );
};
