import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import state from './redax/state.js'


ReactDOM.render(

  <App state={state}/>
  ,
  document.getElementById('root')
);


