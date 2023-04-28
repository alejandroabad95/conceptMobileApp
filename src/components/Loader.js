import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

const Loader = () => (
  <View style={[styles.container, styles.horizontal, styles.loader]}>
    <ActivityIndicator size="large" color="white" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',

  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  loader: {
    marginTop: 25,
  }
});

export default Loader;