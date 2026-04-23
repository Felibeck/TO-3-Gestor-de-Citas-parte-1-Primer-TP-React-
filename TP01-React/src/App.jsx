import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {

  const [citas, setCitas] = useState([{ nMascota: "Nina", dueno: "Martin", fecha: '2021-08-05', hora: '08:20', sintomas: "Le duele la pierna" },
    { nMascota: "Sifon", dueno: "Flecha", fecha: '2023-08-05', hora: '09:24', sintomas: "Duerme mucho" },
    { nMascota: "Floki", dueno: "Ari", fecha: '2023-08-05', hora: '16:15', sintomas: "No está comiendo" }])

  



    
  
  return (
    <div className="app-wrapper">
      <h1>Administrador de Pacientes</h1>

      <div className="app-container">
        <div className="col-left">
      <Formulario setCitas={setCitas} citas={citas} sub="Crear mi cita"></Formulario>
        </div>
        <div className="col-right">
      <Listado citas={citas} setCitas={setCitas} sub="Administra tus citas"></Listado>
        </div>
      </div>
    </div>
  )
}

export default App