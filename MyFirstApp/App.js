import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Hola Mundo!</Text>
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
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title : {
    fontSize: 18,
    color: "#fff"
  }
});
