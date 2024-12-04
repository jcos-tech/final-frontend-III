import { useContext, useEffect, useState } from "react";
import { CartContext } from "../contexts/CartContext";

export const ProductHooks = (id) => {

    const [product, setProduct] = useState({});
    const { cart, setCart } = useContext(CartContext);

    useEffect(() => {
        const productDetail = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        productDetail();
    }, [id]);

    const handleCount = (id, quantity) => {
        for (let index = 0; index < cart.length; index++) {
            if (id == cart[index].product.id) {
                let result = quantity - cart[index].quantity;
                return (result) >= 0 ? result : 0;
            }
        }

        return quantity;

    };

    return { product, handleCount, cart };
};