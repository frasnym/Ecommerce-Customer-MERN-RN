import { productsConstants } from "../actions/constants";

const initState = {
	products: [],
	productsByPrice: {
		under20m: [],
		under15m: [],
		under10m: [],
	},
	loading: false,
	error: null,
};

const productsReducers = (state = initState, action) => {
	switch (action.type) {
		case productsConstants.GET_PRODUCTS_BY_SLUG_SUCCESS:
			console.log(action.payload.products);
			state = {
				...state,
				loading: false,
				products: action.payload.products,
				productsByPrice: {
					...action.payload.productsByPrice,
				},
			};
			break;

		default:
			break;
	}

	return state;
};

export default productsReducers;
