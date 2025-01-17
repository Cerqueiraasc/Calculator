import React from 'react';
import './App.css';
import Calculator from './Calculator'; // Importa o componente Calculator

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora React</h1> {/* Cabeçalho da aplicação */}
        <Calculator />             {/* Renderização do componente Calculator */}
      </header>
    </div>
  );
}

export default App;