
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import TextImageWidget from '../components/TextImageWidget';
import TextInputWidget from '../components/TextInputWidget';
import TextTipsWidget from '../components/TextTipsWidget';
import Alert from '../components/Alert';


export default class UserInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextImageWidget title='* 头像' ></TextImageWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校'></TextInputWidget>
        <TextTipsWidget title='* 性别' tips='请选择'></TextTipsWidget>
      </View>
    );
  }
 
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray'
  }
}); 
