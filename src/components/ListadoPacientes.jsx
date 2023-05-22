import { Paciente } from "./Paciente"


export const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  

  return (
    <div className="md:w-1/2 lg:w-3/5 h-screen sm:overflow-scroll mt-4">
      {pacientes && pacientes.length ? (
        <>
           <h1 className="font-bold text-center text-4xl">Listado de Pacientes</h1>
           <p className="mt-4 text-lg text-center">
             Administra tus {''}
             <span className="text-indigo-600 font-bold">pacientes y citas</span>
           </p>
   
           {pacientes.map(paciente => (
           <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            />
      ))} 

      </>
      ): (
        <>

          <h1 className="font-bold text-center text-4xl">No hay pacientes</h1>
           <p className="mt-4 text-lg text-center">
             Comienza agregando pacientes {''}
             <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
           </p>

        </>
      )}
     


       
      
        
    </div>
     
    
  )
}
