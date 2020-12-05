import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayMovie = ({ data }) => {
  let { id } = useParams();

  const matchedMovie = data && data.movies.find((movie) => movie.id === +id);

  return (
    <div className="displayMovie">
      <div className="title">
        <Link to="/">Movielist</Link>
        <h1> {matchedMovie && matchedMovie.title} </h1>
      </div>
      <div className="movieInfos">
        <div className="poster">
          <img
            src={matchedMovie && matchedMovie.posterUrl}
            alt={matchedMovie && matchedMovie.title}
          />
        </div>
        <div className="infos">
          <p> Year: {matchedMovie && matchedMovie.year} </p>
          <p> Director: {matchedMovie && matchedMovie.director} </p>
          <p> Actors: {matchedMovie && matchedMovie.actors} </p>
          <p> Genres: {matchedMovie && matchedMovie.genres} </p>
          <p> Plot: {matchedMovie && matchedMovie.plot} </p>
          <p> Rutime: {matchedMovie && matchedMovie.runtime} </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovie;
