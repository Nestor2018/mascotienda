import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function ButtonCart(props) {
  return (
    <TouchableOpacity
      style={styles.containerShopCard}
      onPress={props.handlePressShopCart}>
      <Text style={styles.textShopCard}>
        {props.title} ${props.total}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerShopCard: {
    backgroundColor: '#36A8E0',
  },
  textShopCard: {
    textAlign: 'center',
    paddingVertical: 20,
    fontSize: 20,
    color: '#F0FAFF',
    fontWeight: 'bold',
  },
});

export default ButtonCart;
