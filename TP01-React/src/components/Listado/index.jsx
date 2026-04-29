import './Listado.css';
import Cita from '../Cita';
import Subtitulo from '../Subtitulo';

const Listado = ({ sub, setCitas, citas }) => {
  const listaCitas = citas || [];

  const eliminarCita = id => {
    setCitas(e => e.filter(c => c.id !== id));
  };

  return (
    <>
      <Subtitulo sub={sub} />
      <div className="listado-wrapper">
        {
          listaCitas.map((c, i) => (
            <Cita key={c.id ?? i} cita={c} onEliminar={eliminarCita} />
          ))
        }
      </div>
    </>
  );
};

export default Listado;