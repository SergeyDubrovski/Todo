import React from "react";
const TodoList = (props) => {
  let list;
  if (props.state.day[1]) {
    list = props.state.week[props.state.day[1]][0].map((value, index) => {
      return (
        <li id={index}>
          {value}
          <button>X</button>
          <button>V</button> 
        </li>
      );
    });
  } else list = "";
  return <div>{list}</div>;
};
export default TodoList;
