import { combineReducers } from "redux";

import categoriesReducers from "./categories.reducers";
import productsReducers from "./products.reducers";

const rootReducer = combineReducers({
	categories: categoriesReducers,
	products: productsReducers,
});

export default rootReducer;
