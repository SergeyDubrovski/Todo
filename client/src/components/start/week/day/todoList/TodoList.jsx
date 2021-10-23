import React from "react";
const TodoList = (props) => {
  let list;
  if (props.state.day[1]) {
    list = props.state.week1[props.state.day[1]].map((value, index) => {
      return (
        <li id={index}>
          {value}
          <button>X</button>
        </li>
      );
    });
  } else list = "";
  return <div>{list}</div>;
};
export default TodoList;
