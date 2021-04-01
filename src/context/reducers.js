export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const ADD_LIST = 'ADD_LIST';


const addProductToCart = (wishlistId, product, state) => {
    const updatedCart = [...state.cart];
    const updatedWishlist = updatedCart.find(
        item => item.id === wishlistId
    );

    const products = updatedWishlist.products;
    products.unshift(product);
    updatedWishlist.products = products;

    updatedCart[updatedWishlist.id] = updatedWishlist;

    // if (updatedItemIndex < 0) {
    //     updatedCart.push({...product, quantity: 1 });
    // } else {
    //     const updatedItem = {
    //         ...updatedCart[updatedItemIndex]
    //     };
    //     updatedItem.quantity++;
    //     updatedCart[updatedItemIndex] = updatedItem;
    // }
    return {...state, cart: updatedCart };
};

const removeProductFromCart = (wishlistId, productId, state) => {
    const updatedCart = [...state.cart];
    const updatedWishlist = updatedCart.find(
        item => item.id == wishlistId
    );

    let products=updatedWishlist.products;
    const index = updatedWishlist.products.findIndex(item=> item.id===productId);
    products.splice(index, 1);
    updatedWishlist.products = products;

    updatedCart[updatedWishlist.id] = updatedWishlist;

    // const updatedItemIndex = updatedCart.findIndex(item => item.id === productId);

    // const updatedItem = {
    //     ...updatedCart[updatedItemIndex]
    // };
    // updatedItem.quantity--;
    // if (updatedItem.quantity <= 0) {
    //     updatedCart.splice(updatedItemIndex, 1);
    // } else {
    //     updatedCart[updatedItemIndex] = updatedItem;
    // }
    return {...state, cart: updatedCart };

};

const createList = (listName, state) => {
    let id = state.cart.length;
    let cart = state.cart;
    let obj = {
        id: id,
        name: listName,
        products: []
    };
    cart.push(obj);
    return {...state, cart };
}

export const shopReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return addProductToCart(action.wishlistId, action.product, state);
        case REMOVE_PRODUCT:
            return removeProductFromCart(action.wishlistId, action.productId, state);
        case ADD_LIST:
            return createList(action.listName, state);
        default:
            return state;
    }
};