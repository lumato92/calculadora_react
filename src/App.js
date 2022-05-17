
import { useState } from 'react';
import './App.css';
import Boton from './components/Boton';
import BotonClear from './components/BotonClear';
import Pantalla from './components/Pantalla';

function App() {

  const [input, setInput] = useState('')

// Funcion que concatena los valores que se muestran en la pantalla

  const agregarInput = val =>{
    setInput(input + val);
  };



  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora React</h1>
      </header>

      <div className='main-container'>

          <Pantalla input={input}/>
        <div className='fila'>

 { /* manejarClic es un prop que utilizo para mandar una funcion como parametro  */}
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>x</Boton>
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton  manejarClic={agregarInput}>-</Boton>
          
          </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
          </div>
        <div className='fila'>
          <Boton  manejarClic={agregarInput}>=</Boton>
          <Boton  manejarClic={agregarInput}>0</Boton>
          <Boton  manejarClic={agregarInput}>.</Boton>
          <Boton  manejarClic={agregarInput}>/</Boton>
          </div>
        <div className='fila'></div>
          <BotonClear manejarClic={()=>setInput('')}>Clear</BotonClear>

      </div>

    </div>

    
  );
}

export default App;
