import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyDKecUPMmApECkhXkaA-8lJF52BwZW1XpI",
    authDomain: "blog-demo-ver-1ef94.firebaseapp.com",
    projectId: "blog-demo-ver-1ef94",
    storageBucket: "blog-demo-ver-1ef94.appspot.com",
    messagingSenderId: "960815647897",
    appId: "1:960815647897:web:36f91a0af1b439dda03c08"
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, db, storage, serverTimestamp };

