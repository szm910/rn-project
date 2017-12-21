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
  View,
  Dimensions
} from 'react-native';
import ListUserInfo from "./app/page/ListUserInfo";
import UserInfo from "./app/page/UserInfo";
import { StackNavigator } from 'react-navigation';
import TabView from './app/components/TabView'


class ListUserInfoRouter extends Component {
  static navigationOptions = {
    title: 'Home',
    header: null
  }
  render() {
    return <ListUserInfo navigation={this.props.navigation}/>
  }
}

class UserInfoRouter extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return <UserInfo navigation={this.props.navigation}/>
  }
};

const StackRouteConfigs = {
  ListUserInfo: { screen: ListUserInfoRouter },
  UserInfo: { screen: UserInfoRouter },
};

const StackNavigatorConfigs = {
  initialRouteName: 'ListUserInfo',
  navigationOptions: {
      title: '标题',
      headerStyle: {backgroundColor: '#5da8ff'},
      headerTitleStyle: {color: '#333333'},
  }
};

const Navigation = StackNavigator(StackRouteConfigs,StackNavigatorConfigs);


export default class App extends Component {
  render() {
    return <TabView />;
  }
}
