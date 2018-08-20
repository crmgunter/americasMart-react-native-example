import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class UpcomingMarket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <Text style={styles.bold}>Fall Design Week</Text>
          <Text>Monday, September 24 – Friday, September 28, 2018</Text>
          <Text>→</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    height: 70,
    borderRadius: 4,
    backgroundColor: "white"
  },
  innerContainer: {
    marginTop: 10,
    marginLeft: 10
  },
  bold: {
      fontWeight: "bold"
  }
});
