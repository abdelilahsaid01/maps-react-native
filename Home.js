import React, { useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Circle, Marker, Overlay, Polygon, Polyline } from 'react-native-maps';

const Home = () => {
    const [mellah, setRegion] = useState({
        latitude: 34.02673024556684,
        longitude: -6.829627510160208,
        latitudeDelta: 0.005282011989059754,
        longitudeDelta: 0.008834190666675568,
    })

    const [mellahPlaces, setMellahPlaces] = useState([
        {
            key: 1,
            latitude: 34.026067,
            longitude: -6.829876,
            title: "Rue du Mellah",
            description: "desc of Rue du Mellah"
        },
        {
            key: 2,
            latitude: 34.025881,
            longitude: -6.829494,
            title: " Rue Skaya ",
            description: "desc of  Rue Skaya "
        }
    ]
    )



    const [mellahPloy, setMellahPloy] = useState([
        {
            key: 1,
            latitude: 34.026582,
            longitude: -6.826261,
        },
        {
            key: 2,
            latitude: 34.026931,
            longitude: -6.827754,
        },
        {
            key: 3,
            latitude: 34.027011,
            longitude: -6.828360,
        }
        ,
        {
            key: 4,
            latitude: 34.026870,
            longitude: -6.829172,
        },
        {
            key: 5,
            latitude: 34.026724,
            longitude: -6.829666,
        },
        {
            key: 6,
            latitude: 34.026769,
            longitude: -6.830346,
        },
        {
            key: 7,
            latitude: 34.027317,
            longitude: -6.831401,
        },
        {
            key: 8,
            latitude: 34.027585,
            longitude: -6.831332,
        },
        {
            key: 9,
            latitude: 34.0275546,
            longitude: -6.8319837,
        },
        {
            key: 10,
            latitude: 34.026861,
            longitude: -6.832772,
        },
        {
            key: 11,
            latitude: 34.0249840,
            longitude: -6.8308196,
        }
    ]
    )






    const test = (region) => {
        console.log(region)
    }
    return (
        <View style={styles.container} >
            <MapView
                style={styles.map}
                initialRegion={mellah}
                showsUserLocation={true}
                showsPointsOfInterest={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                onRegionChange={res => test(res)}
                provider={"google"}
                initialCamera={{ center: mellah, altitude: mellah.latitude, heading: 30, zoom: 16.9, pitch: 50 }}
            >
                {/* <Circle
                    center={mellah}
                    radius={1000}
                    strokeColor={"red"}
                    strokeWidth={2}
                /> */}
                <Polygon
                    coordinates={mellahPloy}
                    strokeColor={"red"}
                // strokeWidth={1}
                // onPress={(e) => console.log(e)}
                />
                {mellahPlaces.map((res, i) => {
                    return (
                        <Marker
                            key={res.key}
                            coordinate={{ latitude: res.latitude, longitude: res.longitude }}
                            title={res.title}
                            description={res.description}
                        />
                    )
                })}



            </MapView>

        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});

export default Home


// <Marker
// key={1}
// coordinate={{ latitude: mellah.latitude, longitude: mellah.longitude }}
// title={"marker.title"}
// description={"marker.description"}
// // image={require("./assets/favicon.png")}
// >
// <Callout>
//     <Text>Hello</Text>
// </Callout>
// </Marker>




{/* <Marker
        key={1}
        coordinate={{ latitude: mellah.latitude, longitude: mellah.longitude }}
        title={"marker.titlee"}
        description={"marker.description"}
        draggable
        onDragStart={(e) => console.log("Old position :" + JSON.stringify(e.nativeEvent.coordinate))}
        onDragEnd={(e) => console.log("New position :" + JSON.stringify(e.nativeEvent.coordinate))}
    /> */}