import { useState } from "react";
import Card from "./Card";

const Shop = ({ productList }) => {
    const [products, setProducts] = useState(productList);
    console.log("prods", productList)
    const productCards = products.length > 0 ? products.map(product => {
        return (
            <li key={product.id}>
                <Card name={product.name} image={product.image}/>
            </li>
        )
    }) : <div>No Products</div>;


    return (
        <div>
            <h2>Browse {products[0].category} Products</h2>
            
            <ul id="product-list">
                {productCards}
            </ul>
        </div>
    )   
}

export default Shop;