import React, { Component } from 'react'
import { TouchableHighlight,Image } from 'react-native'

export default class BackArrow extends Component {
    render() {
        return (
            <TouchableHighlight onPress={()=>{this.props.navigation.goBack()}}>
                <Image source={require('../../img/icon/back.png')}  style={{ width: 20, height: 20 }}></Image>
            </TouchableHighlight>
        )
    }
}
