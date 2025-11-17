import { theme } from '@/styles/theme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { FarmForm } from './FarmForm';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('FarmForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar os campos do formulário', () => {
    renderWithTheme(<FarmForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText(/Nome da Fazenda/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Cidade/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Estado/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Área Total/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Área Agricultável/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Área de Vegetação/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancelar/i)).toBeInTheDocument();
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
  });

  it('não deve submeter formulário vazio', async () => {
    const user = userEvent.setup();
    renderWithTheme(<FarmForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const submitButton = screen.getByText(/Salvar Fazenda/i);
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('deve chamar onCancel quando botão cancelar for clicado', async () => {
    const user = userEvent.setup();
    renderWithTheme(<FarmForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const cancelButton = screen.getByText(/Cancelar/i);
    await user.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
  });

  it('não deve submeter quando áreas excederem o total', async () => {
    const user = userEvent.setup();
    renderWithTheme(<FarmForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText(/Nome da Fazenda/i);
    const cityInput = screen.getByLabelText(/Cidade/i);
    const stateSelect = screen.getByLabelText(/Estado/i);
    const totalAreaInput = screen.getByLabelText(/Área Total/i);
    const arableAreaInput = screen.getByLabelText(/Área Agricultável/i);
    const vegetationAreaInput = screen.getByLabelText(/Área de Vegetação/i);
    const submitButton = screen.getByText(/Salvar Fazenda/i);

    await user.type(nameInput, 'Fazenda Teste');
    await user.type(cityInput, 'São Paulo');
    await user.selectOptions(stateSelect, 'SP');
    await user.type(totalAreaInput, '100');
    await user.type(arableAreaInput, '60');
    await user.type(vegetationAreaInput, '50');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('deve submeter formulário com dados válidos', async () => {
    const user = userEvent.setup();
    renderWithTheme(<FarmForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText(/Nome da Fazenda/i);
    const cityInput = screen.getByLabelText(/Cidade/i);
    const stateSelect = screen.getByLabelText(/Estado/i);
    const totalAreaInput = screen.getByLabelText(/Área Total/i);
    const arableAreaInput = screen.getByLabelText(/Área Agricultável/i);
    const vegetationAreaInput = screen.getByLabelText(/Área de Vegetação/i);
    const submitButton = screen.getByText(/Salvar Fazenda/i);

    await user.type(nameInput, 'Fazenda Teste');
    await user.type(cityInput, 'São Paulo');
    await user.selectOptions(stateSelect, 'SP');
    await user.type(totalAreaInput, '100');
    await user.type(arableAreaInput, '50');
    await user.type(vegetationAreaInput, '40');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
