import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import Constants from 'expo-constants';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAxdC424Qz_l3JOBQ1XaB_yWrukCcUU59M",
    authDomain: "maps-app-native.firebaseapp.com",
    projectId: "maps-app-native",
    storageBucket: "maps-app-native.appspot.com",
    messagingSenderId: "204779561201",
    appId: "1:204779561201:web:a2c6721e1378617f300950"
};
let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;

