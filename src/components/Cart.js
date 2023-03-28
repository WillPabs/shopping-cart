import { Button, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

const Cart = () => {
	const [products, setProducts] = useState([]);
	const [totalPrice, setTotalPrice] = useState(0);
	const [productCount, setProductCount] = useState(0);

	const getCart = async () => {
		const data = await fetch("http://localhost:3001/cart");
		const cart = await data.json();
		let price = 0;
		let count = 0;
		await cart.forEach((p) => {
			price += Number(p.price) * Number(p.requestedQuantity);
			count += p.requestedQuantity;
		});
		setProductCount(count);
		setTotalPrice(price);
		setProducts(cart);
	};

	useEffect(() => {
		getCart();
	}, []);

	return (
		<div id="user-cart" className="flex flex-col justify-center">
			<table className="table-auto">
				<caption>
					<Typography variant="h4">
						Your Cart ({productCount} Items)
					</Typography>
				</caption>
				<thead>
					<tr className="border-b">
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
						return <CartItem key={p._id} product={p} />;
					})}
				</tbody>
				<tfoot>
					<tr className="border-t">
						<td align="right" colSpan={4}>
							Total
						</td>
						<td>${totalPrice.toFixed(2)}</td>
					</tr>
					<tr>
						<td align="right" colSpan={5}>
							<Button>Cop</Button>
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
};

export default Cart;
