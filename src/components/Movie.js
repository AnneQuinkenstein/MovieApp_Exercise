import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ movie, changeFavorites, index }) => {
  return (
    <div className="box">
      <Link to={`movie/${movie.id}`}>
        <div className="image-container">
          <img
            src={movie.posterUrl}
            alt={movie.title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.parentNode.parentNode.parentNode.className = "noPic";
            }}
          />{" "}
        </div>
      </Link>
      <div className="star">
        <div onClick={() => changeFavorites(movie, index)}>
          {movie.favorite ? (
            <i class="fa fa-heart"></i>
          ) : (
            <i class="fa fa-heart-o"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default Movie;
