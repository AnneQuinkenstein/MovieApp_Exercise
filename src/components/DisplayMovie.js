import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DisplayMovie = ({ data }) => {

    let { id } = useParams();
    console.log(data);
    const matchedMovie = data && data.movies.find((movie) => (movie.id === +id))

    return (
        <>
        <div>
        <Link to='/'>Movielist</Link>
        </div>
        <div>
            <h1> {matchedMovie && matchedMovie.title} </h1>
            <img src={matchedMovie && matchedMovie.posterUrl} />
        </div>
        </>
    )
}


export default DisplayMovie;