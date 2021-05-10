import React from 'react';
import Header from './components/Header';
import Characters from './components/Characters';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Characters/>
      <h1>Hola Mundo</h1>
      <h3>Este curso lo sigo para aprender pero ademas busco llenar mi repositorio en el tiempo ...</h3>
    </div>
  );
}

export default App;
