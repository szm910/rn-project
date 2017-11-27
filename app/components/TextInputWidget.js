import React, { Component } from 'react'
import {
    Text,
    TextInput,
    Dimensions,
    StyleSheet,
    PixelRatio,
    View
} from 'react-native';

screenWidth = Dimensions.get('window').width;

export default class TextInputWidget extends Component {
    render() {
        return (
            <View style={styles.rowContainer} >
                <View style={styles.row}>
                    <View style={styles.item}>
                        <Text> {this.props.title}</Text>
                    </View>
                    <View style={styles.item}>
                        <TextInput underlineColorAndroid='transparent' placeholder={this.props.placeholder} style={styles.textInput}></TextInput>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    rowContainer: {
        backgroundColor: '#FFF',
        width: screenWidth
    },
    row: {
        flexDirection: 'row',
        height: 60,
        alignItems: 'center',
        marginRight: 15,
        marginLeft: 15,
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor: 'gray',//需要标色  
    },
    item: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    textInputTitle: {
        width: 80,
        fontSize: 15,
        justifyContent: 'center'
    },
    textInput: {
        backgroundColor: '#FFF'
    }
}); 