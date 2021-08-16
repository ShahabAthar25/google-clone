import './App.css';

import firebase from 'firebase'
import 'firebase/auth'

import { useAuthState } from "react-firebase-hooks/auth"

import Home from './Component/Home/Home'
import Login from './Component/Login/Login'

firebase.initializeApp({
  apiKey: "AIzaSyBwxpl31EBhgeY__kDYIuxT4ZS0CrdaQ2o",
  authDomain: "clone-1d668.firebaseapp.com",
  projectId: "clone-1d668",
  storageBucket: "clone-1d668.appspot.com",
  messagingSenderId: "454880648456",
  appId: "1:454880648456:web:6d38f1251d042a3c2fe0bd"
})

function App() {

  const auth = firebase.auth()

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      {user ? <Home /> : <Login auth={auth} />}
    </div>
  );
}

export default App;
