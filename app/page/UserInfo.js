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
import BaseComponent from '../components/BaseComponent'


export default class UserInfo extends BaseComponent {
  constructor() {
    super();
    this.state={user:{}}
  }
  showAlertSelected() {
    this.dialog.show();
  }
  onDegreeChange(_degree) {
    this.state.user.degree = _degree;
    this.setState({
      user: this.state.user
    });
  };
  onAgeChange(_age) {
    this.state.user.age = _age;
    this.setState({
      user: this.state.user
    });
  };
  confirm() {
    this.saveUser();
  };

  saveUser() {
    super.goto("ListUserInfo",this.state.user);
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toptip}>
          <BackArrow navigation={this.props.navigation}></BackArrow>
          <TouchableHighlight style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => { this.showAlertSelected(); }}>
            <Text style={{ borderRadius: 6, borderWidth: 0.5, borderColor: '#383838', width: 60, height: 20, textAlign: 'center' }}>保存</Text>
          </TouchableHighlight>
        </View>
        <TextImageWidget title='* 头像' ></TextImageWidget>
        <TextInputWidget title='* 学历' placeholder='请填写毕业/就读学校' onChange={(data) => this.onDegreeChange(data)}></TextInputWidget>
        <TextInputWidget title='  年龄' placeholder='年龄' onChange={(data) => this.onAgeChange(data)}></TextInputWidget>
        <TextTipsWidget title='* 性别' tips='请选择'></TextTipsWidget>
        <ConfirmDialog msg="是否保存" ref={(dialog) => { this.dialog = dialog; }} callback={this.confirm.bind(this)} />
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'gray',
  },
  toptip: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
}); 
