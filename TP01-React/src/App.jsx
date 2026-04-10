import './App.css'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
  return (
    <div className="app-wrapper">
      <h1>Administrador de Pacientes</h1>

      <div className="app-container">
        <div className="col-left">
          <Formulario sub="Crear mi cita" />
        </div>
        <div className="col-right">
          <Listado sub="Administra tus citas" />
        </div>
      </div>
    </div>
  )
}

export default App