import React from 'react';
import Week from './week/Week';
 
const ToDo = (props) => {
  return (
    <Week state={props.state} dispatch={props.dispatch} />
  );
}
export default ToDo;
