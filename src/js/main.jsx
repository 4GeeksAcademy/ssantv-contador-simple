import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import { render } from 'react-dom';

let timer = 0;
let count = "up";

// Cuenta atrás
function countdown(secs) {
  count = "down";
  timer = secs;
  window.clearInterval(intervalID)
  intervalID = create();
}

// Reiniciar 
function resetTimer() {
  count = "up";
  timer = 0;
  window.clearInterval(intervalID)
  intervalID = create();
}

function stop () {
  window.clearInterval(intervalID)
}

// Función que renderiza el componente cada vez que el temporizador cambia
const root = ReactDOM.createRoot(document.getElementById('root'));

// Primero renderizo, luego reviso si es cuenta arriba o abajo para sumar o restar
function create() {
  return setInterval(() => {
    root.render(
      <React.StrictMode>
        <Home timer={timer} resetTimer={resetTimer} countdown={countdown} stop={stop}/>
      </React.StrictMode>
    );
    if (count === "up") {
      timer++;
    } else if (count === "down") {
      if (timer == 0) {
        window.clearInterval(intervalID)
        alert('La cuenta atrás ha finalizado')
      }
      timer--;
    }
  }, 1000);
}

let intervalID = create();
