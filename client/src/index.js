import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import state, { dayStart, subscribe } from './redax/state.js'

let rerender = () => {
  ReactDOM.render(

  <App state={state} dayStart={dayStart} />
  ,
  document.getElementById('root')
);
}

rerender();

subscribe(rerender);




