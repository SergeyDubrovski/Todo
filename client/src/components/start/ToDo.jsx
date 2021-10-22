import React from 'react';
import Week from './week/Week';
 
const ToDo = (props) => {
  return (
    <Week state={props.state} dayStart={props.dayStart} />
  );
}
export default ToDo;
