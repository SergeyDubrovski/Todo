import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Week.module.css";

const Week = (props) => {
  let dayStart = (e) => {
    props.dayStart(e);
    
    
  };
  const dayWeek = props.state.dayWeek[0].map((day, index) => {
   
    return (
      <Link to="/todo/day">
        <div className={styles.text} id={index} onClick={dayStart}>{day}</div>
        
      </Link>
    );
  });

  return (
    <div>
      
      <div className={styles.box}>
        <h1>1-я неделя</h1>
        <h1>2-я неделя</h1>

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
