import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import { makeGETRequest } from './src/network/makeRequest';

export default class App extends Component {

  componentWillMount() {
    console.log('Making request');
    makeGETRequest('https://rallycoding.herokuapp.com/api/music_albums', {}, this.onSuccess, this.onFailure);
  }

  onSuccess(response) {
    console.log(response);
  }

  onFailure(error) {
    console.log(error);
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to Network Native!
        </Text>
      </View>
    );
  }
}
