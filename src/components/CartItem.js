import { Button } from "@material-tailwind/react";
import { useState } from "react";

const CartItem = ({ product }) => {
	const [quantity, setQuantity] = useState(product.requestedQuantity);

	const changeQuantity = (e) => {
		e.preventDefault();
		const action = e.target.id;

		if (action === "decrease") setQuantity(quantity - 1);
		else if (action === "increase") setQuantity(quantity + 1);
	};

	return (
		<tr className="border-y text-center">
			<td>
				<img
					className="h-12 w-12"
					src={product.imageUrl}
					alt={product.title}
				/>
			</td>
			<td>{product.title}</td>
			<td>${product.price}</td>
			<td>
				<Button id="decrease" onClick={changeQuantity}>
					-
				</Button>
				{quantity}
				<Button id="increase" onClick={changeQuantity}>
					+
				</Button>
			</td>
			<td>${product.price * product.requestedQuantity}</td>
		</tr>
	);
};

export default CartItem;
