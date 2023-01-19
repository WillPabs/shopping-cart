import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";
import Cart from "./Cart";
import Categories from "./Categories";
import Header from "./Nav";

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
                                <Card product={product}/>
                            </li>
                        )
                    }) : <Categories/>);
                })
            })
    }, [productType]);

    return (
        <div>
            <Header/>
            <Cart/>
            <h2>Browse {productType ? productType : 'All'} Products</h2>
            <ul id="product-list">
                {productCards}
            </ul>
        </div>
    )   
}

export default Shop;