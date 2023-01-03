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
                {/* {productsList.map(product => {
                    return (
                        <div style={{width:80}}>
                            <h3>{product.title}</h3>
                            <img style={{}} src={product.image} alt={product.title} />
                            <p>{product.price}</p>
                        </div>
                    )
                })} */}
            </ul>
        </div>
    )   
}

export default Shop;