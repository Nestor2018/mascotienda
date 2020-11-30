import { PRICE, PRICE_TOTAL } from '../types/constTypes';

const INITIAL_STATE = {
	total: []
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PRICE:
			return { ...state, total: +action.payload };
		case PRICE_TOTAL:
			return { ...state, total: +action.payload };
		default:
			return state;
	}
};
