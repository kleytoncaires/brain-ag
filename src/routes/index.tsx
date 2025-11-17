import { dashboardRoutes } from '@/domains/dashboard';
import { producersRoutes } from '@/domains/producers';
import { MainLayout } from '@shared/ui';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [...dashboardRoutes, ...producersRoutes],
  },
]);
