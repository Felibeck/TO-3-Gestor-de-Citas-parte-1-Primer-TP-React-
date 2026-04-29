import './Cita.css';

const Cita = ({ cita, onEliminar }) => {
  const handleDelete = () => {
    const ok = window.confirm('¿Eliminar esta cita?');
    if (ok && onEliminar) onEliminar(cita.id);
  };

  return (
    <div className="cita-card">
      <p><b>Mascota:</b> {cita.mascota}</p>
      <p><b>Dueño:</b> {cita.propietario}</p>
      <p><b>Fecha:</b> {cita.fecha}</p>
      <p><b>Hora:</b> {cita.hora}</p>
      <p><b>Sintomas:</b> {cita.sintomas}</p>

      <button type="button" onClick={handleDelete}>Eliminar ×</button>
    </div>
  );
};

export default Cita;