import { computeHeadingLevel } from '@testing-library/react';
import React, { useEffect, useState } from 'react';
import axios from '../axios';
import requests from '../requests';
import "./Banner.css";

function Banner() {

  const [ movie, setMovie ] = useState([]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n-1) + "..." : str;
  }

  useEffect( () => {
    async function fetchData() {
      const request = await axios.get( requests.fetchNetflixOriginals );
      // console.log(request.data.results);
      //out of array of netflix originals, we just want any one randomly selected
      setMovie(
        request.data.results[[Math.floor( Math.random() * request.data.results.length - 1)]]
      );
      return request;
    }
    fetchData();
  }, []);

  return (
    <header className='banner' 
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosiion: "center center"
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'> { movie?.title || movie?.name || movie?.original_name } </h1>

        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        
        <h1 className='banner__description'>
          {truncate(movie?.overview, 150)}
        </h1>
      </div> 
      <div className='banner--fadeBottom'></div>
    </header>
  )
}
export default Banner;