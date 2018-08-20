import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Markets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markets: []
    };
  }

  componentDidMount() {
    this.getMarkets()
}

getMarkets = () => {
    fetch('https://wem.americasmart.com/api/v1.1/market')
    .then(res => res.json())
    .then(data => {
        this.setState({ markets: data })
        console.log(this.state.markets)
    })
}

  render() {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.upcoming}>Upcoming Markets</Text>
            {this.state.markets.map(market => (
                <View style={styles.market}><Text>{market.marketName}</Text></View>
            ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: "91%",
      // height: "60%",
      margin: 20,
      borderRadius: 4,
      backgroundColor: "white"
    },
    market: {
      //   width: '90%',
        backgroundColor: 'white',
        marginTop: 10,
        marginLeft: 10,
        height: 40,
        color: 'red'
    },
    upcoming: {
      fontWeight: "bold",
      paddingTop: 10,
      paddingLeft: 10
    }
  });
  