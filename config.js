 import firebase from "firebase";
 
var firebaseConfig = {
    apiKey: "AIzaSyAuKpehdzlTA6FYbs309aVJkmXjC6ixmew",
    authDomain: "project60-8c697.firebaseapp.com",
    databaseURL: "https://project60-8c697-default-rtdb.firebaseio.com",
    projectId: "project60-8c697",
    storageBucket: "project60-8c697.appspot.com",
    messagingSenderId: "606800558589",
    appId: "1:606800558589:web:8ab6bbb747965551720194",
    measurementId: "G-SPFSERL208"
  };



if(firebase.app.length){
firebase.initializeApp(firebaseConfig);
}



export default firebase.database();
 

console.log(firebase.name);
console.log(firebase.database());
 
 

  