import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>This is the Navigation Bar</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link> {/* This won't work before routing */}
            </div>
        </nav>
    )
}

export default NavBar;