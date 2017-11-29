import React, { Component } from 'react'
import { TouchableHighlight,Image } from 'react-native'

export default class BackArrow extends Component {
    render() {
        return (
            <TouchableHighlight>
                <Image source={require('../../img/icon/back.png')} style={{ width: 20, height: 20 }}></Image>
            </TouchableHighlight>
        )
    }
}
