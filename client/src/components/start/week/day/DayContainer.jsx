import React from "react";
import {
  actionDelTask,
  actionPlanText,
  actionTaskAdd,
} from "../../../../redax/reducers/taskDayReducer";
import Day from "./Day";


const DayContainer = (props) => {
  const planText = (e) => {
    props.dispatch(actionPlanText(e));
  };
  const taskAdd = () => {
    props.dispatch(
      actionTaskAdd(props.state.weekTask.weekN, props.state.dayWeek[2][1])
    );
  };
  const delTask = (e) => {
    props.dispatch(actionDelTask(e, props.state.dayWeek[2][1]))
  } 

  return (
    <Day
      state={props.state}
      dispatch={props.dispatch}
      planText={planText}
      taskAdd={taskAdd}
      delTask={delTask} 
    />
  );
};
export default DayContainer;
