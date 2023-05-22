import { useState, useEffect } from "react"
import { Error } from "./Error"


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {


  const[nombre, setNombre] = useState('')
  const[propietario, setPropietario] = useState('')
  const[email, setEmail] = useState('')
  const[fecha, setFecha] = useState('')
  const[sintomas, setSintomas] = useState('')

  const[error, setError] = useState(false)

  

  useEffect(() => {
  if(Object.keys(paciente).length > 0){
  setNombre(paciente.nombre)
  setPropietario(paciente.propietario)
  setEmail(paciente.email)
  setFecha(paciente.fecha)
  setSintomas(paciente.sintomas)
  }
  },[paciente]) 



  //generar id como unico
  const generarId = () => {
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return random + fecha
  }

  const handle = (e) => {
    e.preventDefault()
    //validacion formulario
    if([nombre, propietario, email, fecha, sintomas].includes('')){
      setError(true)  
      return
    }
      setError(false)

      //objeto de pacientes
      const objetoPaciente = {
        nombre,
         propietario,
          email,
           fecha,
            sintomas,
            
            
            
      }
        if(paciente.id){
          //editando registro
          objetoPaciente.id = paciente.id
          const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id == paciente.id ? objetoPaciente : pacienteState)
          
          setPacientes(pacientesActualizados)
          setPaciente({})

        }else{
          //nuevo registro
          objetoPaciente.id = generarId()
          setPacientes([...pacientes, objetoPaciente]) 
        }


       //reiniciar o limpiar formulario
       setNombre('')
       setPropietario('')
       setEmail('')
       setFecha('')
       setSintomas('') 
    
  }




  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-bold text-center text-4xl">Seguimiento Paciente</h2>

      <p className="mt-4 text-lg text-center">Anade Pacientes y {''}<span className="text-indigo-600 font-bold">Administralos</span></p>

      <form 
        onSubmit={handle}
        className="bg-white rounded-md shadow-md mt-3 p-5 mb-20 mx-5">

        {error && <Error mensaje='los campos son obligatorios'/> }

        <div className="">
          <label htmlFor="" className="block uppercase font-bold mb-2">Nombre mascota</label>
          <input 
          type="text"
          placeholder="Nombre de tu mascota"
          className="w-full border-solid border-2 border-gray-200 p-2 rounded mb-3 focus:focus:outline-none focus:border-cyan-600" 
          value={nombre}
          onChange={(e) => {setNombre(e.target.value)}}
          />
        </div>
        <div className="">
          <label htmlFor="propietario" className="block uppercase font-bold mb-2">Nombre Propietario</label>
          <input 
          type="text"
          placeholder="Nombre de tu propietario"
          className="w-full border-solid border-2 border-gray-200 p-2 rounded mb-3 focus:focus:outline-none focus:border-cyan-600" 
          value={propietario}
          onChange={(e) => {setPropietario(e.target.value)}}
          />
        </div>
        <div className="">
          <label htmlFor="" className="block uppercase font-bold mb-2">email</label>
          <input 
          type="email"
          placeholder="Email contacto propietario"
          className="w-full border-solid border-2 border-gray-200 p-2 rounded mb-3 focus:outline-none focus:border-cyan-600 " 
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
          />
        </div>
        <div className="">
          <label htmlFor="" className="block uppercase font-bold mb-2">alta</label>
          <input 
          type="date"
          placeholder="Nombre de tu mascota"
          className="w-full border-solid border-2 border-gray-200 p-2 rounded mb-3 focus:focus:outline-none focus:border-cyan-600" 
          value={fecha}
          onChange={(e) => {setFecha(e.target.value)}}
          />
        </div>
        <div className="">
          <label htmlFor="" className="block uppercase font-bold mb-2">Sintomas</label>
          <textarea className="w-full border-solid border-2 border-gray-200 p-2 rounded mb-3 focus:focus:outline-none focus:border-cyan-600 "
          value={sintomas}
          onChange={(e) => {setSintomas(e.target.value)}}
          >
          </textarea>
        </div>
     
        <div>
          <input type="submit"
          value={paciente.id ? 'Editar paciente' : "Agregar paciente" }
          className="bg-indigo-700 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 transition-all cursor-pointer mb-3" 
          />
        </div>
      </form>
    </div>
  )
  }


export default Formulario

