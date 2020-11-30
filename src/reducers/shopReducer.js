import {GET_SHOPS} from '../types/constTypes';

const INITIAL_STATE = {
  shops: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SHOPS:
      return {...state, shops: action.payload};

    default:
      return state;
  }
};
