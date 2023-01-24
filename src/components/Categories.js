import React, { useState, useEffect } from "react";
import electronics from "../images/electronics.png";
import tshirt from "../images/tshirt.png";
import dress from "../images/dress.png";
import jewelry from "../images/jewelry.png";
import { Link } from "react-router-dom";

const Categories = () => {
	const [productsList, setProductsList] = useState([]);
	useEffect(() => {
		fetch("https://fakestoreapi.com/products/categories")
			.then((res) => res.json())
			.then((json) => {
				setProductsList(json);
			});
	}, []);

	return (
		<ul className="flex gap-4 justify-center mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			{productsList.map((product) => {
				let link;
				if (product === "electronics") link = electronics;
				else if (product === "men's clothing") link = tshirt;
				else if (product === "women's clothing") link = dress;
				else if (product === "jewelery") link = jewelry;

				return (
					<li key={product}>
						<Link to={`/shop/${product}`} style={{ width: 80 }}>
							<img
								style={{ width: 80 }}
								src={link}
								alt={product}
							/>
							<h3>{product}</h3>
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Categories;
