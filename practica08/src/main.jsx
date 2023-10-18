import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MiFieldSet from './MiFieldSet.jsx'
import './MiFieldSet.css'
import Formulario from './Formulario.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    {/* <form action=''>
    <MiFieldSet  titulo="Datos Personales" txt1="Nombre" txt2="Password"/>
    <MiFieldSet  titulo="Datos Escolares" txt1="Carrera" txt2="Semestre"/>
    <input type="submit" value="Enviar datos" />
    </form> */}
    <Formulario></Formulario>
  </React.StrictMode>,
)
