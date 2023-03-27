import { Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import Categories from "./Categories";
import Header from "./Nav";

const Shop = () => {
	const { productType } = useParams();
	const [productCards, setProductCards] = useState();

	useEffect(() => {
		fetch(`https://fakestoreapi.com/products/category/${productType}`).then(
			(data) => {
				data.json().then((products) => {
					setProductCards(
						products.length > 0 ? (
							products.map((product) => {
								return (
									<li key={product.id}>
										<ProductCard product={product} />
									</li>
								);
							})
						) : (
							<Categories />
						)
					);
				});
			}
		);
	}, [productType]);

	return (
		<div className="flex flex-col min-h-screen mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<Header />
			<div id="shop-content" className="text-center">
				<Typography variant="h3" className="py-10">
					Browse {productType ? productType : "All"} Products
				</Typography>
				<ul id="product-list" className="flex flex-wrap justify-center">
					{productCards}
				</ul>
			</div>
			<Footer />
		</div>
	);
};

export default Shop;
