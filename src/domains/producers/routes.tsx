import type { RouteObject } from 'react-router-dom';
import { FarmFormPage } from './pages/FarmFormPage/FarmFormPage';
import { FarmsManagementPage } from './pages/FarmsManagement/FarmsManagement';
import { ProducerFormPage } from './pages/ProducerFormPage/ProducerFormPage';
import { ProducersListPage } from './pages/ProducersList/ProducersList';

export const producersRoutes: RouteObject[] = [
  {
    path: 'produtores',
    element: <ProducersListPage />,
  },
  {
    path: 'produtores/novo',
    element: <ProducerFormPage />,
  },
  {
    path: 'produtores/editar/:id',
    element: <ProducerFormPage />,
  },
  {
    path: 'produtores/:id/fazendas',
    element: <FarmsManagementPage />,
  },
  {
    path: 'produtores/:id/fazendas/nova',
    element: <FarmFormPage />,
  },
  {
    path: 'produtores/:id/fazendas/editar/:farmId',
    element: <FarmFormPage />,
  },
];
