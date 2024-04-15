import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes
import './FormAñadirPlata.css'

export const FormAñadirPlata = ({ onSendData }) => {
  const [inputValue, setInputValue] = useState('');
  const [isValid, setIsValid] = useState(null);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue === '' || inputValue <= 0 || isNaN(inputValue)) {
      setIsValid(false);
    } else {
      onSendData(inputValue, true);
      setInputValue('');
      setIsValid(true)
    }
  }

  const editarError = () => {
    if (isValid === false) {
      return { border: '3px solid #ff0000' }; // Devuelve un objeto con el estilo correcto cuando hay error
    }
    return {}; // Devuelve un objeto vacío cuando no hay error o no se ha validado aún
  }

  const MensajeDeError = () => {
    if (isValid === false) {
      return (
        <h4 className="mensajeDeErrorForm">Ingrese un valor valido!</h4>
      )
    }
  }

  return (
    <article className="portadaForm">
      <h2 className='portadaFormTitulo'>Subscription Tracker</h2>

      <form
        className="formAddMoney"
        onSubmit={handleSubmit}
      >
        <h2 className="h2FormAddMoney">Presupuesto</h2>

        <div className="inputAndButtonForm">
          <input
            className="inputForm"
            type="text"
            placeholder="Ej: $2500"
            value={inputValue}
            onChange={handleChange}
            style={editarError()}
          />
          <button
            className="buttonForm"
            type="submit"
          >Agregar</button>
        </div>

        <MensajeDeError />
        <h6 className="poweredBy">Powered by <a href="https://github.com/Schugu" target="_BLANK">Schugu</a>.</h6>
      </form>
    </article>

  );
}

// Agrega validación de props
FormAñadirPlata.propTypes = {
  onSendData: PropTypes.func.isRequired, // Asegura que onSendData sea una función y sea requerida
};
