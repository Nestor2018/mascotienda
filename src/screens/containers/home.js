import React, { Component, Fragment } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import CardShop from '../../components/cardShop';
import VerticalSeparator from '../../components/components/verticalSeparator';
import * as traerShops from '../../actions/index';

class Home extends Component {
	static navigationOptions = {
		headerTitle: 'Home'
	};

	itemSeparator = () => <VerticalSeparator />;

	UNSAFE_componentWillMount() {
		this.props.traerShops();
		console.log(JSON.stringify(this.props) + 'propiedades iniciales');
	}

	handlePressShopCart = () => {
		this.props.navigation.navigate('ListProducts');
	};

	render() {
		console.log(this.props);
		return (
			<Fragment>
				<FlatList
					data={this.props.shops}
					initialNumToRender={4}
					bounces={false}
					ItemSeparatorComponent={this.itemSeparator}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => (
						<CardShop
							handleonPressCard={this.handlePressShopCart}
							title={item.title}
							image={item.image}
							domicilio={item.domicilio}
							online={item.pay}
							barrio={item.barrio}
							direction={item.direccion}
							state={item.openClose}
						/>
					)}
					ListEmptyComponent={() => <Text>lista vacia</Text>}
				/>
			</Fragment>
		);
	}
}

const mapStateToProps = (reducers) => {
	return reducers.ShopsReducer;
};

export default connect(mapStateToProps, traerShops)(Home);
