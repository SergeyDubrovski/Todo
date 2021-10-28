import { connect } from "react-redux";
import {
  actionGetDay,
  actionDelTask,
  actionPlanText,
  actionTaskAdd,
} from "../../../../redax/reducers/taskDayReducer";
import Day from "./Day";

/*
const DayContainer = (props) => {
  const planText = (e) => {
    props.dispatch(actionPlanText(e));
  };
  const taskAdd = () => {
    props.dispatch(
      actionTaskAdd(props.state.weekTask.weekN, props.state.dayWeek[2][1], props.state.dayWeek[2][0])
    );
  };
  const delTask = (e) => {
    props.dispatch(actionDelTask(e, props.state.dayWeek[2][1], props.state.dayWeek[2][0]))
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
};*/

const mapStateToProps = (state) => {
  
  return {
    weekTask: state.weekTask
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    getDay: (day, day1) => {
      dispatch(actionGetDay(day, day1))
},
    planText: (body) => {
      dispatch(actionPlanText(body))
  },
    taskAdd: (weekN, day, day1) => {
      dispatch(actionTaskAdd(weekN, day, day1))
    },
    delTask: (e, day, day1) => {
      dispatch(actionDelTask(e, day, day1))
    }
  }
}

const DayContainer = connect(mapStateToProps, mapDispatchToProps)(Day);


export default DayContainer;
