import styled from 'styled-components';

interface ButtonProps {
  $variant?: 'primary' | 'secondary' | 'danger' | 'success';
  $size?: 'small' | 'medium' | 'large';
  $fullWidth?: boolean;
}

export const StyledButton = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 0;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  font-family: inherit;

  ${({ $variant = 'primary', theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.primary};
          color: ${theme.colors.text.white};
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary};
          color: ${theme.colors.text.white};
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
      case 'danger':
        return `
          background-color: ${theme.colors.error};
          color: ${theme.colors.text.white};
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
      case 'success':
        return `
          background-color: ${theme.colors.success};
          color: ${theme.colors.text.white};
          &:hover:not(:disabled) {
            opacity: 0.9;
          }
        `;
      default:
        return '';
    }
  }}

  ${({ $size = 'small', theme }) => {
    switch ($size) {
      case 'small':
        return `
          padding: ${theme.spacing.sm} ${theme.spacing.md};
          font-size: ${theme.fontSize.sm};
        `;
      case 'medium':
        return `
          padding: ${theme.spacing.md} ${theme.spacing.lg};
          font-size: ${theme.fontSize.md};
        `;
      case 'large':
        return `
          padding: ${theme.spacing.lg} ${theme.spacing.xl};
          font-size: ${theme.fontSize.lg};
        `;
      default:
        return '';
    }
  }}

  ${({ $fullWidth }) => $fullWidth && 'width: 100%;'}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
  }
`;
