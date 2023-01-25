import { useEffect, useState } from "react";

const Cart = () => {
	const [products, setProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);

	// get cart from api and set to products
	const getCart = async () => {
		const data = await fetch("http://localhost:3001/cart");
		const cart = await data.json();
		let price = 0;
		await cart.forEach((p) => {
			price += Number(p.price);
		});
		setTotalPrice(price);
		setProducts(cart);
	};

	useEffect(() => {
		getCart();
	}, []);

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th align="left" colSpan={2}>
							Item
						</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{products.map((p) => {
						console.log(p);
						return (
							<tr key={p._id}>
								<td>
									<img
										className="h-12 w-12"
										src={p.imageUrl}
										alt={p.title}
									/>
								</td>
								<td>{p.title}</td>
								<td>${p.price}</td>
								<td>{p.requestedQuantity}</td>
								<td>${p.price * p.requestedQuantity}</td>
							</tr>
						);
					})}
				</tbody>
				<tfoot>
					<tr>
						<td align="right" colSpan={4}>
							Total
						</td>
						<td>${totalPrice}</td>
					</tr>
				</tfoot>
			</table>
		</div>
		// <div id='user-cart'>
		//     <h3>Your Cart</h3>
		//     <ul id='cart-list'>
		//         {products.map((p) => {
		//             return (
		//                 <CartItem key={p._id} product={p}/>
		//             )
		//         })}
		//         {'Total: $'+totalPrice}
		//     </ul>
		// </div>
	);
};

export default Cart;
