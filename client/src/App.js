import React from "react";
import { Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import AuthBar from "./components/navbar_auth/AuthBar";
import Registr from "./components/registr/Registr";
import DayContainer from "./components/start/day/DayContainer"
import DayGive from "./components/start/day/DayGive";
import GetListContainer from "./components/start/GetListContainer";
import WeekContainer from "./components/start/week/WeekContainer";

function App() {

  return ( 
    <div>
      <Route exact path="/" render={() => <AuthBar />} />
      <Route path="/auth" render={() => <Auth />} />
      <Route path="/registr" render={() => <Registr />} />
      <Route path="/todo" render={() => <WeekContainer />} />
      <Route path="/todo" render={() => <GetListContainer />} />
      <Route exact path="/todo/day" render={() => <DayContainer />} />
      <Route exact path="/save" render={() => <DayGive />} />
    </div>
  );
}

export default App;
