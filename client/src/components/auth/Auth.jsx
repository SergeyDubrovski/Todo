import React from 'react';
import { NavLink } from 'react-router-dom';

const start = () => {
    console.log('start');
}
const Auth = (props) => {
    
    return (
        <div>
            <input />
            <NavLink to="/todo" onClick={start}>Авторизация</NavLink>
        </div>
    )
}
export default Auth