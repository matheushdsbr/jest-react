import Dropdown from './index';

import { screen, render, userEvent } from '../tests';

const title = 'Selecione a sua opção de pagamento';
const options = ['Crédito', 'Débito', 'Dinheiro'];

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });

  it('should show options when open', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();

    userEvent.click(screen.getByRole('button', { name: title }));

    expect(screen.getByRole('menuitem',{ name: options[0] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem',{ name: options[1] })).toBeInTheDocument();
    expect(screen.getByRole('menuitem',{ name: options[2] })).toBeInTheDocument();
  });
});