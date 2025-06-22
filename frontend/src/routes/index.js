import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import LoggedInLayout from "../layout";
import Login from "../pages/Login/";
import Signup from "../pages/Signup/";
import Users from "../pages/Users";
import Companies from "../pages/Companies";
import { AuthProvider } from "../context/Auth/AuthContext";
import Route from "./Route";

const Routes = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <LoggedInLayout>
            <Route exact path="/users" component={Users} isPrivate />
            <Route exact path="/companies" component={Companies} isPrivate />
          </LoggedInLayout>
        </Switch>
        <ToastContainer autoClose={3000} />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
