import { useEffect, useState } from "react"


const Cart = () => {
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    // get cart from api and set to products
    const getCart = async () => {
        const data = await fetch('http://localhost:3001/cart');
        const cart = await data.json();
        console.log(cart);
        let price = 0;
        await cart.forEach(p => {
            console.log(p)
            price += Number(p.price);
        })
        console.log(price);
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
                        <li key={p._id}>
                            <p>{p.title} x {p.requestedQuantity}</p>
                        </li>
                    )
                })}
                {'Total: $'+totalPrice}
            </ul>
        </div>
    )
}

export default Cart;