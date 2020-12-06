import React from "react";
import Movie from "./Movie";

const MoviesList = ({ data, changeFavorites, render }) => {
  data &&
    data.movies.sort((a, b) => (b.favorite || false) - (a.favorite || false));

  return (
    <>
      <h1> Famous Movies </h1>
      <div className="App">
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
    </>
  );
};

export default MoviesList;
