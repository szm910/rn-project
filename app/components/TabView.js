'use strict';

import React, { Component } from 'react'
import {
    Text,
    Dimensions,
    StyleSheet,
    Image
} from 'react-native'
import { TabNavigator } from 'react-navigation'
let { width, height } = Dimensions.get('window')
import ListUserInfo from '../page/ListUserInfo'
import UserInfo from '../page/UserInfo'

class HomePage extends React.Component {
    static navigationOptions = {
         tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/icon/email.png')}
                style={[styles.tabbar, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <ListUserInfo navigation={this.props.navigation} />
        );
    }
}

class DetailPage extends React.Component {
    static navigationOptions = {
         tabBarLabel: 'Notifications',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../../img/icon/email.png')}
                style={[styles.tabbar, { tintColor: tintColor }]}
            />
        ),
    };

    render() {
        return (
            <UserInfo navigation={this.props.navigation} />
        );
    }
}
const navRouter = {
    Home: {
        screen: HomePage,
    },
    Detail: {
        screen: DetailPage,
    },
}
const navConfig = {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        showLabel:false,
        showIcon: true,
        labelStyle: {
            fontSize: 12,
        },
        tabStyle: {
            width: 20,
        },
        style:{
            backgroundColor: '#fff',
        },
        activeTintColor: '#3496f0',
        inactiveTintColor: '#666'
    }
}
const styles = StyleSheet.create({
    tabbar: {
        height: 20,
        width: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    hide: {
        transform: [
            { translateX: width }
        ]
    },
    tabStyle: {
        padding: 10
    }
})


const TabNavigation = TabNavigator(navRouter, navConfig);

export default class TabView extends Component {
    render() {
        return (
            <TabNavigation />
        )
    }
}

