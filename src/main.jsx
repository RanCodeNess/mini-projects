import React from 'react';
import { createRoot } from 'react-dom/client'
// import ColorPicker from "./ColorPicker.jsx";
// import Board from './ticTacToe-game/tic-tac-toe.jsx'; //later update
import ToDo from "./to-do-app/toDo.jsx"
import App from './App.jsx'

function Main() {

  return (
  <>
    {/* <ColorPicker /> */}
    {/* <App /> */}
    {/* <Board /> */}
    <ToDo />
  </>
  )
}


createRoot(document.getElementById('root')).render(
    <Main />
)