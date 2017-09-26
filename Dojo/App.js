import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dojo #8</Text>
        <Text>Campinas Front-End</Text>
        <Text>Let's start by editing <Text style={styles.bold}>/Dojo/App.js</Text></Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  bold: {
    fontWeight: 'bold',
  }
});
