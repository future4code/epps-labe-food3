import React from "react";
import './App.css';
import RestaurantsProvider from "./Contexts/RestaurantsCtx";
import React, { useEffect, useState } from "react";
import Router from './Routes/Router';


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
