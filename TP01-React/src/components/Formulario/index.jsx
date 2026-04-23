import './Formulario.css';
import Subtitulo from '../Subtitulo';
import { useState } from 'react';
import Cita from '../Cita';

const Formulario = ({ sub , setCitas, citas}) => {  

  const agregarCita = e =>
  {
    e.preventDefault();

    const formulario = e.target 



      setCitas(

      ...citas, 
      // falta crear el objeto cita a partir de los datos del formulario
      
    )

}



  return (
    <div className="formulario-wrapper">
      <Subtitulo sub={sub} />

      <form onSubmit={agregarCita}>
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