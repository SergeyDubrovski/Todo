import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Day.module.css";
import TodoList from "./todoList/TodoList";

const Day = (props) => {
  const planText = (e) => {
    props.planText(e.target.value);
  };
  const taskAdd = () => {
    props.taskAdd(props.weekTask.weekN, props.weekTask.day[0], props.weekTask.day[1]);
  };

  return (
    <div>
      <div className={styles.box}>
        <h1>План {props.weekTask.day[1]}</h1>
        <form className={styles.form} type="submit">
          <input
            onChange={planText}
            className={styles.text}
            value={props.weekTask.text}
          />
        </form>
        <div className={styles.listbox}>
          <TodoList weekTask={props.weekTask} delTask={props.delTask} />
        </div>
        <button className={styles.button} onClick={taskAdd}>
          Добавить
        </button>
        <NavLink to="/">Выход</NavLink>
      </div>
    </div>
  );
};
export default Day;
