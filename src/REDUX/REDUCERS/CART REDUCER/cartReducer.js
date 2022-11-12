const initialState = null;

export const SET_CART = "SET_CART";
export const REMOVE_CART = "REMOVE_CART";
export const SET_CART_ITEMS = "SET_CART_ITEMS";

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CART":
			return action.payload;

		case "REMOVE_CART":
			return null;

		case "SET_CART_ITEMS":
			return {
				...state,
				items: action.payload.items,
				itemsTotal: action.payload.items.length,
			};

		default:
			return state;
	}
};

export default cartReducer;
