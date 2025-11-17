import { Logo, Nav, NavContainer, NavLinks, StyledNavLink } from './Navigation.styles';

export const Navigation = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo>Brain Agriculture</Logo>
        <NavLinks>
          <StyledNavLink to="/">Dashboard</StyledNavLink>
          <StyledNavLink to="/produtores">Produtores</StyledNavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
