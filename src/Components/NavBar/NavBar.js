import React from 'react';
import { Link } from 'react-router-dom';
import "./navBar.css";

const NavBar = ({value, setValue}) => {
    return (
        <div className='navContainer'>
            <ul className='listItemContainer'>
                <Link to={'/'}>
                    <li className='listItem'>Home</li>
                </Link>
                <Link to={'/about'}>
                    <li className='listItem'>About</li>
                </Link>
                <Link to={'/contact'}>
                    <li className='listItem'>Contact</li>
                </Link>
            </ul>
            <input type="text" placeholder="Search" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
    );
}

export default NavBar;