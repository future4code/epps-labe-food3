import "./App.css";
import RestaurantsProvider from "./Contexts/RestaurantsCtx";
import CartProvider from "./Contexts/CartCtx";
import React from "react";
import Router from "./Routes/Router";

function App() {
  return (
    <div>
      <CartProvider>
        <RestaurantsProvider>
          <Router />
        </RestaurantsProvider>
      </CartProvider>
    </div>
  );
}

export default App;
