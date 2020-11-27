import { CART_ADD_ITEM } from "../constants/CartConstants";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload; /*item that is gonna be added to cart */
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        /*if item existed in cartItem we push previous states and we just update item existed */
        return {
          ...state,
          cartItems: state.cartItems.map(
            (x) =>
              x.product === existItem.product
                ? item
                : x /*find that productId and replace it */
          ),
        };
      } else {
        /*product is fully new! we just add it to our cartItems*/
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    default:
      return state;
  }
};
