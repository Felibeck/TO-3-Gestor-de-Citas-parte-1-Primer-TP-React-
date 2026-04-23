import './Listado.css';
import Cita from '../Cita';
import Subtitulo from '../Subtitulo';
import { useState } from 'react';

const Listado = ({ sub , setCitas , citas}) => {



  return (
    <>
      <Subtitulo sub={sub} />
      <div className="listado-wrapper">

        {
          listaCitas.map((c, i) =>
          {
            <Cita key={i} citas={c}/> 
          }
          )

        }

      </div>
    </>
  );
};

export default Listado;