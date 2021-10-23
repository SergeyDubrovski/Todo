import { BrowserRouter } from "react-router-dom";
import Begin from "./components/begin/Begin.jsx";


function App(props) {
  return (
    <BrowserRouter>
      <Begin state={props.state} dayStart={props.dayStart} planText={props.planText} textAdd={props.textAdd} />
    </BrowserRouter>

  );
}

export default App;
