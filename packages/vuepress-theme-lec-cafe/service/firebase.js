import _firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

if (!_firebase.apps.length) {
    // TODO dotenv から読み込むように
    var config = {
        apiKey: "AIzaSyAOOJ2CCjmPfhJG_KQCoGJ30Od0qrSLa54",
        authDomain: "cb-leccafe.firebaseapp.com",
        databaseURL: "https://cb-leccafe.firebaseio.com",
        projectId: "cb-leccafe",
        storageBucket: "",
        messagingSenderId: "591884722293"
    };
    _firebase.initializeApp(config);}

export const firebase = _firebase

const auth = firebase.auth()

const userDataFormat = (user) => {
    return {
        name: user.displayName,
        email: user.email,
        image: user.photoURL,
        uid: user.uid,
    }
}

export const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    const result = await auth.signInWithPopup(provider)
    // var token = result.credential.accessToken
    return {
        user: userDataFormat(result.user)
    }
}

export const relogin = () => {
    return new Promise((resolve) => {
        auth.onAuthStateChanged(user => {
            resolve(userDataFormat(user) || null)
        })
    })
}

const db = firebase.database()

/**
 * posts.{key}
 * @type {firebase.database.Reference}
 */
export const postRef = ( key = "" ) => {
    // const uid = firebase.auth().currentUser.uid
    return db.ref(`/posts`)
}

