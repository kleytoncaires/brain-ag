import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { rgbToRgba } from '@shared/lib/converters/color';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

export const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export const Logo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text.white};
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-left: auto;
`;

export const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.text.white};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => rgbToRgba(theme.colors.text.white, 0.1)};
  }

  &.active {
    background-color: ${({ theme }) => rgbToRgba(theme.colors.text.white, 0.2)};
  }
`;
