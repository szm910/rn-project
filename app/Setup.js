/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';
import ScrollViewSimple from "./simple/ScrollViewSimple";
import FlatListBasics from "./simple/FlatListBasics";


export default class Setup extends Component {
  render() {
    return (
      <View>
         <ScrollViewSimple></ScrollViewSimple>
      </View>
    );
  }
}
