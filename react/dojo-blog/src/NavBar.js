const NavBar = () => {
    return (
        <nav>
            <h1>This is the Navigation Bar</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a> {/* This won't work before routing */}
            </div>
        </nav>
    )
}

export default NavBar;