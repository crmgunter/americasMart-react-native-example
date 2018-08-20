import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
        events: [],
        count: 0
    };
  }

  componentDidMount() {
    this.getEvents()
  }

  getEvents = () => {
      fetch('https://wem.americasmart.com/api/search/event')
      .then(res => res.json())
      .then(data => {
          this.setState({ events: data })
          console.log(data.reverse())
      })
  }

  render() {
    return (
        <View>
        <View style={styles.container}>
            <Text style={styles.events}>Upcoming Events</Text>
            {this.state.events.reverse().slice(0, 5).map(((e) => {
                    return <View style={styles.market}>
                    <Text>{e.title}</Text>
                    <Text>{e.location}</Text>
                    <Text>{e.startDateTime} – {e.endDateTime}</Text>
                    </View>
            }))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      width: "91%",
      height: 400,
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
    events: {
      fontWeight: "bold",
      paddingTop: 10,
      paddingLeft: 10
    }
  });
  