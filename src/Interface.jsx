import { useState } from "react";

export const Interface = ({ valorInput, setValorInput }) => {
  const [valorServicio, setValorServicio] = useState('');
  const [valorGastado, setValorGastado] = useState(0);
  const [servicio, setServicio] = useState('');
  const [subs, setSubs] = useState([]);

  const valorDisp = valorInput - valorGastado;

  const handleChangeSelect = (e) => {
    setServicio(e.target.value);
  }

  const handleChangeInput = (e) => {
    setValorServicio(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valorServicio > 0 && valorServicio <= valorDisp) {
      setValorGastado(valorGastado + parseFloat(valorServicio));
      setSubs([...subs, { servicio: servicio, valor: valorServicio }]);
      setValorServicio('');
    } else (
      alert('Error!')
    )
  }

  const subscripciones = () => {
    



    return (
      <div className="subscripciones">
        <h2 className="h2Subscripciones">Subscripciones</h2>
        {subs.map((sub, index) => (
          <div key={index} className="sub">
            <img src={`../public/subs/${sub.servicio}.svg`} alt={sub.servicio} className="subImg"/>
            <p>Servicio: {sub.servicio}, Valor: ${sub.valor}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <article className="articleInterface">
      <div className="interface">
        <section className="tablaDeBalance">
          <h3 className="h3-balance">Balance</h3>
          <article className="balance-Datos">
            <h3 className="h3-Balance">Presupuesto: ${valorInput}</h3>
            <h3 className="h3-Balance">Disponible: ${valorDisp}</h3>
            <h3 className="h3-Balance">Gastado: ${valorGastado}</h3>
          </article>
        </section>
        <section className="interfaceActions">
          <h3>Agregar servicio</h3>
          <form
            className="formInterfaceActions"
            onSubmit={handleSubmit}>
            <select value={servicio} onChange={handleChangeSelect}>
              <option value="">------- Elegir -------</option>
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
              value={valorServicio}
              onChange={handleChangeInput}
              type="number"
              name=""
              id=""
              placeholder="$2.500"
            />
            <input type="submit" value='Agregar' />
          </form>
        </section>
      </div>

      {subscripciones()}
    </article>
  );
}
