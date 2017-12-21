import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, PixelRatio, Dimensions, TouchableHighlight,DeviceEventEmitter } from 'react-native'
import BaseComponent from './BaseComponent';
import RightArrow from '../widget/RightArrow';
import Choose from '../dialog/animate/Choose';

var screenWidth = Dimensions.get('window').width;
const selectedArr = ["男", "女"];
export default class TextTipsWidget extends BaseComponent {
    constructor(props){
        super(props);
        this.state={
            sex:'请选择'
        }
    }
    showAlertSelected() {
        this.dialog.show('请选择性别', '男', '女', this);
    }
    
    render() {
        return (
            <View style={styles.columnContainer}>
                <TouchableHighlight style={styles.rowContainer} onPress={() => { this.showAlertSelected(); }}>
                    <View style={styles.row}>
                        <Text
                            numberOfLines={1}
                            style={styles.textTitle} >
                            {this.props.title}
                        </Text>
                        <View >
                            <Text onSelected={()=>{}} style={styles.textTips}>{this.state.sex}</Text>
                        </View>
                        <RightArrow />
                    </View>
                </TouchableHighlight>
                <Choose ref={(dialog) => { this.dialog = dialog; }}></Choose>
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
        height: 70,
        alignItems: 'flex-end',
        marginRight: 15,
        marginLeft: 15,
        paddingBottom: 10,
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor: 'gray',//需要标色  
    },
    textTitle: {
        flex: 1,
        width: 80,
        fontSize: 17,
        marginBottom: 10
    },

    textTips: {
        marginBottom: 15,
        color: '#ccc'
    }
}); 
