// file that holds firebase config 


// @phoeni add/edit below 
import { apply } from "core-js/fn/reflect";
import firebase from firebase/apply;
import "firebase/firestore";

var firebaseConfig = {

}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {timestamp};
export default firebaseApp.firestore();

