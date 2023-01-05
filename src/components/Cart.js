import { useState } from "react"


const Cart = () => {
    const [products, setProducts] = useState([]);

    // get cart from api and set to products

    return (
        <div id='user-cart'>
            <h3>Your Cart</h3>
            <ul id='cart-list'>

            </ul>
        </div>
    )
}

export default Cart;