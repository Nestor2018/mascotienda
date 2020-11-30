import React, {Fragment} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

function CardProduct(props) {
  return (
    <TouchableOpacity
      onPress={props.handleOnPressCard}
      style={styles.container}>
      <View style={styles.containerImage}>
        <Image source={{uri: props.image}} style={styles.imageCard} />
      </View>
      <View style={styles.containerText}>
        <Text style={styles.titleProducts}>{props.title}</Text>
        <Text style={styles.price}>$ {props.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
    height: 150,
    width: '45%',
    marginHorizontal: '2.5%',
    marginBottom: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    marginTop: 10,
  },
  containerImage: {
    marginTop: 10,
    flex: 1,
  },
  imageCard: {
    height: '100%',
    width: '50%',
    resizeMode: 'cover',
    alignSelf: 'center',
  },
  containerText: {
    flex: 2,
    marginHorizontal: 10,
    position: 'relative',
  },
  titleProducts: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000744',
    marginVertical: 10,
  },
  price: {
    fontSize: 16,
    color: '#59b56e',
    marginTop: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default CardProduct;
