import { Outlet } from 'react-router-dom';
import { Navigation } from '@shared/ui';
import { LayoutContainer, Main } from './MainLayout.styles';

export const MainLayout = () => {
  return (
    <LayoutContainer>
      <Navigation />
      <Main>
        <Outlet />
      </Main>
    </LayoutContainer>
  );
};
