import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <h1>This is the Navigation Bar</h1>
            <div className="links">
                <Link to="/">Home</Link> {/* much quicker than sending req to the server every time */}
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
    )
}

export default NavBar;