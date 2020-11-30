import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function ListProductsLayout(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

export default ListProductsLayout;
