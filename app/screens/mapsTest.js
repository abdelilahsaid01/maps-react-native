import React, { useEffect, useState } from "react";
import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MapView, { Marker } from 'react-native-maps';
function MapsTest({ navigation, route }) {

  const [initialPosition, setInitialPosition] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  })

  const [region, setRegion] = useState({
    latitude: 35.777103,
    longitude: -5.803792,
    latitudeDelta: 5.0922,
    longitudeDelta: 5.0421,
  })

  const [france, setFrance] = useState({
    latitude: 46.232192999999995,
    longitude: 2.209666999999996,
    latitudeDelta: 10.0922,
    longitudeDelta: 10.0421,
  })
  const fesRegion = {
    latitude: 34.033333,
    longitude: -5.000000,
  };
  const [markers, setMarkers] = useState([])

  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <MapView
        style={styles.map}
        initialRegion={region}
        // region={region}
        // onRegionChangeComplete={(region) => setRegion(region)}
        onRegionChange={(region) => {
          setMarkers([...markers, {
            ...region
          }])
        }}
        showsUserLocation={true}
      // showsPointsOfInterest={true}
      // annotations={markers}
      />
      {
        markers.map((res, i) => {
          return (
            <Marker
              key={i}
              coordinate={res}
              pinColor="green"
              title="hello"
              description="desc"
            />
          )
        })

      }


      {/* 
        <Marker
          coordinate={{ latitude: region.latitude, longitude: region.longitude }}
          title="marker.title"
          description="marker.description"
        // pinColor='red'
        // icon={require("../assets/map.ico")}
        // image={require("../assets/icon.png")}
        // image={{ uri: 'public/assets/icon.png' }}
        /> */}



      <Text >Current latitude: {region.latitude}</Text>
      <Text >Current longitude: {region.longitude}</Text>
    </View>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  text: {
    // justifyContent: 'end',
    alignItems: 'center',
  }
});
export default MapsTest;


// "android": {
//   "config": {
//       "googleMaps": {
//           "apiKey": "AIzaSyDRwUUnMS-6gF0qCXQF6mdCTsioqjeWwDs"
//       }
//   }
// }