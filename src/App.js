import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import List from "./pages/List";
import Wishlist from "./pages/Wishlist";
import GlobalState from "./context/GlobalState";
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./pages/Login";
import Categories from "./pages/Categories";
import Studio from "./pages/Studio"


function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Categories} exact />
          <Route path="/categories" component={Categories} exact />
          <Route path="/cart" component={Wishlist} exact />
          <Route path="/cart/:id" component={List} exact />
          <Route path="/studio" component={Studio} exact />
          <Route path="/login" component={Login} exact />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
