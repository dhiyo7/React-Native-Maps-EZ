//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView,{Marker} from 'react-native-maps';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <MapView style={styles.map} 
        initialRegion={{latitude:-6.920132, 
          longitude:109.370576,
        latitudeDelta: 0.04,
        longitudeDelta: 0.05,}}></MapView>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    height:500    
  },
  map:{
    height:500,
  }
});

//make this component available to the app
export default App;
