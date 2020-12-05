import React from "react";
import Movie from "./Movie";

const MoviesList = ({ data, changeFavorites, render }) => {
  data &&
    data.movies.sort((a, b) => (b.favorite || false) - (a.favorite || false));

  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {data &&
        data.movies.map((movie, index) => (
          <Movie
            movie={movie}
            key={movie.id}
            index={index}
            changeFavorites={changeFavorites}
          />
        ))}
    </div>
  );
};

export default MoviesList;
