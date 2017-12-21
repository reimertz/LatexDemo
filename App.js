/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView
} from 'react-native'

import MapView from './MapView'

export default class App extends Component<{}> {
  state = {
    text: 'z = \\frac{-b  \\sqrt{b^2-4ac}}{2a}'
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <KeyboardAvoidingView
          style={{
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 20,
            paddingTop: 20
          }}
          behavior="padding">
          <MapView
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',

              fontSize: 30,
              textAlign: 'center'
            }}
            latex={this.state.text}
          />,
          <TextInput
            numberOfLines={1}
            style={{
              flex: 1,
              backgroundColor: 'black',
              textAlign: 'center',
              color: 'white'
            }}
            onChangeText={text => this.setState({ text })}
            value={this.state.text}
          />
        </KeyboardAvoidingView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
})
