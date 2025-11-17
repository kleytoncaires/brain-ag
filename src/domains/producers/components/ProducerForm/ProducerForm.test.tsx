import { theme } from '@/styles/theme';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { ProducerForm } from './ProducerForm';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe('ProducerForm', () => {
  const mockOnSubmit = jest.fn();
  const mockOnCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve renderizar os campos do formulário', () => {
    renderWithTheme(<ProducerForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    expect(screen.getByLabelText(/Nome do Produtor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tipo de Documento/i)).toBeInTheDocument();
    expect(screen.getByText(/Cancelar/i)).toBeInTheDocument();
    expect(screen.getByText(/Salvar/i)).toBeInTheDocument();
  });

  it('não deve submeter formulário vazio', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProducerForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const submitButton = screen.getByText(/Salvar/i);
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('deve chamar onCancel quando botão cancelar for clicado', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProducerForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const cancelButton = screen.getByText(/Cancelar/i);
    await user.click(cancelButton);

    expect(mockOnCancel).toHaveBeenCalled();
  });

  it('não deve submeter formulário com CPF inválido', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProducerForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText(/Nome do Produtor/i);
    const documentSelect = screen.getByLabelText(/Tipo de Documento/i);
    const submitButton = screen.getByText(/Salvar/i);

    await user.type(nameInput, 'João Silva');
    await user.selectOptions(documentSelect, 'CPF');

    const documentInput = screen.getByLabelText(/CPF/i);
    await user.type(documentInput, '12345678901');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).not.toHaveBeenCalled();
    });
  });

  it('deve submeter formulário com dados válidos', async () => {
    const user = userEvent.setup();
    renderWithTheme(<ProducerForm onSubmit={mockOnSubmit} onCancel={mockOnCancel} />);

    const nameInput = screen.getByLabelText(/Nome do Produtor/i);
    const documentSelect = screen.getByLabelText(/Tipo de Documento/i);
    const submitButton = screen.getByText(/Salvar/i);

    await user.type(nameInput, 'João Silva');
    await user.selectOptions(documentSelect, 'CPF');

    const documentInput = screen.getByLabelText(/CPF/i);
    await user.type(documentInput, '12345678909');
    await user.click(submitButton);

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalled();
    });
  });
});
