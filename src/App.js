import React from "react";
import "./App.css";
import Router from "./components/Route/Router";
import RestaurantsProvider from "./Contexts/RestaurantsCtx";

function App() {
  return (
    <div>
      <RestaurantsProvider>
        <Router />
      </RestaurantsProvider>
    </div>
  );
}

export default App;
