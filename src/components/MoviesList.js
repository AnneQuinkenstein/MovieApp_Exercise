import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Movie from "./Movie";

const MoviesList = ({ data, changeFavorites, render }) => {
  data && data.movies.sort((a, b) => b.favorite - a.favorite);

  return (
    <>
      <h1> Famous Movies </h1>
      <div className="App">
        {data &&
          data.movies.map((movie, index) => (
            <SwitchTransition>
              <CSSTransition key={movie.favorite} classNames="singleMovie">
                <Movie
                  movie={movie}
                  key={movie.id}
                  index={index}
                  changeFavorites={changeFavorites}
                />
              </CSSTransition>
            </SwitchTransition>
          ))}
      </div>
    </>
  );
};

export default MoviesList;
