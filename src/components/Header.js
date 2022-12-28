const Header = ({ message }) => {
    const logo = '#';
    const companyName = 'ShoppingCart';
    
    return (
        <div>
            <div id="logo-container">
                <img src={logo} alt="logoImage" />
                <h3>{companyName}</h3>
            </div>
            <div id="links-container">
                
            </div>
        </div>
    )
};

export default Header;

