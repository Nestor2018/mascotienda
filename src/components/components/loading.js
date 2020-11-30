import React from 'react';
import {View, Text, Image, StyleSheet, ActivityIndicator} from 'react-native';

function Loading(props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
      />
      <ActivityIndicator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#36A9E1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default Loading;
