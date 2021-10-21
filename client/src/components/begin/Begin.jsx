import { Route } from "react-router-dom";
import Auth from "../auth/Auth.jsx";
import AuthBar from "../navbar_auth/AuthBar.jsx";
import Registr from "../registr/Registr.jsx";
import ToDo from "../start/ToDo.jsx";

const Begin = (props) => {
  return (
    <div>
      <Route exact path="/" render={() => <AuthBar />} />
      <Route path="/todo" render={() => <ToDo state={props.state} />} />
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/registr" render={() => <Registr />} />
    </div>
  );
};

export default Begin;
