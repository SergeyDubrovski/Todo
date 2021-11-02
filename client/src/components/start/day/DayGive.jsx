import React from "react";
import { Link } from "react-router-dom";

class DayGive extends React.Component{
    componentDidMount() {

    }
    render() {
       return <div>
           <div>Hello</div> 
           <Link to="/todo/day">
               <button>X</button>
           </Link>
           
       </div>
      
    }
}
export default DayGive