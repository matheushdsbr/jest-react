import { useState } from 'react';
import Dropdown from "./components/Dropdown";

function App() {
  const [selectedPayment, setSelectedPayment] = useState(null);

  return (
    <>
      {selectedPayment && (
        <div>
          <p>Pagamento selecionado: {selectedPayment}</p>
        </div>
      )}

      <Dropdown
        title="Selecione a sua opção de pagamento"
        options={['Crédito', 'Débito', 'Dinheiro']}
        onSelect={setSelectedPayment}
      />
    </>
  );
}

export default App;
