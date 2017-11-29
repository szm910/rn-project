import React, { Component } from 'react'
import { AppRegistry, View, TextInput, Text, StyleSheet, Image, PixelRatio, Dimensions } from 'react-native'

export default class RightArrow extends Component{
    
    render() {
        return (
            <View style={styles.rightArrow}>
                <Image source={require('../../img/rightarrow.png')} style={styles.arrowimage} />
            </View>
        );
    }
}
const styles=StyleSheet.create({
    rightArrow:{  
        paddingLeft:10,
        marginBottom:10
    },
    arrowimage: {
        width: 20,
        height: 20,
        backgroundColor: '#FFF',
        borderRadius: 19,
    },
})