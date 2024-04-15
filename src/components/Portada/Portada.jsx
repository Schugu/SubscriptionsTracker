import { FormAñadirPlata } from '../FormAñadirPlata/FormAñadirPlata.jsx';
import './Portada.css';

const Portada = ({ onSendData }) => {
  return (
    <section className='portadaSection'>
      <article className='portadaArticle'>
        <h2 className='h2Portada'>Pagá tus servicios desde la comodidad de tu hogar</h2>
      </article>
      <FormAñadirPlata onSendData={onSendData} />
    </section>
  );
};

export default Portada;
