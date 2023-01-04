import Header from './Header';
import React, { useState, useEffect } from 'react';
import electronics from '../images/electronics.png';
import tshirt from '../images/tshirt.png';
import dress from '../images/dress.png';
import jewelry from '../images/jewelry.png';
import { Link } from 'react-router-dom';
import Categories from './Categories';

const Homepage = () => {
    const [products, setProducts] = useState([]);
    // fetch('https://fakestoreapi.com/products/category/electronics')
    // .then(res => res.json())
    // .then(json => {
    //     setProducts(json);
    //     console.log(products);
    // });

    
    const [productsList, setProductsList] = useState([]);
    useEffect(() => {
        fetch('https://fakestoreapi.com/products/categories')
        .then(res => res.json())
        .then(json => {
            setProductsList(json);
            console.log(json);
        });
    }, [])

    return (
        <div id="homepage">
            <Header/>
            <Categories/>
            {/* <Shop productList={products}/> */}
        </div>
    )
}

export default Homepage;