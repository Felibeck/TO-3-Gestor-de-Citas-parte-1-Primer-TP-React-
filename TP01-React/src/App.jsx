import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  return (
    <>
      <h1>Administrador de Pacientes</h1>

      <div className="app-container">
        <Formulario sub="Crear mi cita" />
        <Listado sub="Administra tus citas" />
      </div>
    </>
  )
}

export default App

