import './Cita.css';

const Cita = ({ objCita }) => {
  return (
    <div className="cita-card">
      <p><b>Mascota:</b> {objCita.nMascota}</p>
      <p><b>Dueño:</b> {objCita.dueno}</p>
      <p><b>Fecha:</b> {objCita.fecha}</p>
      <p><b>Hora:</b> {objCita.hora}</p>
      <p><b>Sintomas:</b> {objCita.sintomas}</p>

      <button type="button">Eliminar ×</button>
    </div>
  );
};

export default Cita;