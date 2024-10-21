// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvWwj1w7vIvYJEWizQ5-sMBNIVWX3-juA",
  authDomain: "mymaps-419004.firebaseapp.com",
  databaseURL: "https://mymaps-419004-default-rtdb.firebaseio.com",
  projectId: "mymaps-419004",
  storageBucket: "mymaps-419004.appspot.com",
  messagingSenderId: "61119424715",
  appId: "1:61119424715:web:2cda786976a50bd2fed34e",
  measurementId: "G-HXL6081L0R"
};


// Get a reference to the document
var docRef = db.collection("QZ5RO0lAszy").doc("Temperature");

// Update the document with new fields
return docRef.update({
    Temp: "value1",
    Temp: "value2",
    // Add more fields as needed
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // Handle any errors
    console.error("Error updating document: ", error);
});


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);