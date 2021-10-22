import React from "react";
import { NavLink } from 'react-router-dom';
import Day from "./day/Day";
import styles from './Week.module.css';


const Week = (props) => {
  const dayStart = (e) => {

    <Day state={props.state} day={e.target.id} />
  }
  const dayWeek = props.state.dayWeek.map(day =>
    <div className={styles.text} id={day} onClick={dayStart}>{day}</div>
  )


  return (
    <div>
      <div className={styles.box}>

        <h1>1 неделя</h1>
        <h1>2 неделя</h1>

        <div className={styles.form} type="submit">
          {dayWeek}
        </div>
        <div className={styles.listbox}></div>
        <NavLink to="/">Выход</NavLink>
      </div>
    </div>
  );
};
export default Week;