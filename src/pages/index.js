import { useState, useEffect } from "react"
import Formulario from "../components/Formulario"
import Header from "../components/Header"
import ListaTareas from "../components/ListaTareas"

export default function Home() {
  const [tareas, setTareas] = useState([]);
  const [tarea, setTarea] = useState({});

    // Guardado en localStorage
    useEffect(() => {

      if (typeof window !== 'undefined') {
        const storedTareas = localStorage.getItem('tareas');
        setTareas(storedTareas ? JSON.parse(storedTareas) : []);
      }
    }, []); 
    
    useEffect(() => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('tareas', JSON.stringify(tareas));
      }
    }, [tareas]);

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea => tarea.id !==id)
    setTareas(tareasActualizadas)
  }
  return (
    <div className="container mx-auto mt-20">
    <Header
     
    />
    <div className="mt-12 md:flex">
      <Formulario 
        tareas = {tareas}
        setTareas = {setTareas}
        tarea = {tarea}
        setTarea= {setTarea}
      />
      <ListaTareas
        tareas={tareas}
        setTarea={setTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>

    </div>
  )
}
