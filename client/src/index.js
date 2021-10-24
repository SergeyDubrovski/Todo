import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import store from './redax/state.js'

let rerender = () => {
  ReactDOM.render(

    <App state={store.getState()}
      dispatch={store.dispatch.bind(store)}
    />
    ,
    document.getElementById('root')
  );
}

rerender();

store.subscribe(rerender);




