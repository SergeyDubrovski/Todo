import React from "react";
import {connect} from "react-redux"
import { actionDayStart } from "../../../redax/reducers/dayStartReducer";
import Week from "./Week";

/*const WeekContainer = (props) => {
  let dayStart = (e) => {
    props.dispatch(actionDayStart(e));
  };
 return <Week state={props.state} dayStart={dayStart}  />
};*/

const mapStateToProps 

const WeekContainer =  connect(mapStateToProps, mapDispatchToProps, mergeProps)(component);
export default WeekContainer; 
