import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCU6b2AepoOZb0Ic8q34ptYa2zxSaFqQdk",
    authDomain: "wad2-9d010.firebaseapp.com",
    projectId: "wad2-9d010",
    storageBucket: "wad2-9d010.appspot.com",
    messagingSenderId: "797104591871",
    appId: "1:797104591871:web:ec4adc6f82e48d033f0dca",
    measurementId: "G-DN09S8S4YW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();