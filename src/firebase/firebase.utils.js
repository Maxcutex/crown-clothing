import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBp0zt77ULCgmuC1Qyvx8OqD6dU_BEsJeA",
    authDomain: "crown-db-77d0a.firebaseapp.com",
    databaseURL: "https://crown-db-77d0a.firebaseio.com",
    projectId: "crown-db-77d0a",
    storageBucket: "crown-db-77d0a.appspot.com",
    messagingSenderId: "681606407387",
    appId: "1:681606407387:web:eab7cf0a83ade36e24d8fe",
    measurementId: "G-VZV9LWHT1W"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

