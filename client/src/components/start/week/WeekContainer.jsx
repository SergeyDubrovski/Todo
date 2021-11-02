import { connect } from "react-redux"
import { actionWeekStart, actionDayStart } from "../../../redax/reducers/dayStartReducer";
import Week from "./Week";

/*const WeekContainer = (props) => {
  let dayStart = (e) => {
    props.dispatch(actionDayStart(e));
  };
 return <Week state={props.state} dayStart={dayStart}  />
};*/

const mapStateToProps = (state) => {
  return {
    dayWeek: state.dayWeek
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    weekStart: (weekN) => {
      dispatch(actionWeekStart(weekN)); 
    },
    dayStart: (e, day) => {
      dispatch(actionDayStart(e, day));
    }
  }
}
const WeekContainer = connect(mapStateToProps, mapDispatchToProps)(Week);
export default WeekContainer;
