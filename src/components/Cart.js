import { useEffect, useState } from "react"
import CartItem from "./CartItem";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // get cart from api and set to products
    const getCart = async () => {
        const data = await fetch('http://localhost:3001/cart');
        const cart = await data.json();
        let price = 0;
        await cart.forEach(p => {
            price += Number(p.price);
        })
        setTotalPrice(price);
        setProducts(cart);
    }

    useEffect(() => {
        getCart();
    }, [])

    return (
        <div id='user-cart'>
            <h3>Your Cart</h3>
            <ul id='cart-list'>
                {products.map((p) => {
                    return (
                        <CartItem key={p._id} product={p}/>
                    )
                })}
                {'Total: $'+totalPrice}
            </ul>
        </div>
    )
}

export default Cart;