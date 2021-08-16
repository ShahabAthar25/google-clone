import React from 'react'

import AppsIcon from '@material-ui/icons/Apps';

import { Avatar } from '@material-ui/core'

import './Navbar.css'

function Navbar({auth}) {

    const currentUser = auth.currentUser

    return (
        <div className="navbar">
            <a href="https://clone-13a08.web.app/">Gmail</a>
            <a href="https://clone-13a08.web.app/">Images</a>
            <AppsIcon className="navbar__apps" />
            <Avatar src={currentUser.photoURL} className="navbar__avatar" />
        </div>
    )
}

export default Navbar
