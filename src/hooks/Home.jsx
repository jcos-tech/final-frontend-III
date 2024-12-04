import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const HomeHooks = () => {

    const { cart, setCart } = useContext(CartContext);

    const handleAddCart = (id) => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setCart(prevCart => {
                    const productIndex = prevCart.findIndex(item => item.product.id === data.id);

                    if (productIndex !== -1) {
                        const updatedCart = [...prevCart];

                        if (updatedCart[productIndex].quantity < updatedCart[productIndex].product.rating.count) {
                            updatedCart[productIndex].quantity += 1;
                        }

                        return updatedCart;
                    } else {
                        return [...prevCart, { quantity: 1, product: data }];
                    }
                })
            });
    };

    return { cart, handleAddCart };
};