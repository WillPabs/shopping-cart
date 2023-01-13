import { useState } from "react";

const Card = ({ product }) => {
    const [quantity, setQuantity] = useState(0);
    const { image, title, price, category, description, quantityAvailable, onClick } = product;
    
    const handleChange = (e) => {
        setQuantity(e.target.value);
    }

    const addToCart = async (e) => {
        e.preventDefault();
        console.log(quantity);
        
        const data = await fetch('http://localhost:3001/cart', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: title,
                category: category,
                description: description,
                imageUrl: image,
                price: price,
                quantityAvailable: quantityAvailable - quantity,
                requestedQuantity: quantity,
            })
        });
        const product = await data.json();

        console.log(product);
    }

    return (
        <form>
            <div>
                <figure onClick={onClick}>
                    <img style={{width:120}} src={image} alt="productImage" />
                    <figcaption>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </figcaption>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={quantity}
                        onChange={handleChange}
                    />
                    <button type="submit" onClick={addToCart}>Add To Cart</button>
                </figure>
            </div>
        </form>
    )
};

export default Card;