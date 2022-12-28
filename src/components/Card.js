const Card = ({ image, name, description, onClick, addToCart }) => {

    
    return (
        <form>
            <div>
                <figure onClick={onClick}>
                    <img src={image} alt="productImage" />
                    <figcaption>{name}</figcaption>
                </figure>
                <input
                    type="number"
                    id="quantity"
                    name="quantity"
                />
                <button type="submit">Add To Cart</button>
            </div>
        </form>
    )
};

export default Card;