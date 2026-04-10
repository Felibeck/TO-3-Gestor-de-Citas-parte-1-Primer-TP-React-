import './Listado.css';
import Cita from '../Cita';
import Subtitulo from '../Subtitulo';

const Listado = ({ sub }) => {
  const citas = [
    { nMascota: "Nina", dueno: "Martin", fecha: '2021-08-05', hora: '08:20', sintomas: "Le duele la pierna" },
    { nMascota: "Sifon", dueno: "Flecha", fecha: '2023-08-05', hora: '09:24', sintomas: "Duerme mucho" },
    { nMascota: "Floki", dueno: "Ari", fecha: '2023-08-05', hora: '16:15', sintomas: "No está comiendo" }
  ];

  return (
    <>
      <Subtitulo sub={sub} />
      <div className="listado-wrapper">
        {citas.map((c, i) => <Cita key={i} objCita={c} />)}
      </div>
    </>
  );
};

export default Listado;