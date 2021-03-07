import React from 'react';
import ReactDOM from 'react-dom';
import PuzzleInput from './components/PuzzleInput';
import UserForm from './components/UserForm';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <PuzzleInput />
    <UserForm />
  </React.StrictMode>,
  document.getElementById('root')
);
