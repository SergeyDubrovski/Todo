import React, { useRef } from "react";

const TodoList = (props) => {
  const a = useRef();
  const delTask = (e) => {
    props.delTask(Number(e.target.id));
  };
  
  const list = () => { 
   return props.weekTask.task[props.weekTask.day][props.weekTask.weekStart+2].map(
      (value, index) => { 
        
        return (
          <li id={index}>
            {value}
            <button onClick={delTask} id={index} key={value.id} >
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
  };

  return <div>{list()}</div>;
};

export default TodoList;
