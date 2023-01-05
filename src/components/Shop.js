import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Categories from "./Categories";
import Header from "./Header";

const Shop = () => {
    const { productType } = useParams();
    const [productCards, setProductCards] = useState();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${productType}`)
            .then(data => {
                data.json().then(products => {
                    setProductCards(products.length > 0 ? products.map(product => {
                        return (
                            <li key={product.id}>
                                <Card name={product.title} price={product.price} image={product.image}/>
                            </li>
                        )
                    }) : <Categories/>);
                })
            })
    }, [productType]);

    return (
        <div>
            <Header/>
            <h2>Browse {productType ? productType : 'All'} Products</h2>
            <ul id="product-list">
                {productCards}
            </ul>
        </div>
    )   
}

export default Shop;