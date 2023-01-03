import Header from './Header';
import Shop from './Shop';
import React, { useState, useEffect } from 'react';
import electronics from '../images/electronics.png';
import tshirt from '../images/tshirt.png';
import dress from '../images/dress.png';
import jewelry from '../images/jewelry.png';

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
        // fetch('https://fakestoreapi.com/products/categories')
        // .then(res => {
        //     const json = res.json();
        //         setProductsList(json);
        //     })
        // console.log(productsList);

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
            <div>
                {productsList.map(product => {
                    let link;
                    console.log(electronics);
                    if (product === 'electronics') link = electronics
                    else if (product === "men's clothing") link = tshirt
                    else if (product === "women's clothing") link = dress
                    else if (product === "jewelry") link = jewelry;

                    return (
                        <div key={product} style={{width:80}}>
                            <h3>{product}</h3>
                            <img style={{}} src={link} alt={product} />
                            {/* <p>{product.price}</p> */}
                        </div>
                    )
                })}
            </div>
            {/* <Shop productList={products}/> */}
        </div>
    )
}

export default Homepage;