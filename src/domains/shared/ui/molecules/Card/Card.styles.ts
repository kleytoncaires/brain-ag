import styled from 'styled-components';

export const StyledCard = styled.div<{ padding?: string }>`
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: ${({ padding, theme }) => padding || theme.spacing.lg};
`;
