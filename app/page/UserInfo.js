
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
import FetchUitl from '../network/FetchUtil';
import ConfirmDialog from '../dialog/ConfirmDialog'



export default class UserInfo extends Component {
  showAlertSelected(){
    this.dialog.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{height:30,flexDirection:'row'}}>
          <Text style={{flex:1}}>返回</Text>
          <TouchableHighlight style={{flex:1}} onPress={() => { this.showAlertSelected(); }}>
            <Text >保存</Text>
          </TouchableHighlight>
        </View>
        <TextImageWidget title='* 头像' ></TextImageWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校'></TextInputWidget>
        <TextTipsWidget title='* 性别' tips='请选择'></TextTipsWidget>
        <ConfirmDialog msg = "是否保存" ref={(dialog) => { this.dialog = dialog; }}></ConfirmDialog>
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
