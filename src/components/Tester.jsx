import React from 'react'
import './styles/tester.css'
import Tareas from './Tareas'

const Tester = ({cliente, urlVideo, transcripcion, escenario, preguntas, index}) => {
  return (
    <article className='info-container'>
      <h2 className='info_title'>{cliente}</h2>
      <p className='info_title'>Test: Test de usabilidad en sitio web</p>
      <h3 className='info_subtitle'>Testeador {index+1}</h3>
      <video className='info_video' src={urlVideo} controls></video>
      <h4 className='info_subtitle'>Transcripción</h4>
      <div 
      className='info_transcription'
      dangerouslySetInnerHTML={{__html:transcripcion}}
      />
      <section>
        <h4 className='info_subtitle'>Tareas</h4>
        <p className='escenario_container'>{escenario}</p>
        <ul className='info_list'> 
          {
          preguntas.map((pregunta, index) => (
            <Tareas 
            pregunta={pregunta}
            index={index}/>
          ))
          }
          
        </ul>
      </section>
        {/* <div className='info'>
        {
          db.map(info => (
            <div 
            key={info.idVideo}
            className='info-container'
            >
              <h2 className='info_title'>{info.cliente}</h2>
              <video 
              className='info_video'
              src={info.linkVideo}
              controls></video>
              <p 
              className='info_transcription'>{info.transcripcion}</p>
              <div className='escenario_container'>
              <h3 className='escenario_title'>{info.escenario}</h3>
                {
                  info.preguntas?.map(tarea => (
                    <ul className='escenario_list'>
                      <li className='list_text'>{tarea.texto}</li>
                      <li className='list_time'>{tarea.tiempo}</li>
                    </ul>

                  ))
                }
              </div>
              </div>
              
          ))
        }
      </div> */}
    </article>
  )
}

export default Tester