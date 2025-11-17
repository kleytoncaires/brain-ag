import { StyledCard } from './Card.styles';

export interface CardProps {
  children: React.ReactNode;
  padding?: string;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, padding, className }) => {
  return (
    <StyledCard padding={padding} className={className}>
      {children}
    </StyledCard>
  );
};
