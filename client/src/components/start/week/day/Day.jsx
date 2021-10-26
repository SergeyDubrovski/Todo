import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Day.module.css";
import TodoList from "./todoList/TodoList";
import {actionPlanText, actionTaskAdd} from "../../../../redax/state"

const Day = (props) => {
  const planText = (e) => {
    props.dispatch(actionPlanText(e));
  };
  const taskAdd = () => {
    props.dispatch(actionTaskAdd(props.state.weekTask.weekN));
  };

  return (
    <div>
      <div className={styles.box}>
        <h1>План {props.state.dayWeek[2][0]}</h1>
        <form className={styles.form} type="submit">
          <input
            onChange={planText}
            className={styles.text}
            value={props.state.weekTask.text}
          />
        </form>
        <div className={styles.listbox}>
          <TodoList state={props.state} dispatch={props.dispatch} />
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
