import * as React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar: React.FC<NavBarProps> = props => {
    return (

        <nav className="nav justify-content-center align-items-center mb-4 p-3 shadow">
            <NavLink className= {({ isActive }) => `btn btn-link-2 text-danger  nav-link ${isActive && "active"}`} to='/'>Home</NavLink>
            <NavLink className={({ isActive }) => `btn btn-link-2 text-danger  nav-link ${isActive && "active"}`} to='/compose'>Compose</NavLink>
        </nav>

    );
};

interface NavBarProps { }

export default NavBar;
