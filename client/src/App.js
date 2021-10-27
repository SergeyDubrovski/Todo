import React from "react"; 
import { Route } from "react-router-dom";
import Auth from "./components/auth/Auth";
import AuthBar from "./components/navbar_auth/AuthBar";
import Registr from "./components/registr/Registr";
import DayContainer from "./components/start/week/day/DayContainer"
import WeekContainer from "./components/start/week/WeekContainer"; 

function App() {
  
    return (
      <div> 
        <Route exact path="/" render={() => <AuthBar />} />
        <Route path="/todo" render={() => <WeekContainer />} />
        <Route exact path="/todo/day" render={() => <DayContainer />} /> 
        <Route path="/auth" render={() => <Auth />} />
        <Route path="/registr" render={() => <Registr />} />
      </div>
    ); 
}

export default App;
