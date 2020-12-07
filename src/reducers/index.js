import { combineReducers } from "redux";
import categoriesReducers from "./categories.reducers";

const rootReducer = combineReducers({
	categories: categoriesReducers,
});

export default rootReducer;
