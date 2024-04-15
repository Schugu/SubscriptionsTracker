import './App.css';
import { useState } from 'react';
import { Interface } from './components/Interface/Interface.jsx';
import Portada from './components/Portada/Portada.jsx';

function App() {
  const [valorInput, setValorInput] = useState();
  const [isValid, setIsValid] = useState();

  const handleSendData = (valor, valid) => {
    setValorInput(valor);
    setIsValid(valid);
  };

  return (
    <main className='main'>
      {isValid 
        ? <Interface valorInput={valorInput} setValorInput={setValorInput} />
        : <Portada onSendData={handleSendData} />
      }
    </main>
  );
}

export default App;