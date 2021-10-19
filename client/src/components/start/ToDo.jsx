import React from 'react';
import s from './ToDo.module.css'; 
 
const ToDo = () => {
  return (
    <div>
      <div className={s.box}>
        <h1>Тренировка дня</h1>
        <form className={s.form} type="submit">
          <input className={s.text} value="" autofocus></input>
        </form>
        <div className={s.listbox}></div>
        <button className={s.button}>Удалить</button>
      </div>{" "}
    </div>
  );
}
export default ToDo;
