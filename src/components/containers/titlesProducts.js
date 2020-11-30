import React, {Component} from 'react';
import {FlatList} from 'react-native';

import {getProducts} from '../../requests/requests';
import CardProduct from '../components/cardProduct';
import Layout from '../components/titlesProductsLayout';
import TitleProduct from '../components/titleProduct';

class TitlesProduct extends Component {
  state = {
    products: [],
    lent: [],
  };

  async loadProduts() {
    await getProducts().then(response => {
      this.setState({
        products: response.alimentos,
      });
    });
  }

  deleteData = () => {
    this.setState({
      products: [],
    });
  };

  handlePressData = () => {
    if (this.state.products.length === 0) {
      this.loadProduts();
    } else {
      this.deleteData();
    }
  };

  handleGoCart = () => {
    this.props.navigation.navigate('Product');
  };

  render() {
    return (
      <Layout>
        <TitleProduct
          title={this.props.title}
          handlePressTitle={this.handlePressData}
        />
        <FlatList
          data={this.state.products}
          numColumns={2}
          renderItem={({item}) => (
            <CardProduct
              image={item.image}
              price={item.price}
              title={item.title}
              handleOnPressCard={this.props.handleGoCart}
            />
          )}
        />
      </Layout>
    );
  }
}

export default TitlesProduct;
