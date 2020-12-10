import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Movie from "./Movie";

const MoviesList = ({ data, changeFavorites, displayCategories, display }) => {
  data && data.movies.sort((a, b) => b.favorite - a.favorite);

  return (
    <>
      <div className="movieTitle">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/image/filterk.png"}
            alt="filter"
            onClick={displayCategories}
          />
         { display && <ul class="animate">
            {data &&
              data.genres.map((genre) => {
                return <li class="animate">{genre}</li>;
              })}
          </ul> }
        </div>
        <h1> Famous Movies </h1>
      </div>
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
