import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Categories from "./Categories";

const Shop = () => {
    const { productType } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${productType}`)
            .then(data => {
                data.json().then(products => {
                    setProducts(products);
                })
            })
        
    }, []);

    const productCards = products.length > 0 ? products.map(product => {
        return (
            <li key={product.id}>
                <Card name={product.title} price={product.price} image={product.image}/>
            </li>
        )
    }) : <Categories/>;

    return (
        <div>
            <h2>Browse {productType} Products</h2>
            <ul id="product-list">
                {console.log(products)}
                {productCards}
            </ul>
        </div>
    )   
}

export default Shop;