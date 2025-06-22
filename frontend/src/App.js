import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute exact path="/" component={Dashboard} />
      </Switch>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
