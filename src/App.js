import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import List from "./pages/List";
import Wishlist from "./pages/Wishlist";
import GlobalState from "./context/GlobalState";

export const WishlistContext = React.createContext();

const wishlist = [
  {
    id:1,
    items:[{
      id:1,
      name:"Hello"
    }]
  }
]

function App() {
  return (
    <GlobalState>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/cart" component={Wishlist} exact />
          <Route path="/cart/:id" component={List} exact />
        </Switch>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;
