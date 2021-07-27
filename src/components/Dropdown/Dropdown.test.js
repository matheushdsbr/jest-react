import { Dropdown } from './Dropdown';

import { screen, render } from '../tests';

const title = 'Selecione a sua opção de pagamento';
const options = ['Crédito', 'Débito', 'Dinheiro'];

describe('Dropdown', () => {
  it('should start closed', () => {
    render(<Dropdown title={title} options={options} onSelect={() => {}} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
    expect(screen.queryByText(options[1])).not.toBeInTheDocument();
    expect(screen.queryByText(options[2])).not.toBeInTheDocument();
  });
});