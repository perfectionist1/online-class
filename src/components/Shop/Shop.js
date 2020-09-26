import React, { useState } from 'react';
import myData from './Data.json';
import './Shop.css';
import { Jumbotron, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button} from 'reactstrap';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const data = myData.slice(0, 15);
    //console.log(data);
    const [products, setProducts] = useState(data);
    const [cart, setCart] = useState([]);
    //console.log(products);

    const handleCart = (product) => {
        console.log('Product Added', product);
        const newCart = [...cart, product];
        setCart(newCart);
    };
    return (        
        <div className="shop-container">
            <div className="container-left">  
                <div className="d-flex justify-content-center m-3">
                    <h2 className="center">Total Course: {products.length}</h2>  
                </div>          
                                                 
                    <ul>
                        {
                            products.map(pd => <Product product={pd} handleCart={handleCart} key={pd.id}></Product>)
                        }
                    </ul>            
            </div>
            <div className="container-right ">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;