import React, { useState, useReducer } from 'react';
import ShopContext from './shop-context';
import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT, ADD_LIST } from './reducers';
import { PRODUCTS } from "../constants/product"


const GlobalState = props => {
  const products = PRODUCTS;
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [
    {
        id:0,
        name:'List-1',
        products:[
            {
                id: 1,
                name: "Acrylic Sweater",
                brand: "Levis",
                price: 900,
                img: "https://assets.myntassets.com/f_webp,dpr_2.0,q_60,w_210,c_limit,fl_progressive/assets/images/5447331/2018/10/24/3b25603a-b262-4b77-a61b-41a57097b35b1540368515667-Roadster-Women-Teal-Green-Ribbed-Pullover-7771540368515442-1.jpg"
            }
        ]
    }
  ] });

  const addProductToCart = (wishlistId,product) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product, wishlistId:wishlistId });
    }, 700);
  };

  const removeProductFromCart = (wishlistId,productId) => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId, wishlistId:wishlistId });
    }, 700);
  };

  const createList = listName => {
    setTimeout(() => {
        // setCart(updatedCart);
        dispatch({ type: ADD_LIST , listName: listName });
      }, 700);
  }

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart,
        createList:createList
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;