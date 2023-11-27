import { useState } from "react"

const Tarea = ({tarea, setTarea, eliminarTarea}) => {

    const {nombre, propietario, email, fecha, descripcion, id} = tarea 
    const handleEliminar = () => {
      console.log('Eliminando...')
      const respuesta = confirm('Deseas eliminar esta tarea?')
  
      if (respuesta) {
        eliminarTarea(id)
      }
    }
    const [completada, setCompletada] = useState(false)
    const [desactivarButton, setDesactivarButton] = useState(false)

    const handleComplete = () => {
        setCompletada(true)
        setDesactivarButton(true)
    }
    const handleEdit = () => {
      setCompletada(false)
      setDesactivarButton(false)
      setTarea(tarea)
    }
    return (
      <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
          {completada ?
           <div className="flex items-center justify-center">
            <p className="font-black text-xl text-green-600 uppercase">
            Tarea completada
            </p>
          </div> 
          : null
          }
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
              <span className='font-normal normal-case'>{nombre}</span>
            </p>
  
            <p className='font-bold mb-3 text-gray-700 uppercase'>Encargado de la tarea: {''}
              <span className='font-normal normal-case'>{propietario}</span>
            </p>
  
            <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
              <span className='font-normal normal-case'>{email}</span>
            </p>
  
            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de creacion: {''}
              <span className='font-normal normal-case'>{fecha}</span>
            </p>
  
            <p className='font-bold mb-3 text-gray-700 uppercase'>Informacion sobre la tarea: {''}
              <span className='font-normal normal-case'>{descripcion}
              </span>
            </p>
            <div className="flex justify-between mt-10">
              <button
                type="button"
                className={`py-2 px-10 ${desactivarButton ? 'bg-green-700' : 'bg-green-500'} hover:bg-green-700  text-white font-bold uppercase rounded-lg`}
                onClick={() => handleComplete()}
                disabled={desactivarButton}
              >
                Completar Tarea
              </button>
              <button
                type="button"
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold 
                uppercase rounded-lg"
                onClick = { () => handleEdit()}
              >Editar</button>
              <button
                type="button"
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold 
                uppercase rounded-lg"
                onClick={handleEliminar}
              >Eliminar</button>
            </div>
  
          </div>
    )
  }
  
  export default Tarea