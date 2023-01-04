const Card = ({ image, name, price, description, onClick, addToCart }) => {
    
    return (
        <form>
            <div>
                <figure onClick={onClick}>
                    <img style={{width:120}} src={image} alt="productImage" />
                    <figcaption>
                        <h4>{name}</h4>
                        <h4>${price}</h4>
                    </figcaption>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value="1"
                    />
                    <button type="submit">Add To Cart</button>
                </figure>
            </div>
        </form>
    )
};

export default Card;