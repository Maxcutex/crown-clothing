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

export const createUserProfileDocument = async (userAuth, additionalData)=> {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt, 
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user', error.message)
        }
    }

    console.log(firestore.doc(`users/${userAuth.uid}`))
    return userRef;
}

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(
        obj => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);

        }
    )
    return await batch.commit();
}

export const convertCollectionsSnapshotToMap = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const {
            title,
            items
        } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        };
    });

    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

