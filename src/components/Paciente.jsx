import React from 'react'

export const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

 const {nombre,propietario,email,fecha,sintomas,id} = paciente 

 //funcion eliminar
 const handleEliminar = ()=>{
  const respuesta = confirm('Deseas eliminar este paciente')

  if(respuesta){
    eliminarPaciente(id)
  }
 }


  return (
    <div className="bg-white border rounded-md shadow-md mt-3 mx-4 p-5 my-8">
      <p className="uppercase font-bold text-grey-700 p-2">Nombre: {''}
        <span className="font-normal normal-case">{nombre}</span>
      </p>
      <p className="uppercase font-bold text-grey-700 p-2">Propietario: {''}
        <span className="font-normal normal-case">{propietario}</span>
      </p>
      <p className="uppercase font-bold text-grey-700 p-2">Email: {''}
        <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="uppercase font-bold text-grey-700 p-2">fecha alta: {''}
        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="uppercase font-bold text-grey-700 p-2">sintomas: {''}
        <span className="font-normal normal-case">{sintomas}</span>
      </p>
      <div className='flex justify-between mt-4 mb-4'>
        <button onClick={() => setPaciente(paciente)} type='button' className='uppercase bg-indigo-700 py-2 px-3 text-white font-bold rounded-md w-36 hover:bg-indigo-600 transition-all'>
          Editar
          
        </button>
        
        <button onClick={handleEliminar} type='button' className='uppercase bg-red-600 py-2 px-3 text-white font-bold rounded-md w-36 hover:bg-red-500 transition-all'>
          Eliminar
        </button>
      </div>
  </div>
  )
}
