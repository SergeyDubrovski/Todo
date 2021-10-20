import React from 'react';
import { NavLink } from 'react-router-dom';


const AuthBar = (props) => {
    return (
        <div>
            <NavLink to="/registr">Регистрация</NavLink>
            <NavLink to="/auth">Авторизация</NavLink>
        </div>
    )
}

export default AuthBar