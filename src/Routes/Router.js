import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../Pages/Login/Login";

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <LoginPage/>
                </Route>    
            </Switch>
        </BrowserRouter>
    );
}
  