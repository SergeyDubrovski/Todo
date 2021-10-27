import React, { useRef } from "react";

const TodoList = (props) => {
  const a = useRef();
  const delTask = (e) => {
    props.delTask(e); 
  }
  let list;
  if (props.state.dayWeek[2][1]) {
    list = props.state.weekTask[props.state.dayWeek[2][1]][0].map((value, index) => {
      return (
        <li id={index}>
          {value}
          <button onClick={delTask} id={index+100} >X</button>
          <button ref={a} onClick={()=>{a.current.style = 'background: red'}} id={index+200} >V</button> 
        </li>
      );
    });
  } else list = "";
  return <div>{list}</div>;
};
export default TodoList;
