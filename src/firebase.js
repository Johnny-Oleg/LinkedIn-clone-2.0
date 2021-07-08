import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAWH5tvCc8TUOFGFgOmoPkwlwboXTCyjRw",
    authDomain: "linkedin-clone-2-jo.firebaseapp.com",
    projectId: "linkedin-clone-2-jo",
    storageBucket: "linkedin-clone-2-jo.appspot.com",
    messagingSenderId: "51973990950",
    appId: "1:51973990950:web:c286188d53fc895e5a94e7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;