//01511845dfda02be9f96ac40933edf96 - API key
import React from 'react';
import './App.css';
import Row from './components/Row';
import Banner from './components/Banner';
import requests from './requests';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Banner />
      <Row 
      title="Trending" 
      fetchURL={requests.fetchTrending}
      //by default belowline would mean true
      isLargeRow
      ></Row>
      <Row title="NETFLIX ORIGINALS" fetchURL={requests.fetchNetflixOriginals}></Row>
      <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
