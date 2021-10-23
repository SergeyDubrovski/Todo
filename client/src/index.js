import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import state, { dayStart, planText, textAdd, subscribe } from './redax/state.js'

let rerender = () => {
  ReactDOM.render(

  <App state={state} dayStart={dayStart} planText={planText} textAdd={textAdd} />
  ,
  document.getElementById('root')
);
}

rerender();

subscribe(rerender);




