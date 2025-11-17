import type { RouteObject } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard/Dashboard';

export const dashboardRoutes: RouteObject[] = [
  {
    index: true,
    element: <Dashboard />,
  },
];
