import { useContext, useEffect, useState } from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';
import { CartHooks } from "../../hooks/CartHooks";

function Cart() {

    const { cart, incrementQuantity, decrementQuantity, removeItem, message } = CartHooks();

    const renderElements = cart.map((item => {

        return (<div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded" key={item.product.id}>
            <div className="text-center mr-1">
                <Link to={"/products/" + item.product.id}>  <img className="rounded" src={item.product.image} width="70" /></Link>
                <span>${item.product.price.toFixed(2)}</span>
            </div>
            <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{item.product.title}</span>
                <div className="d-flex flex-row product-desc m-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo neque fugiat dolore aperiam quis nesciunt officia. Laboriosam amet atque suscipit! Consequatur eum amet reiciendis. Dolorum pariatur non inventore aspernatur consequatur.
                </div>
            </div>
            <div className="d-flex flex-row align-items-center">
                <div className="input-group">
                    <span className="input-group-btn">
                        <button type="button" className="quantity-right-plus btn" onClick={() => incrementQuantity(item.product.id)}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                    </span>
                    <input type="text" className="form-control" min={1} step={1} value={item.quantity || 1} readOnly style={{ width: "10px" }} />
                    <span className="input-group-btn">
                        <button type="button" className="quantity-left-minus btn" onClick={() => decrementQuantity(item.product.id)}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </span>
                </div>
            </div>
            <button className='btn p-2' onClick={() => removeItem(item.product.id)}><i className="fa fa-trash mb-1 text-danger"></i></button>
        </div>)

    }));

    return (
        <div className="container mt-5 mb-5">
            <div className="d-flex justify-content-center row">
                <div className="col-md-8">
                    <div className="p-2">
                        <h3>Shopping cart</h3>
                        <h4>{message}</h4>
                    </div>
                    {renderElements}
                </div>
            </div>
        </div>
    );

}

export default Cart;