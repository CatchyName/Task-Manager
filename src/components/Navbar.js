const Navbar = ({ title, abouthref, }) => {
    return (
        <div className="navbar">
            <h1 className="title"><a href="/">{title}</a></h1>
            <a className="navbuttons" href={abouthref}>About the project</a>
        </div>
    );
}

export default Navbar;