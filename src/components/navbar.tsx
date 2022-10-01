import React from 'react';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {
    return (
        <div className="navbar">
            <div>Koh Uehara</div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    )
};

export default NavBar;
