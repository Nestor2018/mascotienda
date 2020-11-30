import {GET_SHOPS} from '../types/constTypes';

import {getShops} from '../requests/requests';

export const traerShops = () => async dispatch => {
  await getShops()
    .then(data => {
      dispatch({
        type: GET_SHOPS,
        payload: data.tiendas,
      });
    })
    .catch(err => {
      console.log(err);
    });
};
