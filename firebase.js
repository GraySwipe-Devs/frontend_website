import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAG-P-0PIGky82DeDCxNVvdFqqEtgQjW1g",
    authDomain: "blog-demo-ver.firebaseapp.com",
    projectId: "blog-demo-ver",
    storageBucket: "blog-demo-ver.appspot.com",
    messagingSenderId: "57619034329",
    appId: "1:57619034329:web:e5e17426e9bb3d93c38ec8"
};

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }

const auth = firebase.auth();
const db = firebase.firestore()
const storage = firebase.storage();
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp

export { auth, db, storage, serverTimestamp };

