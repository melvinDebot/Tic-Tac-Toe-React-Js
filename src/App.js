import React from 'react';
import Board from './Composant/Board';
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{ /* Status */}</div>
        <div>{ /* TODO */}</div>
      </div>
    </div>
  );
}

export default App;
