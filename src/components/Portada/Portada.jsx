import PropTypes from 'prop-types';
import { FormAñadirPlata } from '../FormAñadirPlata/FormAñadirPlata.jsx';
import './Portada.css';

const Portada = ({ onSendData }) => {
  return (
    <section className='portadaSection'>
      <article className='portadaArticle'>
        <h2 
          className='h2Portada' 
          tabIndex='2'
        >Pagá tus servicios desde la comodidad de tu hogar</h2>
      </article>
      <FormAñadirPlata onSendData={onSendData} />
    </section>
  );
};
Portada.propTypes = {
  onSendData: PropTypes.func.isRequired // Aquí estás validando que onSendData sea una función y que sea requerida
};

export default Portada
