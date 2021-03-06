import React from "react";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import CollectionItem from "./components/collection-item/collection-item.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
