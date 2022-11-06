import { createStore } from "redux";

export const SET_TOKEN = "SET_TOKEN";

const token = localStorage.getItem("token");
const initialState = {
	token: token ? token : null,
};

const TokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SET_TOKEN":
			localStorage.setItem("token", action.payload.token);
			return {
				...state,
				token: action.payload.token,
			};

		case "REMOVE_TOKEN":
			localStorage.removeItem("token");
			return {
				...state,
				token: null,
			};

		default:
			return state;
	}
};

export default TokenReducer;
