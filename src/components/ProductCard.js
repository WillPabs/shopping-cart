import { useState } from "react";
import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Tooltip,
} from "@material-tailwind/react";

const ProductCard = ({ product }) => {
	const [quantity, setQuantity] = useState(0);
	const {
		image,
		title,
		price,
		category,
		description,
		quantityAvailable,
		onClick,
	} = product;

	const handleChange = (e) => {
		setQuantity(e.target.value);
	};

	const addToCart = async (e) => {
		e.preventDefault();
		console.log(quantity);

		const data = await fetch("http://localhost:3001/cart", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
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
					<Typography variant="h4" color="blue-gray" className="mb-2">
						{title}
					</Typography>
					<Typography
						color="blue"
						className="font-medium"
						textGradient
					>
						${price}
					</Typography>
				</CardBody>
				<CardFooter className="flex justify-center gap-7 pt-2">
					<Tooltip content="Like">
						<Typography
							as="a"
							href="#facebook"
							variant="lead"
							color="blue"
							textGradient
						>
							<i className="fab fa-facebook" />
						</Typography>
					</Tooltip>
					<Tooltip content="Follow">
						<Typography
							as="a"
							href="#twitter"
							variant="lead"
							color="light-blue"
							textGradient
						>
							<i className="fab fa-twitter" />
						</Typography>
					</Tooltip>
					<Tooltip content="Follow">
						<Typography
							as="a"
							href="#instagram"
							variant="lead"
							color="purple"
							textGradient
						>
							<i className="fab fa-instagram" />
						</Typography>
					</Tooltip>
				</CardFooter>
			</Card>
			{/* <div>
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
            </div> */}
		</form>
	);
};

export default ProductCard;
