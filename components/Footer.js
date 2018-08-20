import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.footer}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        backgroundColor: '#1BB9FF',
        height: 30,
        flex: 1
    }
})