import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Profile/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Address from "../Pages/Profile/Address/Address";
import Home from "../Pages/Home/Home";
import RestaurantPage from "../Pages/Restaurant";
import Profile from '../Pages/Profile/MyProfile/MyProfile';
import { CartPage } from "../Pages/Cart";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/create">
          <SignUp />
        </Route>
        <Route exact path="/address">
          <Address />
        </Route>
        <Route exact path="/restaurant/:id">
          <RestaurantPage />
        </Route>
        <Route exact path="/cart">
          <CartPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        
        
        <Route exact path="/profile">
          <Profile/>
        </Route>
        
        <Route> 
          <div>
            Error 404 - Page not found
          </div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
