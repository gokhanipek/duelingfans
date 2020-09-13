import React from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom';
import Logo from './../../assets/dueling-fans-inner-white.png';
import './Navbar.scss';

const Navbar = ({history}) => {
    const {pathname} = useLocation();
    return (
        <div className="navbar">
            <img className="navbar--logo" alt="logo" src={Logo} onClick={() => history.push('/home')} />
            <ul className="navbar__list">
                <li className="navbar__list--items"><Link to="/Home">Home</Link></li>
                {pathname !== '/duel' && <li className="navbar__list--items"><Link to="/duel">Duel Now!</Link></li>}
            </ul>
        </div>
    )
}

export default withRouter(Navbar)
