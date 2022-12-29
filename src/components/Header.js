const Header = ({ message }) => {
    const logo = '#';
    const companyName = 'ShoppingCart';
    // button will toggle showing the cart component
    const cartButton = <button type="button">
        <img src="#" alt="Cart" />
    </button>

    const loginButton = <button type="button">Login</button>

    const links = ['Home', 'Shop', 'About', 'Contact'];
    const linksComponent = links.map(link => {
        return (
            <li key={link}>
                <a href={link}>{link}</a>
            </li>
        )
    });


    return (
        <div>
            <div id="logo-container">
                <img src={logo} alt="logoImage" />
                <h3>{companyName}</h3>
            </div>
            <div id="links-container">
                {linksComponent}
            </div>
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

