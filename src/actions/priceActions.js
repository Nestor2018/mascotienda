import { PRICE, PRICE_TOTAL } from '../types/constTypes';

export const priceAction = (payload) => (dispatch) => {
	dispatch({
		type: PRICE,
		payload
	});
};

export const priceTotalAction = (payload) => (dispatch) => {
	dispatch({
		type: PRICE_TOTAL,
		payload
	});
};
