import React from "react";
import * as axios from 'axios'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
 
class DayGiveContainerConnect extends React.Component{

    list = [];
    listGet() {
        axios.get('http://localhost:5000/todo/day').then(response => {
            this.list = response.data[0].task
            })
    }
    
    componentDidMount() {
         
        axios.put('http://localhost:5000/todo/day', {task:this.props.task})
               
    }
    
    render() {
        
        this.listGet();
       return <div>
           <div>Hello</div> 
           <Link to="/todo/day">
               <button>X</button>
           </Link>
           
       </div>
      
    }
}
const mapStateToProps = state => state.weekTask; 

const mapDispatchToProps = {};


const DayGiveContainer = connect(mapStateToProps, mapDispatchToProps)(DayGiveContainerConnect)

export default DayGiveContainer