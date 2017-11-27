import React, { Component } from 'react'
import { AppRegistry, View, TextInput, Text, StyleSheet, Image, PixelRatio, Dimensions } from 'react-native'
import BaseComponent from './BaseComponent';

var screenWidth = Dimensions.get('window').width;

export default class TextTipsWidget extends BaseComponent {
    render() {
        return (
            <View style={styles.rowContainer}>
                <View style={styles.row}>
                    <Text
                        numberOfLines={1}
                        style={styles.textInputTitle} >
                        {this.props.title}
                    </Text>
                    <View style={styles.textImage}>
                        <Image source={require('../../img/timg.jpeg')} style={styles.image} />
                    </View>
                    <View style={styles.rightArrow}>
                        <Image source={require('../../img/rightarrow.png')} style={styles.arrowimage} />
                    </View>
                </View>
            </View>
        );
    }
}