import firebase from 'firebase';
import 'firebase/storage';
require("firebase/firestore");


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDYy8SLjoCZhir9fjGL30EgOyR9FwHzMx4",
    authDomain: "asbc-rc.firebaseapp.com",
    databaseURL: "https://asbc-rc.firebaseio.com",
    projectId: "asbc-rc",
    storageBucket: "asbc-rc.appspot.com",
    messagingSenderId: "938622458520",
    appId: "1:938622458520:web:062027baa14c1eca954eed",
    measurementId: "G-0DWHS5ECG7"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { fb, db }