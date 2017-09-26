import React from 'react';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      username: null,
      user: {}
    }
  }

  _onPressButton = () => {
    const api = 'https://api.github.com';
    const username = this.state.username;

    fetch(`${api}/users/${username}`)
      .then(response => response.json())
      // .then((user) => {
      //   console.log(user);
      //   return user;
      // })
      .then((user) => {
        this.setState({ user })
      })
      .catch(console.error)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Buscar dados do GitHub</Text>

        <TextInput
          placeholder="Usuário do GitHub"
          style={styles.input}
          autoCapitalize={'none'}
          onChangeText={(username) => this.setState({ username })} />

        <Button
          onPress={this._onPressButton}
          title="Buscar"
          color="#606060"
          accessibilityLabel="Buscar dados no GitHub" />

        <Image
          style={styles.image}
          source={{ uri: this.state.user.avatar_url }} />

        <Text style={styles.name}>{this.state.user.name}</Text>
        <Text style={styles.username}>{this.state.user.username}</Text>
        <Text style={styles.bio}>{this.state.user.bio}</Text>

        <Text style={styles.commonText}>{this.state.user.company}</Text>
        <Text style={styles.commonText}>{this.state.user.location}</Text>
        <Text style={styles.commonText}>{this.state.user.blog}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 15
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    color: '#606060',
    marginBottom: 10,
    marginTop: 15,
    padding: 15,
    width: 300,
  },
  image: {
    marginBottom: 20,
    marginTop: 20,
    height: 250,
    width: 250,
  },
  name: {
    color: '#606060',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  username: {
    color: '#959595',
    fontSize: 20,
    textAlign: 'left',
  },
  bio: {
    color: '#959595',
    fontSize: 14,
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'left',
  },
  commonText: {
    color: '#606060',
    fontSize: 14,
    marginBottom: 5,
    textAlign: 'left',
  }
});
