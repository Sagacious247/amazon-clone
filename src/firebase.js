import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'
import  {getFirestore} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC0xt9szbUSUt5tmEIFHm7vi5_YokimVBM",
  authDomain: "champions-academy-46001.firebaseapp.com",
  projectId: "champions-academy-46001",
  storageBucket: "champions-academy-46001.appspot.com",
  messagingSenderId: "640999378577",
  appId: "1:640999378577:web:e29760a1d2519a9b163930"
};

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)

  export { auth, db }