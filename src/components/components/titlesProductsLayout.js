import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function TitleProductLayout(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
  },
});

export default TitleProductLayout;
