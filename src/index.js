import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from './components/Board'

const board = [
  ["wk", "br"],
  ["bq", "wb"]
]

ReactDOM.render(
  <React.StrictMode>
    <Board 
      board={board}
    />
  </React.StrictMode>,
  document.getElementById('root')
);