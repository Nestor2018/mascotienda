import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import { getProducts } from '../../requests/requests';

import TitlesProduct from '../../components/containers/titlesProducts';
import Layout from '../components/listProductsLayout';
import ButtonCart from '../../components/components/buttonCart';

class ListProducts extends Component {
	state = {
		titles: []
	};

	componentDidMount() {
		this.loadProducts();
	}

	async loadProducts() {
		await getProducts().then((data) => {
			console.log(data);
			this.setState({
				titles: data.originals
			});
		});
	}

	handleGoCart = () => {
		this.props.navigation.navigate('Product');
	};

	render() {
		return (
			<Layout>
				<FlatList
					data={this.state.titles}
					initialNumToRender={4}
					bounces={false}
					numColumns={1}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item }) => <TitlesProduct title={item.title} handleGoCart={this.handleGoCart} />}
					ListEmptyComponent={() => <Text>lista vacia</Text>}
				/>
				<ButtonCart title="VER MI PEDIDO" total={this.props.total} />
			</Layout>
		);
	}
}

const mapStateToProps = ({ PriceReducer }) => {
	return PriceReducer;
};

export default connect(mapStateToProps)(ListProducts);
