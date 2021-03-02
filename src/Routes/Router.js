import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Address from "../Pages/Address/Address";
import Home from "../Pages/Home/Home";
import RestaurantPage from "../Pages/Restaurant";

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
        <Route exact path="/restaurant">
          <RestaurantPage />
        </Route>
        <Route exact path="/home">
          <Home />
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
