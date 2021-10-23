import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Day.module.css';  
import TodoList from "./todoList/TodoList";

const Day = (props) => {
  const planText = (e) => {
    props.planText(e); 
  }
const textAdd = () =>{
  props.textAdd();
}  
    
return (
    <div>
      <div className={styles.box}>
        <h1>План {props.state.day[0]}</h1>
        <form className={styles.form} type="submit">
          <input onChange={planText} className={styles.text} value={props.state.text} />
        </form>
        <div className={styles.listbox}>
        <TodoList state = {props.state}/>
        </div>
        <button className={styles.button} onClick={textAdd}>Добавить</button>
        <NavLink to="/">Выход</NavLink>
      </div>
    </div>
  );
};
export default Day;