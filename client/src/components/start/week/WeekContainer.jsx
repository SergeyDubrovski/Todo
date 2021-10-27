import React from "react";
import { actionDayStart } from "../../../redax/reducers/dayStartReducer";
import Week from "./Week";

const WeekContainer = (props) => {
  let dayStart = (e) => {
    props.dispatch(actionDayStart(e));
  };
 return <Week state={props.state} dayStart={dayStart}  />
};
export default WeekContainer;
