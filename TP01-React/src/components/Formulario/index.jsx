import './Formulario.css';
import Subtitulo from '../Subtitulo';
import { useState } from 'react';
import Cita from '../Cita';

const Formulario = ({ sub , setCitas, citas}) => {  

  const agregarCita = e => {

    e.preventDefault();

    const formulario = e.target;

    const mascota = formulario.mascota.value;
    const propietario = formulario.propietario.value;
    const fecha = formulario.fecha.value;
    const hora = formulario.hora.value;
    const sintomas = formulario.sintomas.value;

    const cita = {
      id: Date.now(),
      mascota,
      propietario,
      fecha,
      hora,
      sintomas,
    };

    setCitas([...citas, cita]);

    formulario.reset();
  };
  return (
    <div className="formulario-wrapper">
      <Subtitulo sub={sub} />

      <form onSubmit={agregarCita}>
        <label>Nombre Mascota</label>
        <input name="mascota" type="text" placeholder="Nombre Mascota" />

        <label>Nombre Dueño</label>
        <input name="propietario" type="text" placeholder="Nombre dueño de la mascota" />

        <label>Fecha</label>
        <input name="fecha" type="date" />

        <label>hora</label>
        <input name="hora" type="time" />

        <label>Sintomas</label>
        <textarea name="sintomas" placeholder="Describe los síntomas" />

        <input type="submit" value="Agregar Cita" />
      </form>
    </div>
  );
};

export default Formulario;