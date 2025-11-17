import { forwardRef, useId } from 'react';
import { ErrorText, InputWrapper, Label, StyledInput } from './Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth, id, name, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id || name || generatedId;
    return (
      <InputWrapper $fullWidth={fullWidth}>
        {label && <Label htmlFor={inputId}>{label}</Label>}
        <StyledInput ref={ref} id={inputId} name={name} $hasError={!!error} {...props} />
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    );
  }
);
