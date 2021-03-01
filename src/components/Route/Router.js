import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Login/Login";
import Home from "../../pages/home/Home";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
