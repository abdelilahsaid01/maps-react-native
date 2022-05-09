import React, { Component } from 'react'
import { Alert, Button, StyleSheet, Text, View, Animated, TouchableHighlight, LogBox, Easing } from 'react-native'
import { Audio } from 'expo-av';
export default class Home extends Component {

    state = ({
        loading: true,
        rotation: null
    })

    animatedTitle = new Animated.Value(-200);
    animatedSubtitle = new Animated.Value(600);
    animatedButton = new Animated.Value(800);
    animatedRotation = new Animated.Value(0);

    componentDidMount() {
        LogBox.ignoreLogs(['Animated: `useNativeDriver`']);
        this.animate();
        setTimeout(() => this.setState({ loading: false }), 3000)
        this.playSound()
    }
    animate = () => {
        // Player()
        Animated.parallel([
            Animated.timing(
                this.animatedTitle,
                {
                    toValue: 300,
                    duration: 800,
                }
            ),
            Animated.timing(
                this.animatedSubtitle,
                {
                    toValue: 0,
                    duration: 1400,
                    delay: 800,
                }
            ),
            Animated.timing(
                this.animatedRotation,
                {
                    toValue: 1,
                    duration: 1800,
                    delay: 800,
                    easing: Easing.linear,
                }
            ),

            // Animated.timing(
            //     this.animatedButton,
            //     {
            //         toValue: 0,
            //         duration: 1000,
            //         delay: 2200,
            //         // useNativeDriver: true
            //     }
            // )
        ]).start();
    }



    showAnimation = () => {
        return (
            <View style={styles.container}>
                <Animated.Text style={[styles.title,
                { marginTop: this.animatedTitle }]}>
                    Welcome
                </Animated.Text>
                {/* <Animated.Text style={[styles.subTitle,
                { marginLeft: this.animatedSubtitle }]}>
                    Thanks for visiting our app!
                </Animated.Text> */}
                <Animated.Image
                    source={require('../../assets/spire.png')}
                    style={{
                        width: 40,
                        height: 40,
                        marginTop: 10,
                        marginLeft: 160,
                        // position: "absolute",
                        transform: [{
                            rotate: this.animatedRotation.interpolate({
                                inputRange: [0, 1],
                                outputRange: ['0deg', '360deg'],
                            })
                        }]
                    }}
                />
                {/* <Animated.View style={{ marginTop: this.animatedButton }}>
                    <TouchableHighlight style={styles.button} onPress={() => this.startmenu()}>
                        <Text>Get Started</Text>
                    </TouchableHighlight>
                </Animated.View> */}
            </View>
        );
    }

    showList = () => {
        return (
            <View style={styles.containerMenu}>
                <Button
                    title="Maps"
                    color="red"
                    onPress={() =>
                        this.props.navigation.navigate('Maps')
                    } />
                <Button
                    title="Qr"
                    color="green"
                    onPress={() =>
                        this.props.navigation.navigate('QrScanner')
                    } />
            </View>
        )
    }

    playSound = async () => {
        // console.log('Loading Sound');
        const { sound } = await Audio.Sound.createAsync(
            require('../../assets/IOS-Notification.mp3')
        );
        await sound.playAsync();
    }



    render() {
        return (this.state.loading ? this.showAnimation() : this.showList())
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 12,
    },
    subTitle: {
        width: '100%',
        textAlign: 'center',
        fontSize: 18,
        opacity: .8,
    },
    button: {
        marginTop: 25,
        backgroundColor: '#ddd',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    containerMenu: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        // flexDirection: 'row',
    }
});

