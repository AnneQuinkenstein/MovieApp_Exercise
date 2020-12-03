import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayMovie = ({ data }) => {
  let { id } = useParams();
  console.log(data);
  const matchedMovie = data && data.movies.find((movie) => movie.id === +id);

  return (
    <>
      <div>
        <Link to="/">Movielist</Link>
      </div>
      <div>
        <h1> {matchedMovie && matchedMovie.title} </h1>
        <img
          src={matchedMovie && matchedMovie.posterUrl}
          alt={matchedMovie && matchedMovie.title}
        />
      </div>
      <div className="Infos">
        <p> Year: {matchedMovie && matchedMovie.year} </p>
        <p> Director: {matchedMovie && matchedMovie.director} </p>
        <p> Actors: {matchedMovie && matchedMovie.actors} </p>
        <p> Genres: {matchedMovie && matchedMovie.genres} </p>
        <p> Plot: {matchedMovie && matchedMovie.plot} </p>
        <p> Rutime: {matchedMovie && matchedMovie.runtime} </p>
      </div>
    </>
  );
};

export default DisplayMovie;
