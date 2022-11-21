import { Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Tester from './components/Tester';
import TestersContainer from './components/TestersContainer';
import db from './json/db.json'

function App() {

  return (
    <div>
      <Header/>
      <TestersContainer>
        {
          db?.map((tester, index) => (
            <Tester
              key={tester.idVideo}
              cliente={tester.cliente}
              urlVideo={tester.linkVideo}
              transcripcion={tester.transcripcion}
              escenario={tester.escenario}
              preguntas={tester.preguntas}
              index={index}
            />    
          ))
        }
      </TestersContainer>
    </div>

  )
}

export default App
