import React, { useContext, createContext, useState } from "react";

const CartCtx = createContext();

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState("");
  return (
    <CartCtx.Provider
      value={{ products, setProdutcts: setProducts, payment, setPayment }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCartCtx = () => {
  const context = useContext(CartCtx);
  const { products, setProdutcts, payment, setPayment } = context;

  const addCart = (pdt) => {
    setProdutcts([...products, { id: pdt.id, quantity: pdt.quantity }]);
  };

  return { products, setProdutcts, payment, setPayment, addCart };
};
