import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/CartConstants";

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product:
        data._id /*product will contain productId and we will add this to database */,
      qty,
    },
  });
  localStorage.setItem("CartItems",JSON.stringify(getState().cart.cartItems));
};