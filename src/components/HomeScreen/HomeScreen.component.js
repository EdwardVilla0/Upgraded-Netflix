import React from 'react'
import './HomeScreen.styles.css';
import Nav from '../Nav/Nav.component';
import Banner from '../Banner/Banner.components';
import Row from '../Row/Row.component';
import request from '../../Requests';

function HomeScreen() {

    return (
        <div className="homeScreen">
            <Nav />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending Now" fetchUrl={request.fetchTrending} />
            <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
            <Row title="Action" fetchUrl={request.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={request.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={request.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
        </div>
    )
}

export default HomeScreen
