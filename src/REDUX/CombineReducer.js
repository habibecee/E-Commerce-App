import { combineReducers } from "redux";
import cartReducer from "./REDUCERS/CART REDUCER/cartReducer";
import TokenReducer from "./REDUCERS/TOKEN REDUCER/TokenReducer";

const ReducersContainer = {
	TokenState: TokenReducer,
	cartState: cartReducer,
};

const CombineReducer = combineReducers(ReducersContainer);

export default CombineReducer;
