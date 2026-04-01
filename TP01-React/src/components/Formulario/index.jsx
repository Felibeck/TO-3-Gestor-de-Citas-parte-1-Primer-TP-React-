import './Formulario.css';
import Subtitulo from '../Subtitulo';

const Formulario = ({ sub }) => {
  return (
    <div className="formulario-wrapper">
      <Subtitulo sub={sub} />

      <form>
        <label>Nombre Mascota</label>
        <input type="text" placeholder="Nombre Mascota" />

        <label>Nombre Dueño</label>
        <input type="text" placeholder="Nombre dueño de la mascota" />

        <label>Fecha</label>
        <input type="date" />

        <label>hora</label>
        <input type="time" />

        <label>Sintomas</label>
        <input type="textArea" placeholder="" />

        <input type="submit" value="Agregar Cita" />
      </form>
    </div>
  );
};

export default Formulario;