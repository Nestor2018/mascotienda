import {createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import rootReducer from './src/reducers';

/* const store = createStore(rootReducer, {}, applyMiddleware(reduxThunk)); */

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(reduxThunk));
const persistor = persistStore(store);

export {store, persistor};
