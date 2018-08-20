import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.header}>
        <Text> login </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        backgroundColor: '#1BB9FF',
        width: '100%',
        color: 'white',
        flex: 1
    }
})