import { Route } from "react-router-dom";
import Auth from "../auth/Auth.jsx";
import AuthBar from "../navbar_auth/AuthBar.jsx";
import Registr from "../registr/Registr.jsx";
import ToDo from "../start/ToDo.jsx";


const Begin = (props) => {
    return (
        <div>
            <AuthBar />
            <Route path="/todo" component={ToDo} />
            <Route path="/auth" component={Auth} />
            <Route path="/registr" component={Registr} />
        </div>

    );
}

export default Begin;