import { useId } from 'react';
import { ErrorText, Label, SelectWrapper, StyledSelect } from './Select.styles';

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: SelectOption[];
}

export const Select: React.FC<SelectProps> = ({
  label,
  error,
  fullWidth,
  options,
  id,
  name,
  ...props
}) => {
  const generatedId = useId();
  const selectId = id || name || generatedId;
  return (
    <SelectWrapper $fullWidth={fullWidth}>
      {label && <Label htmlFor={selectId}>{label}</Label>}
      <StyledSelect id={selectId} name={name} $hasError={!!error} {...props}>
        <option value="">Selecione...</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
      {error && <ErrorText>{error}</ErrorText>}
    </SelectWrapper>
  );
};
