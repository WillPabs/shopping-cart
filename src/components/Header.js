import { Link } from "react-router-dom";

const Header = () => {
    const logo = '#';
    const companyName = 'ShoppingCart';
    // button will toggle showing the cart component
    const cartButton = <button type="button">
        <img src="#" alt="Cart" />
    </button>

    const loginButton = <button className="bg-sky-500" type="button">Login</button>

    return (
        <div className="flex flex-row">
            <div id="logo-container">
                <img src={logo} alt="logoImage" />
                <h3>{companyName}</h3>
            </div>
            <ul id="links-container">             
                <li className="nav-link">
                    <Link to='/'>Home</Link>
                </li>
                <li className="nav-link">
                    <Link to='/shop'>Shop</Link>
                </li>
                <li className="nav-link">
                    <Link to='/about'>About</Link>
                </li>
                <li className="nav-link">
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
            <div id="cart-btn-container">
                {cartButton}
            </div>
            <div id="login-btn-container">
                {loginButton}
            </div>
        </div>
    )
};

export default Header;

