import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyBte9cl-xoRdvgDvRlTBGc2RUJALxLn-ho',
    authDomain: 'docs-clone-ade24.firebaseapp.com',
    projectId: 'docs-clone-ade24',
    storageBucket: 'docs-clone-ade24.appspot.com',
    messagingSenderId: '518999489846',
    appId: '1:518999489846:web:9590f02d8b258e7e0a8797',
}

const app = initializeApp(firebaseConfig)

// Auth
export const provider = new GoogleAuthProvider()
export const auth = getAuth(app)

export const getCurrentUser = (): Promise<User | null> => {
    return new Promise((resolve, reject) => {
        const removeListener = onAuthStateChanged(
            auth,
            (user) => {
                removeListener()
                resolve(user)
            },
            reject
        )
    })
}

// Firestore
export const db = getFirestore(app)
