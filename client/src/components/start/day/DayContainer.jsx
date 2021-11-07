import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import {
  delTask,
  planText,
  taskAdd,
} from "../../../redax/reducers/taskDayReducer";
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
class DayConteinerConnect extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    axios.get("http://localhost:5000/todo/day").then((response) => {
    if(response.data[0]){
        this.props.weekTask.task = response.data[0].task.map((volume, index) => {
      return volume
    })     
    }
  
    
    });
  }
  render() {
    return <Day
      weekTask={this.props.weekTask}
      planText={this.props.planText}
      taskAdd={this.props.taskAdd}
      delTask={this.props.delTask}
    />;
  }
}

const mapStateToProps = (state) => {
  state.weekTask.weekStart = state.dayWeek.weekStart;
  state.weekTask.day = state.dayWeek.dayStart;
  return {
    weekTask: state.weekTask,
  };
};
const mapDispatchToProps = {
  planText,
  taskAdd,
  delTask,
};

const DayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DayConteinerConnect);

export default DayContainer;
