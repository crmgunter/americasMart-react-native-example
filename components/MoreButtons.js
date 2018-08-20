import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MoreButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        // height: "40%",
        borderRadius: 4,
        backgroundColor: "white"
      }
})