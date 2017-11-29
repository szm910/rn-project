
import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, PixelRatio, Dimensions } from 'react-native'


var screenWidth = Dimensions.get('window').width;

export default class TextTips{
    render() {
        return (
            <View >
                <Text style={styles.textTips}>{this.props.tips}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textTips: {
        marginBottom: 15,
        color: '#ccc'
    }
}); 
