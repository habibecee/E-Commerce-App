const initialState = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: null;

export const SET_CART = "SET_CART";
export const REMOVE_CART = "REMOVE_CART";
// export const SET_CART_ITEMS = "SET_CART_ITEMS";

const cartReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_CART":
			const stateData = {
				...action.payload,
				items: action.payload.items,
				itemsCount: action.payload.items.length,
			};
			localStorage.setItem("cart", JSON.stringify(stateData));
			return stateData;

		case "REMOVE_CART":
			localStorage.removeItem("cart");
			return null;

		// case "SET_CART_ITEMS":
		// 	return {
		// 		...state,
		// 		items: action.payload.items,
		// 		itemsCount: action.payload.items.length,
		// 	};

		default:
			return state;
	}
};

export default cartReducer;
