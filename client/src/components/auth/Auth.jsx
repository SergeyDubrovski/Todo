import React from 'react';
import { NavLink } from 'react-router-dom';
import ToDo from '../start/ToDo';
const Start = () => {
    return <NavLink to="/todo" />
}
const Auth = (props) => {
    
    return (
        <div>
            <input />
            <button onClick={Start}>Авторизация</button>
        </div>
    )
}
export default Auth