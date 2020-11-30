import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../components/productLayout';
import ButtonCart from '../../components/components/buttonCart';
import { priceAction } from '../../actions';

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contador: 1,
			price: 1700,
			total: 0
		};
		this.state.total = this.state.price;
		console.log(this.props.priceAction);
	}

	UNSAFE_componentWillMount() {}
	handlePressAddShop = () => {
		this.props.priceAction(this.state.total);
		this.props.navigation.navigate('ListProducts');
	};

	handlePressAdd = () => {
		this.setState({
			contador: this.state.contador + 1,
			total: this.state.total + this.state.price
		});
	};

	handlePressRemove = () => {
		this.state.contador === 1
			? (this.state.contador = 1)
			: this.setState({
					contador: this.state.contador - 1,
					total: this.state.total - this.state.price
				});

		/* this.props.price(this.state.total); */
	};
	render() {
		return (
			<Layout
				total={this.state.total}
				contador={this.state.contador}
				handlePressAddPrice={this.handlePressAdd}
				handlePressRemovePrice={this.handlePressRemove}
			>
				<ButtonCart
					title="AGREGAR A MI PEDIDO"
					handlePressShopCart={this.handlePressAddShop}
					total={this.state.total}
				/>
			</Layout>
		);
	}
}

const mapStateToProps = ({ PriceReducer }) => {
	return PriceReducer;
};

const mapDispatchProps = {
	priceAction
};

export default connect(mapStateToProps, mapDispatchProps)(Product);
