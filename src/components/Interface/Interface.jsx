import { useState } from "react";
import PropTypes from 'prop-types';
import './Interface.css'
import botonDelete from '../../assets/icons/botonDelete.svg'
import botonEdit from '../../assets/icons/botonEdit.svg'
import PDFComponent from "../PDFComponent/PDFComponent.jsx"
import { PDFDownloadLink } from "@react-pdf/renderer";

export const Interface = ({ valorInput }) => {
  const [valorServicio, setValorServicio] = useState('');
  const [valorGastado, setValorGastado] = useState(0);
  const [servicio, setServicio] = useState('');
  const [subs, setSubs] = useState([]);
  const [isValidServicio, setIsValidServicio] = useState(null);
  const [isValidValorServicio, setIsValidValorServicio] = useState(null);

  const [editMode, setEditMode] = useState(false);
  const [editedIndex, setEditedIndex] = useState(null);

  const valorDisp = valorInput - valorGastado;

  const serviciosMapeados = {
    netflix: 'Netflix',
    disneyPlus: 'Disney+',
    hboMax: 'HBO Max',
    starPlus: 'Star+',
    primeVideo: 'Prime Video',
    spotify: 'Spotify',
    appleTv: 'Apple TV',
    youtubePremium: 'YouTube Premium'
  };

  const handleChangeSelect = (e) => {
    setServicio(e.target.value);
    setIsValidServicio(e.target.value !== '' ? true : false); // Actualizar isValidServicio basado en la selección de servicio
  }

  const handleChangeInput = (e) => {
    setValorServicio(e.target.value);
    setIsValidValorServicio(e.target.value !== '' ? true : false); // Actualizar isValidValorServicio basado en el valor del servicio
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      // Verificar si no se ingresó un servicio
      if (!servicio) {
        setIsValidServicio(false);
        throw new Error('Por favor elige un servicio.');
      }

      // Verificar si no se ingresó un monto
      if (!valorServicio) {
        setIsValidValorServicio(false);
        throw new Error('Por favor ingresa un monto.');
      }

      const nuevoValor = parseFloat(valorServicio);

      if (editMode && nuevoValor > 0 && nuevoValor <= valorInput) {
        // Modo de edición
        const editedSubs = subs.map((item, index) => {
          if (index === editedIndex) {
            return { servicio: servicio, valor: valorServicio };
          }
          return item;
        });
        setSubs(editedSubs);
        setEditMode(false); // Desactiva el modo de edición
        setEditedIndex(null); // Reinicia el índice editado
        const valorActual = subs[editedIndex].valor;
        setValorGastado(valorGastado - valorActual + nuevoValor); // Actualiza el valor gastado
      } else {
        // Modo de agregar nuevo elemento
        if (nuevoValor > 0 && nuevoValor <= valorDisp) {
          setValorGastado(valorGastado + nuevoValor);
          setSubs([...subs, { servicio: servicio, valor: valorServicio }]);
        } else {
          throw new Error('El monto ingresado no es válido.');
        }
      }
      setIsValidServicio(true);
      setIsValidValorServicio(true);

      setValorServicio('');
      setServicio('');
    } catch (error) {
      // Manejo del error
      alert(error.message);
    }
  }

  const editarError1 = () => {
    if (isValidServicio === false && !servicio) {
      return { border: '3px solid #ff0000' };
    }
    return {};
  }
  const editarError2 = () => {
    if (isValidValorServicio === false && !valorServicio) {
      return { border: '3px solid #ff0000' };
    }
    return {};
  }

  const subscripciones = () => {
    const handleDelete = (index, sub) => {
      const confirm = window.confirm(`Desea eliminar la suscripción ${serviciosMapeados[sub.servicio]}, con un valor de $${sub.valor}?`);

      if (confirm) {
        setValorGastado(valorGastado - sub.valor);
        const newSubs = subs.filter((_, i) => i !== index);
        setSubs(newSubs);
      }
    }

    const handleEdit = (index, sub) => {
      console.log('Editar suscripción en el índice:', index, sub.servicio);
      setServicio(sub.servicio);
      setValorServicio(sub.valor);
      setEditMode(true); // Activa el modo de edición
      setEditedIndex(index); // Guarda el índice del elemento editado
    }

    return (
      <div className="subscripciones">
        <h2 className="h2Subscripciones">Subscripciones</h2>

        {subs.map((sub, index) => (
          <div key={index} className="sub">
            <section className="subImgCont">
              <img src={`../public/subs/${sub.servicio}.svg`} alt={sub.servicio} className="subImg" />
            </section>

            <section className="subText">
              <span>
                Servicio: {serviciosMapeados[sub.servicio]}: <b>${sub.valor}</b>.
              </span>
            </section>

            <section className="subButtons">
              <button
                onClick={() => handleEdit(index, sub)}>
                <img src={botonEdit} alt="BotonEdit" className="botonEdit" />
              </button>

              <button
                onClick={() => handleDelete(index, sub)}>
                <img src={botonDelete} alt="botonDelete" className="botonDelete" />
              </button>
            </section>
          </div>
        ))}
      </div>
    );
  }

  return (
    <article className="contenedorInterface">
      <div className="balanceAndSubs">
        <section className="tablaDeBalance">
          <h3 className="h3-balance">Balance</h3>
          <article className="balance-Datos">
            <h3 className="h3-Balance">Presupuesto: ${valorInput}</h3>
            <h3 className="h3-Balance">Disponible: ${valorDisp}</h3>
            <h3 className="h3-Balance">Gastado: ${valorGastado}</h3>
          </article>
        </section>

        {subscripciones()}
      </div>

      <div className="interfaceActions">
        <article className="interfaceActionsInterno">
          <h3 className="h3-interfaceActions">Agregar servicio</h3>
          <form
            className="formInterfaceActions"
            onSubmit={handleSubmit}>
            <select
              value={servicio}
              onChange={handleChangeSelect}
              className="select-formInterfaceActions"
              style={editarError1()}
            >
              <option value="">Servicio</option>
              <option value="netflix">Netflix</option>
              <option value="disneyPlus">Disney Plus</option>
              <option value="hboMax">HBO Max</option>
              <option value="starPlus">Star+</option>
              <option value="primeVideo">Prime Video</option>
              <option value="spotify">Spotify</option>
              <option value="appleTv">AppleTv</option>
              <option value="youtubePremium">Youtube Premium</option>
            </select>
            <input
              style={editarError2()}
              className="input-formInterfaceActions"
              value={valorServicio}
              onChange={handleChangeInput}
              type="number"
              name=""
              id=""
              placeholder="$2.500"
            />
            <input type="submit" value='Agregar' className="botonInterface" />
          </form>
        </article>

        <PDFDownloadLink
          document={
            <PDFComponent
              subs={subs}
              serviciosMapeados={serviciosMapeados}
              valorInput={valorInput}
              valorDisp={valorDisp}
              valorGastado={valorGastado}
            />}
          fileName="holaMundo.pdf"
        >
          {({ loading }) =>
            loading ? (<button
                        className="botonInterface"
                        >Loading...</button>)
                    : (<button
                         className="botonInterface"
                        >Descargar PDF</button>)
          }
        </PDFDownloadLink>
      </div>
    </article>
  );
}
Interface.propTypes = {
  valorInput: PropTypes.any.isRequired 
}