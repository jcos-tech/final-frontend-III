import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const CartHooks = () => {
    const { cart, setCart } = useContext(CartContext);
    const [message, setMessage] = useState("");

    const incrementQuantity = (id) => {
        setCart((prevItems) =>
            prevItems.map((item) =>
                item.product.id === id &&  (item.quantity < item.product.rating.count)
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decrementQuantity = (id) => {
        setCart((prevItems) =>
            prevItems
                .map((item) => {
                    if (item.product.id === id) {
                        return { ...item, quantity: item.quantity - 1 };
                    }
                    return item;
                })
                .filter((item) => item.quantity > 0)
        );
    };

    const removeItem = (id) => {
        setCart((prevItems) =>
            prevItems.filter((item) => item.product.id !== id)
        );
    };

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(cart));
        if (cart.length === 0) {
            setMessage("Cart Empty");
        }

    }, [cart]);

    return { cart, incrementQuantity, decrementQuantity, removeItem, message };
};