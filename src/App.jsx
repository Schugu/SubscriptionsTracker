import './App.css'
import { useState } from 'react'
import { FomrAñadirPlata } from './FormAñadirPlata.jsx'
import { Interface } from './Interface.jsx'

function App() {
  const [valorInput, setValorInput] = useState();
  const [isValid, setIsValid] = useState();

  const handleSendData = (valor, valid) => {
    setValorInput(valor);
    setIsValid(valid);
  };

  const MostrarElemento = ()=> {
    return (
      isValid 
        ? <Interface 
            valorInput={valorInput}
            setValorInput={setValorInput} 
          /> 
        : <Portada/>
    )
  }

  const Portada = ()=> {
    
    return (
      <section className='portadaSection'>
        <article className='portadaArticle'>
          <h2 className='h2Portada'>Pagá tus servicios desde la comodidad de tu hogar</h2>
        </article>
        <FomrAñadirPlata onSendData={handleSendData} />
      </section>
    )
  }

  return (
    <main className='main'>
      
      <MostrarElemento />

    </main>
  )
}

export default App
