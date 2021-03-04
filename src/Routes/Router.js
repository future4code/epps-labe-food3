import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Address from "../Pages/Profile/Address/Address";
import Home from "../Pages/Home/Home";
import RestaurantPage from "../Pages/Restaurant";
import Profile from "../Pages/Profile/MyProfile/MyProfile";
import { CartPage } from "../Pages/Cart";
import EditProfile from "../Pages/Profile/MyProfile/EditProfile";
import EditAddres from "../Pages/Profile/MyProfile/EditAddres";
import Popup from "../components/RestaurantCard/Popup";
import Loading from "../Pages/Loading/Loading";


export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
      
        <Route exact path="/">
          <Loading />
        </Route>

        <Route exact path="/login">
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

        <Route exact path="/popup">
          <Popup />
        </Route>

        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/profile">
          <Profile />
        </Route>

        <Route exact path="/editProfile">
          <EditProfile />
        </Route>

        <Route exact path="/editAddress">
          <EditAddres />
        </Route>

        <Route>
          <div>Error 404 - Page not found</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
