import React from 'react'
import { Link, useLocation } from 'react-router-dom';

import Logo from './../../assets/dueling-fans-inner-white.png';
import './Navbar.scss';

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname
    console.warn(currentPath);

    return (
        <div className="navbar">
            <img className="navbar--logo" alt="logo" src={Logo}/>
            <ul className="navbar__list">
                <li className="navbar__list--items"><Link to="Home">Home</Link></li>
                {currentPath !== '/duel' && <li className="navbar__list--items"><Link to="/duel">Duel Now!</Link></li>}
            </ul>
        </div>
    )
}

export default Navbar
