import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Home from './src/screens/containers/home';
import ListProducts from './src/screens/containers/listProducts';
import Product from './src/screens/containers/product';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
});
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: TabNavigator,
    },
    ListProducts: {
      screen: ListProducts,
    },
    Product: {
      screen: Product,
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerTitle: 'Mascotienda',
      headerBackTitle: 'atras',
      headerStyle: {backgroundColor: '#36A9E1'},
      headerTintColor: '#F0FAFF',
      headerTitleStyle: {fontSize: 24, fontWeight: 'bold'},
    },
  },
);

export default createAppContainer(AppNavigator);
