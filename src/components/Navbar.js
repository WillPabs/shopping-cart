import { Link } from "react-router-dom";

const Navbar = () => {
    const logo = '#';
    const companyName = 'ShoppingCart';
    // button will toggle showing the cart component
    const cartButton = <button type="button">
        <img src="#" alt="Cart" />
    </button>

    const loginButton = <button className="bg-sky-500" type="button">Login</button>

    return (
        <div className="flex flex-row justify-center p-8">
            <div id="logo-container" className="flex flex-row space-x-4 justify-center">
                <img src={logo} alt="logoImage" />
                <h3>{companyName}</h3>
            </div>
            <ul id="links-container" className="flex flex-row space-x-4 justify-center">              
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
                <li className="nav-link">
                    {cartButton}
                </li>
                <li className="nav-link">
                    {loginButton}
                </li>
            </ul>
        </div>
    )
};

export default Navbar;

