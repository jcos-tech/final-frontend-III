import { useContext, useEffect, useState } from "react";
import Star from "../Star";
import styles from './Card.module.css';
import clsx from 'clsx';
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";

function Card({ id, image, title, price, description, rating, handleAddCart }) {

    const { cart, setCart } = useContext(CartContext);

    const handleCount = (id, quantity) => {
        for (let index = 0; index < cart.length; index++) {
            if (id == cart[index].product.id) {
                let result = quantity - cart[index].quantity;
                return (result) >= 0 ? result : 0;
            }
        }

        return quantity;

    };

    const [count, setCount] = useState(handleCount(id, rating.count));

    useEffect(() => {
        setCount(handleCount(id, rating.count));
    }, [cart])

    return (
        <div className="col mb-5">
            <div className="card h-100">

                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{count}</div>

                <Link to={"/products/" + id}> <img className="card-img-top" src={image} alt="..." /></Link>

                <div className="card-body p-4">
                    <div className="text-center">

                        <h5 className="fw-bolder">{title}</h5>
                        <Star id_card={id} rating={rating}></Star>
                        <span>${price} </span>

                        <p className="mt-2">{description}</p>
                    </div>
                </div>

                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className={clsx(styles.containerButton, 'text-center')}>
                        <button className="btn btn-outline-dark  btn-danger text-white mt-auto" onClick={() => { handleAddCart(id); }}>
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;