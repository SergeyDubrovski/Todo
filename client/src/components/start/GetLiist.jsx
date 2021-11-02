import React  from "react"
import * as axios from "axios"

class GetList extends React.Component {

 
componentDidMount()  {
    axios.get("http://localhost:5000/todo/day").then(response => {
        
        this.props.state.dayWeek[1].forEach((value) => {
            this.props.state.weekTask.task[value] = [...response.data[0].task[0][value]];
        })    
    })

}
    render() {
        return <div></div>
    }

}
export default GetList