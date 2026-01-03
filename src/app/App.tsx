import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { router } from './router';
import theme from '../theme/theme';

/**
 * App
 *
 * Root application component.
 * Responsible for bootstrapping the React app and wiring up the global
 * routing configuration.
 */
export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline kicksstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};
