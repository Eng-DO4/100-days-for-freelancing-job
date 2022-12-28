import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="error404">
            <h2>Not Found 🤔</h2>
            <div>No page for this route</div>
            <Link to='/'>Back to homepage...</Link>
        </div>
    );
}

export default NotFound;