import Header from './Header';
import Shop from './Shop';
import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [products, setProducts] = useState([]);

    fetch('https://fakestoreapi.com/products/category/electronics')
    .then(res => res.json())
    .then(json => {
        setProducts(json);
        console.log(products);
    });

    const [productsList, setProductsList] = useState([]);
    fetch('https://fakestoreapi.com/products/categories')
        .then(res => {
            const json = res.json();
            setProductsList(json);
        })
    console.log(productsList);

    return (
        <div id="homepage">
            <Header/>
            <div>
                {productsList}
            </div>
            <Shop productList={products}/>
        </div>
    )
}

export default Homepage;