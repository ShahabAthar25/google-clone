import React from 'react'

import './Home.css'

import Navabr from './Navbar/Navber'

function Home({auth}) {
    return (
        <div className="home">
            <Navabr auth={auth} />
        </div>
    )
}

export default Home
