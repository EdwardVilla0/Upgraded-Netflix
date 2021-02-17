import React from 'react'
import './HomeScreen.styles.css';
import Nav from '../Nav/Nav.component';
import Banner from '../Banner/Banner.components';

function HomeScreen() {

    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
        </div>
    )
}

export default HomeScreen
