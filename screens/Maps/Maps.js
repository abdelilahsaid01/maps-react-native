import React, { useEffect, useRef, useState } from 'react';
import { Button, Dimensions, Image, ImageBackground, PermissionsAndroid, Pressable, StyleSheet, Text, View } from "react-native";
import MapView, { Animated, Callout, Circle, Marker, Overlay, Polygon, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';



const Maps = ({ navigation }) => {

    useEffect(() => {
        (async () => {
            // const isAndroid = (Platform.OS === 'android')

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.005282011989059754,
                longitudeDelta: 0.008834190666675568,
            })
        })();
    }, []);

    const mapRef = useRef(null);

    const [currentLocation, setCurrentLocation] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.005282011989059754,
        longitudeDelta: 0.008834190666675568,
    })

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
    ])
    const test = (region) => {
        console.log(region)
    }

    const [cam, setCam] = useState({
        center: mellah, altitude: mellah.latitude, heading: 30, zoom: 16.4, pitch: 50
    })
    const goToMellah = () => {
        mapRef.current.animateToRegion(mellah, 3 * 1000);
        setTimeout(() => {
            mapRef.current.setCamera(cam)
        }, 3 * 1000)
    };

    return (
        <View style={styles.container} >
            <MapView
                style={styles.map}
                // onMapReady={() => goToMellah()}
                // initialRegion={mellah}
                region={mellah}
                showsUserLocation
                // showsPointsOfInterest={true}
                followsUserLocation={true}
                // showsMyLocationButton={true}
                // onRegionChange={res => test(res)}
                provider={"google"}
                // onPress={() => requestCameraPermission()}
                ref={mapRef} //assign our ref to this MapView
            // initialCamera={{ center: mellah, altitude: mellah.latitude, heading: 30, zoom: 16.9, pitch: 50 }}
            >
                {/* <Button onPress={() => test()} title="Go to Tokyo" /> */}

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
                {mellahPlaces.length > 0 && (
                    mellahPlaces.map((res, i) => {
                        return (
                            <Marker
                                key={res.key}
                                coordinate={{ latitude: res.latitude, longitude: res.longitude }}
                                title={res.title}
                                description={res.description}
                            // icon={require("./assets/icon_map.png")}
                            // onPress={{ setisAndroid("false") }}
                            >
                                <Image source={require('../../assets/icon_map.png')} style={{ width: 40, height: 40 }} />
                                <Text style={styles.textMarquer}>{res.title}</Text>
                            </Marker>
                        )
                    })
                )}
            </MapView>
            <View>
                <Button title="back" onPress={() => navigation.goBack()} />
            </View>
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
    textMarquer: {
        fontSize: 10,
        color: "green",
        fontWeight: "bold"

    }
});

export default Maps


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