
import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
  ListView
} from 'react-native';
import BackArrow from '../widget/BackArrow'
import UserInfo from '../page/UserInfo'
import BaseComponent from '../components/BaseComponent';

export default class ListUserInfo extends BaseComponent {
  showAddUser() {
    super.goto("UserInfo");
  };

  ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

  constructor(props) {
    super(props);
    var user = this.props.navigation.state.params;
    var users=[];
    if(user){
      users.push(user);
    }
    this.state = {
      dataSource: this.ds.cloneWithRows(users)
    };
  }
  _renderRow(rowData, sectionid, rowid) {
    return (<View><Text>{rowData.age}</Text><Text>{rowData.degree}</Text></View>);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toptip}>
          <TouchableHighlight style={{ flex: 1, alignItems: 'flex-end' }} onPress={() => { this.showAddUser() }}>
            <Text style={{ borderRadius: 6, borderWidth: 0.5, borderColor: '#383838', width: 60, height: 20, textAlign: 'center' }}>添加</Text>
          </TouchableHighlight>
        </View>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this._renderRow.bind(this)}
          onEndReached={() => { console.log('---'); }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  toptip: {
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  }
})