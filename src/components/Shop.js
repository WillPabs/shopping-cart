import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card";

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
    }) : <div>No Products</div>;

    return (
        // if productlist is empty then we display the list of categories to choose from
        // otherwise we display the productslist
        <div>
            <h2>Browse {productType} Products</h2>
            <ul id="product-list">
                {console.log(products)}
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