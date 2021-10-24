import React from "react";
import {actionDelTask} from "../../../../../redax/state" 
const TodoList = (props) => {
  const delTask = (e) => {
    props.dispatch(actionDelTask(e))
  }
  let list;
  if (props.state.day[1]) {
    list = props.state.weekTask[props.state.day[1]][0].map((value, index) => {
      return (
        <li id={index}>
          {value}
          <button onClick={delTask} id={index+100} >X</button>
          <button id={index+200} >V</button> 
        </li>
      );
    });
  } else list = "";
  return <div>{list}</div>;
};
export default TodoList;
