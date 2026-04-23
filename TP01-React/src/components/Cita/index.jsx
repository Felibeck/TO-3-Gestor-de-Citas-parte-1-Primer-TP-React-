import './Cita.css';

const Cita = ({ cita }) => {
  return (
    <div className="cita-card">
      <p><b>Mascota:</b> {cita.nMascota}</p>
      <p><b>Dueño:</b> {cita.dueno}</p>
      <p><b>Fecha:</b> {cita.fecha}</p>
      <p><b>Hora:</b> {cita.hora}</p>
      <p><b>Sintomas:</b> {cita.sintomas}</p>

      <button type="button">Eliminar ×</button>
    </div>
  );
};

export default Cita;