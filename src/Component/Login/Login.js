import React from 'react'

import firebase from 'firebase'

import './Login.css'

function Login({ auth }) {

    const SignInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
    }

    return (
        <div className="login">
            <button onClick={SignInWithGoogle} className="btn">Login With Google</button>
        </div>
    )
}

export default Login
