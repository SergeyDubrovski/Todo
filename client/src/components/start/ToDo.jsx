import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './ToDo.module.css'; 
 
const ToDo = (props) => {
  return (
    <div>
      <div className={styles.box}>
        <h1>План дня</h1>
        <form className={styles.form} type="submit">
          <input className={styles.text} value="" autofocus />
          <input className={styles.text} value="" autofocus />
          <input className={styles.text} value="" autofocus />
        </form>
        <div className={styles.listbox}></div>
        <button className={styles.button}>Удалить</button>
        <NavLink to="/">Выход</NavLink>
      </div>{" "}
    </div>
  );
}
export default ToDo;
