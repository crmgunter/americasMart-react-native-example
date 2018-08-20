import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView
} from "react-native";
import UpcomingMarket from "./components/UpcomingMarket";
import Markets from './components/Markets'
import Events from './components/Events'
import Header from './components/Header'
import Footer from './components/Footer'


export default class App extends Component {
  render() {
    const resizeMode = "cover";
    return (
      <View style={styles.master}>
      <ScrollView style={{flex: 1}}>
        <ImageBackground
          source={{
            uri:
              "https://images.unsplash.com/photo-1508985303086-f9e301541c57?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=6d71472464275f636d81b02e97195618&auto=format&fit=crop&w=700&q=80"
          }}
          style={styles.container}
        >
        <Header />
          <View style={styles.inner}>
            <Text style={styles.welcome}>Welcome to AmericasMart</Text>
            <UpcomingMarket /> 
            <Events />
            <Markets />
          </View>
          <Footer />
        </ImageBackground>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  master: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcome: {
    marginTop: 60,
    marginBottom: 60,
    fontSize: 40,
    textAlign: "center",
    margin: 10,
    color: "#333"
  },
  inner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(255, 255, 255, .8)"
  }
});
