// Root.js - heart of the app

// Libraries
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Main
class Root extends Component {

  // Main Render
  render() {
    return (
      <View style={styles.container}>
        <Text>Running from 'src/Root'!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Root;
