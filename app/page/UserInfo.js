
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet
} from 'react-native';
import TextImageWidget from '../components/TextImageWidget';
import TextInputWidget from '../components/TextInputWidget'


export default class UserInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextImageWidget title='* 头像'></TextImageWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校'></TextInputWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校'></TextInputWidget>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: 'gray'
  }
}); 
