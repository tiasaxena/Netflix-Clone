import React, { useEffect, useState } from 'react';
import axios from '../axios'; //since in '../axios.js', there is he default export, while importing we can name it anything we like. But for others, we got to destructure and use the same nomenclature.
import "./Row.css"


//base URL to get the poster images
const base_url = "https://image.tmdb.org/t/p/original/";

function Row(props) {

    const [movies, setMovies] = useState([]);

    //We have to populate the movies
    //Now, what we need is something that runs on a specific condition/variable
    //every time the each Row will load, the useEffect snippet of code will run ans will pull the information(movies) from the api 
    useEffect(() => {
        //populate each Row with information
        
        //make asynchronous call. Since we are making call to a third party, it might take half a secon or so to get the data, so we have to use async. Async can't be used inside a useEffect. Still if you wat to do, there is  a special way mentioned below.
        async function fetchData() {
            const request = await axios.get(props.fetchURL);
            //axios.get(props.fetchUrl) ==> "https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US"
            setMovies(request.data.results);
            console.table(request.data.results);
            return request;
        }
        fetchData();
    }, [props.fetchURL]);

    return (
        <>
            <div className='row'>
                {/* title */}
                <h2> {props.title} </h2>

                <div className='row__posters'>
                    {/* container -> bunch of posters */}
                    {movies.map( movie => (
                        <img 
                        key={movie.id}
                        // if it is the netflix original section, then the an additinal class needs to be added
                        className={`row__poster ${props.isLargeRow && "row__posterLarge"}`} 
                        src={ `${base_url}${ props.isLargeRow ? movie.poster_path : movie.backdrop_path}` } 
                        alt={movie.title}></img>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Row;