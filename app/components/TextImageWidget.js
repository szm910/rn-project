import React, { Component } from 'react'
import { AppRegistry, View, TextInput, Text, StyleSheet, Image, PixelRatio,Dimensions } from 'react-native'
import BaseComponent from './BaseComponent';

var screenWidth=Dimensions.get('window').width;

export default class TextImageWidget extends BaseComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.rowContainer}   >
                <View style={styles.row}>
                    <Text
                        numberOfLines={1}
                        style={styles.textInputTitle} >
                        {this.props.title}
                    </Text>
                    <View style={styles.textImage}>
                        <Image source={require('../../img/timg.jpeg')} style={styles.image}/>
                    </View>
                    <View style={styles.rightArrow}>
                        <Image source={require('../../img/rightarrow.png')}  style={styles.arrowimage}/>
                    </View>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    rowContainer: {
        backgroundColor: '#FFF',
        width: screenWidth
    },
    row: {
        flexDirection: 'row',
        height: 80,
        alignItems: 'flex-end',
        marginRight: 15,
        marginLeft: 15,
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor: 'gray',//需要标色  
    },
    textInputTitle: {
        width: 80,
        fontSize: 17,
        marginBottom:10
    },
    textImage: {
        flex: 1,
        height: 44,// @todo should be changed if underlined  
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },
    image: {
        width: 38,
        height: 38,
        backgroundColor: '#FFF',
        borderRadius: 19,
    },
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
}); 
