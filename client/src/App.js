import { BrowserRouter } from "react-router-dom";
import Begin from "./components/begin/Begin.jsx";


function App(props) {
  return (
    <BrowserRouter>
      <Begin state={props.state} dayStart={props.dayStart} />
    </BrowserRouter>

  );
}

export default App;
