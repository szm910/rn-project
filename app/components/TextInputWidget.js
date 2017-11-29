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
                    <Text style={styles.textTitle}>{this.props.title}</Text>
                    <View style={styles.item}>
                        <TextInput underlineColorAndroid='transparent'  placeholder={this.props.placeholder} style={styles.textInput}></TextInput>
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
        height: 70,
        alignItems: 'flex-end',
        marginRight: 15,
        marginLeft: 15,
        paddingBottom: 10,
        borderBottomWidth: 0.5 / PixelRatio.get(),
        borderColor: 'gray',//需要标色  
    },
    item: {
        flex: 1,
        justifyContent: 'center'
    },
    textTitle: {
        flex: 1,
        width: 70,
        fontSize: 17,
        alignItems: 'flex-end',
    },
    textInput: {
        backgroundColor: '#FFF',
        textAlign: 'right',
    }
}); 