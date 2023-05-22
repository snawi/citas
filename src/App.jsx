import { useState, useEffect } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import { ListadoPacientes } from './components/ListadoPacientes'
import { Paciente } from './components//Paciente'


function App() {
//listar los pacientes
const [pacientes, setPacientes] = useState([])
//editar y eliminar
const [paciente, setPaciente] = useState({})
//local storage
useEffect(()=>{
const obtenerLS=()=>  {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
  setPacientes(pacientesLS)
}
obtenerLS()
},[])

useEffect(()=>{
  localStorage.setItem('pacientes', JSON.stringify( pacientes ))
},[pacientes])

//boton eliminar
const eliminarPaciente = (id) => {
  const pacientesActualizados = pacientes.filter(paciente=>paciente.id !== id)
  setPacientes(pacientesActualizados)
}




  return (
    
    <div className='container mx-auto mt-20 '>
      <Header />
      <div className='mt-20 flex '>
      <Formulario
      pacientes={pacientes}
      setPacientes={setPacientes}
      paciente={paciente}
      setPaciente={setPaciente}
      />
      <ListadoPacientes
      pacientes={pacientes}
      setPaciente={setPaciente}
      eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
    
  )
}

export default App
