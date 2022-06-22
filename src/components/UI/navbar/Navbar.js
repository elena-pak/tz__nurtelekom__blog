import React from 'react';
import {Link} from "react-router-dom";
import icon from '../../assets/icon/icon-g.svg';
import  './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar__content'>
                <Link to='/'>
                    <img src={icon} alt='logo' width='50px'  />
                </Link>
                <Link to='/'>Home</Link>
                <Link to='/gallery'>Gallery</Link>
                <Link to='/about'>About</Link>
            </div>

        </div>
    );
};

export default Navbar;