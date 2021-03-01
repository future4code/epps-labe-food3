import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>
                <Route exact path="/create">
                    <SignUp/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}
  