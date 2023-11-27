import Tarea from "./Tarea"

const ListaTareas = ({tareas, setTarea, eliminarTarea}) => {


  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>

      {tareas && tareas.length ? (
        <>
            <h2 className='font-black text-3xl text-center'>Listado de tareas</h2>

            <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600 font-bold'>Tareas</span>
            </p>

            {tareas.map( tarea => (
                <Tarea
                  key= {tarea.id}
                  tarea = {tarea}
                  setTarea= {setTarea}
                  eliminarTarea= {eliminarTarea}
                />
              ))}
          </>

      ) : (
        <>
              <h2 className='font-black text-3xl text-center'>No hay tareas</h2>

      <p className='text-xl mt-5 mb-10 text-center'>
          Comienza agregando tareas {''}
          <span className='text-indigo-600 font-bold'>y apareceran en este lugar</span>
      </p>
        </>
      )}
    </div>
  )
}

export default ListaTareas