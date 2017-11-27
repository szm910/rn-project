/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Setup from "./app/Setup";


export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Setup></Setup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    marginTop: 20, //去除状态栏图标  
    backgroundColor: 'gray'
  }
}); 

