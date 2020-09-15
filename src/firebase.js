import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyByVcMJnFt-6gJheVdMSZMvtfGIk6mZ9sk",
  authDomain: "clone-824eb.firebaseapp.com",
  databaseURL: "https://clone-824eb.firebaseio.com",
  projectId: "clone-824eb",
  storageBucket: "clone-824eb.appspot.com",
  messagingSenderId: "427360961001",
  appId: "1:427360961001:web:2793035bc591115838cb78",
  measurementId: "G-2FN40DK0P3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth};
