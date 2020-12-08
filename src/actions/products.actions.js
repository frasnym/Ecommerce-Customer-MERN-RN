import axios from "../helpers/axios";
import { productsConstants } from "./constants";

export const getProductsBySlug = (slug) => {
	return async (dispatch) => {
		const res = await axios.get(`/products/${slug}`);

		if (res.status === 200) {
			console.log(res.data.data);
			dispatch({
				type: productsConstants.GET_PRODUCTS_BY_SLUG_SUCCESS,
				payload: res.data.data,
			});
		} else {
			// dispatch({
			// 	type: productsConstants.GET_PRODUCTS_BY_SLUG_SUCCESS,
			// 	payload: res.data.data,
			// });
		}
	};
};
