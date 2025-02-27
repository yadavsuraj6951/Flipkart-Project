
import * as actionType from '../constants/cartConstants';


export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionType.ADD_TO_CART:
          return { ...state, cartItems: [...state.cartItems, action.payload] };

    case actionType.REMOVE_FROM_CART:
          return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload) };

      case "UPDATE_CART_QUANTITY":
          return {
              ...state,
              cartItems: state.cartItems.map(item =>
                  item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
              )
          };

          //---------------------------------------------------------------------------------------------
          case "CLEAR_CART":
            return { ...state, cartItems: [] };

      default:
          return state;
  }
};




