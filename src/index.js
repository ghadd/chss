import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleInput from './components/PuzzleInput';
import './index.css';


// ReactDOM.render(
//   <React.StrictMode>
//     <PuzzleInput />
//   </React.StrictMode>,document.getElementById('prompt')
// )

ReactDOM.render(
  <React.StrictMode>
    {/* <Board 
      board={board}
    /> */}
    <PuzzleInput />
  </React.StrictMode>,
  document.getElementById('root')
);
