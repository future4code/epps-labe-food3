import React, { useContext, createContext, useState } from "react";

const CartCtx = createContext();

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState("");
  return (
    <CartCtx.Provider value={{ products, setProducts, payment, setPayment }}>
      {children}
    </CartCtx.Provider>
  );
}

export const useCartCtx = () => {
  const context = useContext(CartCtx);
  const { products, setProducts, payment, setPayment } = context;

  const addCart = (newPdt) => {
    
    products.forEach((pdt) => {
      if (pdt === newPdt) {
        pdt.quantity += newPdt.quantity;
      }
    });

    setProducts(products);
    console.log(products);
  };

  return { products, setProducts, payment, setPayment, addCart };
};
