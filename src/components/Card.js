const Card = ({ image, name, description, onClick, addToCart }) => {

    
    return (
        <form>
            <div>
                <figure onClick={onClick}>
                    <img src={image} alt="productImage" />
                    <figcaption>{name}</figcaption>
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