import React, { useEffect, useState } from 'react';

function Row(props) {

    const [movies, setMovies] = useState([]);

    //every time the each Row will load, the useEffect snippet of code will run 
    useEffect(() => {
        //populate each Row with information
        // if [], run once when the row loads and don't load it again
        //if [something], run the code again if the movie in specific enre gets added
    }, []);

    return (
        <>
            {/* title */}
            <h2> {props.title} </h2>
            {/* conatiner -> bunch of posters */}

        </>
    )
}

export default Row;