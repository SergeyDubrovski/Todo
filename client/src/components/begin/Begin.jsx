import { Route } from "react-router-dom";
import Auth from "../auth/Auth.jsx";
import AuthBar from "../navbar_auth/AuthBar.jsx";
import Registr from "../registr/Registr.jsx";
import DayContainer from "../start/week/day/DayContainer.jsx";
import WeekContainer from "../start/week/WeekContainer.jsx";

const Begin = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <AuthBar />} />
      <Route path="/todo" render={() => <WeekContainer state={props.state} dispatch={props.dispatch} />} />
      <Route exact path="/todo/day" render={() => <DayContainer state={props.state} dispatch={props.dispatch} />} /> 
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/registr" render={() => <Registr />} />
    </div>
  );
};

export default Begin;
