
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
import ConfirmDialog from '../dialog/animate/ConfirmDialog'
import BackArrow from '../widget/BackArrow'


export default class UserInfo extends Component {
  showAlertSelected() {
    this.dialog.show();
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toptip}>
          <BackArrow></BackArrow>
          <TouchableHighlight style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => { this.showAlertSelected(); }}>
            <Text style={{ borderRadius: 6, borderWidth: 0.5, borderColor: '#383838', width: 60, height: 20, textAlign: 'center' }}>保存</Text>
          </TouchableHighlight>
        </View>
        <TextImageWidget title='* 头像' ></TextImageWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校'></TextInputWidget>
        <TextTipsWidget title='* 性别' tips='请选择'></TextTipsWidget>
        <ConfirmDialog msg="是否保存" ref={(dialog) => { this.dialog = dialog; }}></ConfirmDialog>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray'
  },
  toptip: {
    height: 30, 
    flexDirection: 'row', 
    backgroundColor: '#FFF', 
    paddingTop: 5, 
    borderBottomWidth: 0.5, 
    borderColor: 'gray'
  }
}); 
