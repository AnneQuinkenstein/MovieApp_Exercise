import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, changeFavorites, index }) => {
  return (
    <div className="container">
      <div className="box">
        <Link to={`movie/${movie.id}`}>
          <div className="image-container">
            <img src={movie.posterUrl} alt={movie.title} />{" "}
          </div>
          <p> {movie.title} </p>
        </Link>
      </div>
      <div className="">
        <div onClick={() => changeFavorites(movie, index)}>
          {movie.favorite ? (
            <i class="fa fa-star"></i>
          ) : (
            <i class="fa fa-star-o"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
