import { connect } from "react-redux"
import { weekStart, dayStart } from "../../../redax/reducers/dayStartReducer";
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
const mapDispatchToProps = {
weekStart,
dayStart
}

const WeekContainer = connect(mapStateToProps, mapDispatchToProps)(Week);
export default WeekContainer;
