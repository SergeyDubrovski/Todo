import React, { useRef } from "react";

const TodoList = (props) => {
  const a = useRef();
  const delTask = (e) => {
    props.delTask(e.target.id, props.weekTask.day[0], props.weekTask.day[1]);
  };
  let list;

  if (props.weekTask.day[0]) {
    list = props.weekTask.task[props.weekTask.day[0]][props.weekTask.weekN].map(
      (value, index) => {
        return (
          <li id={index} key={value.id}>
            {value}
            <button onClick={delTask} id={index} >
              X
            </button>
            <button
              ref={a}
              onClick={() => {
                a.current.style = "background: red";
              }}
              id={index}
              key={value.id}
            >
              V
            </button>
          </li>
        );
      }
    );
  } else list = "";
  return <div>{list}</div>;
};
export default TodoList;
