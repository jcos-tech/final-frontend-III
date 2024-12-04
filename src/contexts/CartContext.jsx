import React, { createContext, useState, useEffect, useRef } from "react";
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const items = JSON.parse(localStorage.getItem("products"));
  const initialCart = items || [];

  const [cart, setCart] = useState(initialCart);

  const isFirstRender = useRef(true);

  useEffect(() => {

    localStorage.setItem("products", JSON.stringify(cart));

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Cart updated",
      showConfirmButton: false,
      timer: 1000
    });

  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};