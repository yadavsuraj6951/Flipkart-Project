import axios from "axios";
import * as actionType from '../constants/cartConstants';

const URL = 'http://localhost:4000'
export const addToCart = (id, quantity) => async(dispatch) => {
    try{
       const { data } = await axios.get(`${URL}/products/${id}`);

       dispatch({ type: actionType.ADD_TO_CART, payload: { ...data, quantity }});
    }catch (error) {
       dispatch({ type: actionType.ADD_TO_CART_ERROR, payload: error.message }); 
    }
}

export const removeFromCart = (id) => (dispatch) => {
      dispatch({ type: actionType.REMOVE_FROM_CART, payload: id });
}

export const updateCartQuantity = (id, quantity) => {
   return {
       type: "UPDATE_CART_QUANTITY",
       payload: { id, quantity }
   };
};

export const clearCart = () => {
   return {
       type: "CLEAR_CART"
   };
};


