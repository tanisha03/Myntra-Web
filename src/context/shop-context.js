import React from 'react';
import { PRODUCTS } from "../constants/product"

export default React.createContext({
    products: [],
    cart: [],
    addProductToCart: (wishlistId, product) => {},
    removeProductFromCart: (wishlistId,productId) => {},
    createList: listName => {}
});