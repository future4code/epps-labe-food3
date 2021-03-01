import React, { useContext, createContext, useState } from "react";

const RestaurantsCtx = createContext();

export default function RestaurantsProvider({ children }) {
  const [restaurants, setRestaurants] = useState([]);
  return (
    <RestaurantsCtx.Provider value={{ restaurants, setRestaurants }}>
      {children}
    </RestaurantsCtx.Provider>
  );
}

export function useRestaurants() {
  const context = useContext(RestaurantsCtx);
  const { restaurants, setRestaurants } = context;
  return { restaurants, setRestaurants };
}
