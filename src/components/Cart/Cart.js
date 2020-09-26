import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total + Number(tax)).toFixed(2);
    return (
        <div className=" m-5">
            <h2 className="text-warning bg-secondary py-2 px-2"> Order Summary</h2>
            <h5 className="pl-5">Course Ordered: {cart.length}</h5>
            <div className="pl-3">
                <p className="mt-4"><strong>Course Price:</strong> {(total*1).toFixed(1)}</p>
                <p><small> <strong>Tax+Vat: </strong>{tax}</small></p>
                <p><strong>Total Price: </strong> {grandTotal}</p>
            </div>
        </div>
    );
};

export default Cart;