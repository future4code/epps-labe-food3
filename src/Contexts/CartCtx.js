import React, { useContext, createContext, useState } from "react";

const CartCtx = createContext();

export default function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [payment, setPayment] = useState("");
  return (
    <CartCtx.Provider
      value={{ products, setProducts, payment, setPayment }}
    >
      {children}
    </CartCtx.Provider>
  );
}

export const useCartCtx = () => {
  const context = useContext(CartCtx);
  const { products, setProducts, payment, setPayment } = context;

  const addCart = (pdt) => {
    setProducts([
      ...products,
      {
        id: pdt.id,
        quantity: pdt.quantity,
        photoUrl: pdt.photoUrl,
        price: pdt.price,
        description: pdt.description,
        name: pdt.name
      },
    ]);
    console.log(products);
  };

  return { products, setProducts, payment, setPayment, addCart };
};
