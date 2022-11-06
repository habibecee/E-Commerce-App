import { combineReducers } from "redux";
import TokenReducer from "./REDUCERS/TOKEN REDUCER/TokenReducer";

const ReducersContainer = {
	TokenState: TokenReducer,
};

const CombineReducer = combineReducers(ReducersContainer);

export default CombineReducer;
