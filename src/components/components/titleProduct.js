import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

function TitleProduct(props) {
  return (
    <TouchableOpacity onPress={props.handlePressTitle}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#5B7080',
    marginBottom: 10,
  },
});

export default TitleProduct;
