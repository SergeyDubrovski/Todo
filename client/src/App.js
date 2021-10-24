import { BrowserRouter } from "react-router-dom";
import Begin from "./components/begin/Begin.jsx";


function App(props) {
  return (
    <BrowserRouter>
      <Begin state={props.state} dispatch={props.dispatch}  />
    </BrowserRouter>

  );
}

export default App;
