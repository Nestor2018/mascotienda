import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Loading from './src/components/components/loading';

import Navigator from './navigator';
import { store, persistor } from './store';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<PersistGate loading={<Loading />} persistor={persistor}>
					<Navigator />
				</PersistGate>
			</Provider>
		);
	}
}

export default App;
