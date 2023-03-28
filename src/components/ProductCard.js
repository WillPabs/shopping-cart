import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
	Button,
} from "@material-tailwind/react";

const ProductCard = ({ product }) => {
	const [quantity, setQuantity] = useState(0);
	const {
		id,
		image,
		title,
		price,
		category,
		description,
		quantityAvailable,
		onClick,
	} = product;

	const changeQuantity = (e) => {
		e.preventDefault();
		const action = e.target.id;

		if (action === "decrease") setQuantity(quantity - 1);
		else if (action === "increase") setQuantity(quantity + 1);
	};

	const addToCart = async (e) => {
		e.preventDefault();
		console.log(quantity);
		if (quantity === 0) return;

		const data = await fetch("http://localhost:3001/cart", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				productId: id,
				title: title,
				category: category,
				description: description,
				imageUrl: image,
				price: price,
				quantityAvailable: quantityAvailable - quantity,
				requestedQuantity: quantity,
			}),
		});
		const product = await data.json();

		console.log(product);
	};

	// cut string and add '...' to end if char over limit
	const limitStringLength = (string) => {
		if (string.length > 60) {
			string = string.substr(0, 60);
			string = string + "...";
		}
		return string;
	};

	return (
		<form>
			<Card className="w-96">
				<CardHeader
					floated={false}
					className="h-80 flex justify-center content-center"
				>
					<img
						className="flex object-contain max-w-full"
						src={image}
						alt={title}
					/>
				</CardHeader>
				<CardBody className="text-center">
					<Typography
						variant="h4"
						color="blue-gray"
						className="flex h-32 items-center"
					>
						{limitStringLength(title)}
					</Typography>
					<Typography
						color="blue"
						variant="lead"
						className="font-medium"
						textGradient
					>
						${price}
					</Typography>
				</CardBody>
				<CardFooter className="flex justify-center gap-7 pt-2">
					<Tooltip content="Remove">
						<Typography
							as="button"
							id="decrease"
							onClick={changeQuantity}
							variant="lead"
							color="blue"
							textGradient
						>
							-
						</Typography>
					</Tooltip>
					<Tooltip content="Quantity">
						<Typography
							as="span"
							variant="lead"
							color="blue"
							textGradient
						>
							{quantity}
						</Typography>
					</Tooltip>
					<Tooltip content="Add">
						<Typography
							as="button"
							id="increase"
							onClick={changeQuantity}
							variant="lead"
							color="blue"
							textGradient
						>
							+
						</Typography>
					</Tooltip>
					<Tooltip content="Add">
						<Button onClick={addToCart}>Cop to Cart</Button>
					</Tooltip>
				</CardFooter>
			</Card>
		</form>
	);
};

export default ProductCard;
