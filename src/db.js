import firebase from "firebase/app";
import "firebase/database";
// let firebaseConfig = {
//   apiKey: "AIzaSyCr3je4WSkwWjnroHo2HscRHnATJHYvYCg",
//   authDomain: "vue-event-list.firebaseapp.com",
//   databaseURL: "https://vue-event-list.firebaseio.com",
//   projectId: "vue-event-list",
//   storageBucket: "vue-event-list.appspot.com",
//   messagingSenderId: "647514441100",
//   appId: "1:647514441100:web:9a11480077f9b9164302a9",
//   measurementId: "G-L2W0VQHZPN"
// };

export const db = firebase
  .initializeApp({ databaseURL: "https://vue-event-list.firebaseio.com" })
  .database();
