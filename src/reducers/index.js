import {combineReducers} from 'redux';

import PriceReducer from './priceReducer';
import ShopsReducer from './shopReducer';

export default combineReducers({
  PriceReducer,
  ShopsReducer,
});
