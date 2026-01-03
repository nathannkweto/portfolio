import { createBrowserRouter, Navigate } from 'react-router-dom';
import { AppLayout } from '../components/layout/AppLayout';
// We will create these page files in Step 9, but we import them now to define structure.
// For now, if these files don't exist, create empty placeholders or comment them out.
import { HomePage } from '../pages/Home/HomePage';
import { ProjectsPage } from '../pages/Projects/ProjectsPage';
import { ProjectDetailPage } from '../pages/ProjectDetail/ProjectDetailPage';
import { ExperiencePage } from '../pages/Experience/ExperiencePage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'projects',
          element: <ProjectsPage />,
        },
        {
          path: 'projects/:projectId',
          element: <ProjectDetailPage />,
        },
        {
          path: 'experience',
          element: <ExperiencePage />,
        },
        // Catch-all: Redirect unknown routes to home
        {
          path: '*',
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ],
  {
    // Essential for GitHub Pages (Step 13) to handle subdirectories
    basename: import.meta.env.BASE_URL,
  },
);
