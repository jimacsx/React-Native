/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'antd-mobile/lib/button'; //import Ant Mobile
import SearchBar from 'antd-mobile/lib/search-bar';
import Flex from 'antd-mobile/lib/flex';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import Avatar from 'react-native-elements/src/avatar/Avatar.js'

let ICON_SIZE = 50;

class Header extends Component {
  render() {
    return (
        <Flex justify="between" style={stylesHeader.container}>
          <Flex.Item>
            <Avatar
              medium
              rounded
              source={require('./images/logosc.png')}
              onPress={() => alert("Works!")}
              activeOpacity={0.7}
              />
          </Flex.Item>
          <Flex.Item>
            <SearchBar placeholder="Búsqueda" width={80} maxLength={8}/>
          </Flex.Item>
          <Flex.Item>
          <Avatar
            medium
            rounded
            source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            />
          </Flex.Item>
        </Flex>
    );
  }
}

const stylesHeader = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    padding: 10,
  },
  searchBar: {
    width: '80%'
  },
  blanco: {
    color: '#fff'
  },
  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: 10,
    backgroundColor: '#fff',
    resizeMode: 'contain'
  },
  flexItem: {
    width: 80
  }
});

export default class MyNativeApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header name="header"/>
        <Text style={styles.welcome}>Hola Mundo!</Text>
        <Image
          source={{uri: 'http://frostney.github.io/talks/react-native/slides/images/react-logo.png'}}
          style={{width: 100, height:100}}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    position: 'relative'
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 10,
    color: '#fff',
  },
  blanco: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('MyNativeApp', () => MyNativeApp);
