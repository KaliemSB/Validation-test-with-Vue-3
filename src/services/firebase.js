import firebase from 'firebase'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyA4aaTFabFGMwwVeY1azVUETmusATT4ctk",
    authDomain: "vue-crud-6cd65.firebaseapp.com",
    databaseURL: "https://vue-crud-6cd65-default-rtdb.firebaseio.com",
    projectId: "vue-crud-6cd65",
    storageBucket: "vue-crud-6cd65.appspot.com",
    messagingSenderId: "557659658683",
    appId: "1:557659658683:web:2d665cc3e44540137c0c9e"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()

export { firebase, auth }