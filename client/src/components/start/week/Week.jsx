import React from "react";
import { Link, NavLink } from "react-router-dom";
import Day from "../day/Day";
import styles from "./Week.module.css";
const Week = (props) => {
  let weekStart = (e) => {
    props.weekStart(e.target.id);
  };

  let dayStart = (e, day) => {
    props.dayStart(e.target.id, day);
  };
  const dayWeek = props.dayWeek[0].map((day, index) => {
    return (
      <Link to="/todo/day" key={index.id}>
        <div
          className={styles.text}
          id={props.dayWeek[1][index]}
          key={day.id}
          onClick={(e) => dayStart(e, day)}
        >
          {day}
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className={styles.box}>
        <h1 onClick={weekStart} id="week1">
          1-я неделя
        </h1>
        <h1 onClick={weekStart} id="week2">
          2-я неделя
        </h1>

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
