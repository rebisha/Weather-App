import React from 'react';
import { Switch, Route } from "react-router-dom";
import Header from "./Component/Header/Header";


import "./App.css";

function App() {

  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/checkout">
          <h1>Checkout Page</h1>
        </Route>
        <Route path="/login">
          <h1>Login Page</h1>
        </Route>
        <Route path="/">
          <h1>Home page</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
