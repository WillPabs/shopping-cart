import { useState } from "react";

const CartItem = ({ product }) => {
    const [requestedQuantity, setRequestedQuantity] = useState(product.requestedQuantity);

    const handleQuantityChange = (e) => {
        if (e.target.id === 'decrease-qty') {
            setRequestedQuantity(Number(requestedQuantity) - 1);
        } else if (e.target.id === 'increase-qty') {
            setRequestedQuantity(Number(requestedQuantity) + 1);
        }
    }

    return (
        <li id={product._id}>
            <p>{product.title} {'$'+product.price}</p>
            <div>
                <button id='decrease-qty' onClick={handleQuantityChange}>-</button>
                {requestedQuantity}
                <button id='increase-qty' onClick={handleQuantityChange}>+</button>
            </div>
        </li>
    )
}

export default CartItem;