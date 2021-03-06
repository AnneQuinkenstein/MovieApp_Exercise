import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const DisplayMovie = ({ data }) => {
  let { id } = useParams();

  const matchedMovie = data && data.movies.find((movie) => movie.id === +id);

  return (
    <div className="singleMovie">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <div className="displayMovie">
        <div className="title">
          <Link to="/">
            {" "}
            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>{" "}
          </Link>
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
            <p className="row">
              {" "}
              <p className="col1">Year:</p>{" "}
              <p className="col2"> {matchedMovie && matchedMovie.year}</p>{" "}
            </p>
            <p className="row">
              {" "}
              <p className="col1">Director:</p>{" "}
              <p className="col2"> {matchedMovie && matchedMovie.director}</p>{" "}
            </p>
            <p className="row">
              {" "}
              <p className="col1">Actors:</p>{" "}
              <p className="col2"> {matchedMovie && matchedMovie.actors}</p>{" "}
            </p>
            <p className="row">
              {" "}
              <p className="col1">Genres:</p>{" "}
              <p className="col2"> {matchedMovie && matchedMovie.genres}</p>{" "}
            </p>
            <p className="row">
              {" "}
              <p className="col1">Plot:</p>{" "}
              <p className="col2"> {matchedMovie && matchedMovie.plot}</p>{" "}
            </p>
            <p className="row">
              {" "}
              <p className="col1">Rutime:</p>{" "}
              <p className="col2">{matchedMovie && matchedMovie.runtime}</p>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayMovie;
