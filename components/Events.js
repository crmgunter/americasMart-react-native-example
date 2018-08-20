import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import moment from "moment";

export default class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      count: 0
    };
  }

  componentDidMount() {
    this.getEvents();
  }

  getEvents = () => {
    fetch("https://wem.americasmart.com/api/search/event")
      .then(res => res.json())
      .then(data => {
        this.setState({ events: data });
        console.log(data.reverse());
      });
  };

  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.events}>Upcoming Events</Text>
          {this.state.events
            .reverse()
            .slice(0, 5)
            .map(e => {
              const formattedStartDate = moment(e.startDateTime).format(
                "dddd, MMMM D"
              );
              const formattedEndDate = moment(e.endDateTime).format(
                "dddd, MMMM D, YYYY"
              );
              return (
                <View style={styles.market}>
                    <Text>{e.title}</Text>
                    <Text>{e.location}</Text>
                    <Text style={styles.dateWidth}>
                      {formattedStartDate} – {formattedEndDate}
                    </Text>
                </View>
              );
            })}
        </View>
        <Button title="See All Events" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "91%",
    height: 600,
    margin: 20,
    borderRadius: 4,
    backgroundColor: "white"
  },
  market: {
    width: '90%',
    backgroundColor: "white",
    marginTop: 30,
    marginLeft: 10,
    height: 80,
    padding: 10
  },
  eachEvent: {
    //   borderColor: '#333',
    //   borderWidth: 1,
    //   margin: 30,
    //   height: 200
  },
  events: {
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10
  },
  dateWidth: {
    width: "80%",
  }
});
