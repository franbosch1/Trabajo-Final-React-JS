import {useState, useEffect} from 'react'
import Error from './Error'

const Formulario = ({tareas, setTareas, tarea, setTarea}) => {
    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const [error, setError] = useState(false)

    useEffect( () => {
      if(Object.keys(tarea).length>0) {
       setNombre(tarea.nombre)
       setPropietario(tarea.propietario)
       setEmail(tarea.email)
       setFecha(tarea.fecha)
       setDescripcion(tarea.descripcion)
      }
      
    }, [tarea])

    

    //Generador de keys
    const generarId = () => {
      const random = Math.random().toString(36).substr(2)
      const fecha = Date.now().toString(36)

      return random + fecha;
    }
    

    const handleSubmit = (e) => {
      e.preventDefault()

      //Validacion del Formulario
      if([ nombre,propietario,email,fecha,descripcion ].includes('')) {
        console.log('Hay al menos un campo vacio')

        setError(true)
        return;
      } 

      setError(false)

      //Objeto de Tareas
      const objetoTarea = {
        nombre,
        propietario,
        email,
        fecha,
        descripcion,
        
      }
      if (tarea.id) {
        //Editando el Registro
        objetoTarea.id = tarea.id
        const tareasActualizadas = tareas.map (tareaState => tareaState.id === 
        tarea.id ? objetoTarea : tareaState )
        
        setTareas(tareasActualizadas)
        setTarea({})
        
      } else{
        //Nuevo Registro
        objetoTarea.id = generarId()
        setTareas([...tareas, objetoTarea])
      }

      //Reiniciar el formulario
      setNombre('')
      setPropietario('')
      setEmail('')
      setFecha('')
      setDescripcion('')

    }
  return (
    <div className='md:w-1/2 lg:w2/5 mx-5'>
        <h2 className='font-black text-3xl text-center'>Cargue los datos de la tarea para ingresar</h2>

        <p className='text-lg mt-5 text-center mb-10'>
           Añade tareas y {''}
           <span className='text-indigo-600 font-bold'>Administralas</span>
        </p>
        <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
        >
          { error && <Error> <p>Todos los campos son obligatorios</p> </Error>
          
          
          }
          <div className='mb-5'> 
            <label htmlFor ="mascota"className='block text-gray-700 uppercase font-bold'>
              Titulo de la Tarea
              </label>
            <input
            id="titulo tarea"
            type="text"
            placeholder='Ingrese nombre de la tarea'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={nombre}
            onChange={ (e) => setNombre(e.target.value) }
            />
        </div>
          <div className='mb-5'> 
            <label htmlFor ="propietario"className='block text-gray-700 uppercase font-bold'>
              Encargado de la Tarea</label>

            <input
            id="propietario"
            type="text"
            placeholder='Ingrese nombre'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={propietario}
            onChange={ (e) => setPropietario(e.target.value) }
            />
        </div>
        <div className='mb-5'> 
            <label htmlFor ="contacto"className='block text-gray-700 uppercase font-bold'>
              Email de Contacto</label>

            <input
            id="contacto"
            type="email"
            placeholder='Ingrese email'
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
            />
        </div>
        <div className='mb-5'> 
            <label htmlFor ="alta"className='block text-gray-700 uppercase font-bold'>
            Fecha de carga
            </label>

            <input
            id="encargada"
            type="date"
            className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
            value={fecha}
            onChange={ (e) => setFecha(e.target.value) }
            />
        </div>

        <div className='mb-5'> 
            <label htmlFor ="sintomas"className='block text-gray-700 uppercase font-bold'>
            </label>

              <textarea 
              id='descripcion'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Describe la tarea'
              value={descripcion}
              onChange={ (e) => setDescripcion(e.target.value) }
              />
        </div>
        <input 
            type="submit"
            className="bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md hover:bg-indigo-700 cursor-pointer transition-all"
            value={tarea.id ? 'Editar Tarea' : 'Agregar Tarea'}
        />
        </form>
    </div>
  )
}

export default Formulario