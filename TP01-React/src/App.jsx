import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <h1>Adinistrador de Pacientes</h1>

    <Formulario sub = "Crear mi cita"/>

    <Listado sub = "Administra tus citas" />


    </>
  )
}

export default App
