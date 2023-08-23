const Navigation = () =>
{
    return(
        <nav className="container">
            <div className="logo">
            <img className="fashionShop" src="images/fashionLogo.jpg" alt=""/>
            </div>
            <ul>
            <li href='#'> Menu</li>
            <li href='#'> About</li>
            <li href='#'> Location</li>
            <li href='#'> Contact</li>
            </ul>
            <button className="login-btn">
            Login
            </button>
        </nav>
    );
};

export default Navigation