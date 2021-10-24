import { Route } from "react-router-dom";
import Auth from "../auth/Auth.jsx";
import AuthBar from "../navbar_auth/AuthBar.jsx";
import Registr from "../registr/Registr.jsx";
import ToDo from "../start/ToDo.jsx";
import Day from "../start/week/day/Day"; 

const Begin = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <AuthBar />} />
      <Route path="/todo" render={() => <ToDo state={props.state} dispatch={props.dispatch} />} />
      <Route exact path="/todo/day" render={() => <Day state={props.state} dispatch={props.dispatch} />} /> 
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/registr" render={() => <Registr />} />
    </div>
  );
};

export default Begin;
