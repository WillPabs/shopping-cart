import React, { useState, useEffect } from 'react';
import electronics from '../images/electronics.png';
import tshirt from '../images/tshirt.png';
import dress from '../images/dress.png';
import jewelry from '../images/jewelry.png';
import { Link } from 'react-router-dom';

const Categories = () => {
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
        <ul className='categories'>
            {productsList.map(product => {
                let link;
                console.log(electronics);
                if (product === 'electronics') link = electronics
                else if (product === "men's clothing") link = tshirt
                else if (product === "women's clothing") link = dress
                else if (product === "jewelery") link = jewelry;

                return (
                    <li>
                        <Link to={`/shop/${product}`} key={product} style={{width:80}}>
                            <img style={{width:80}} src={link} alt={product} />
                            <h3>{product}</h3>
                            {/* <p>{product.price}</p> */}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Categories;