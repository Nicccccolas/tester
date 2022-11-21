import React from 'react'
import './styles/task.css'

const Tareas = ({pregunta, index}) => {
  return (
    <div className='task-container'>
      <h3 className='task_title'>Tarea: {index+1}</h3>
      <p className='task_item'>{pregunta.texto}</p>
      <p className='task_time'>Duracion de la tarea: {pregunta.tiempo}</p>
    </div>
  )
}

export default Tareas