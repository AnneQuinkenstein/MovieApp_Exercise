import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import Movie from "./Movie";

const MoviesList = ({
  data,
  filteredMovies, 
  changeFavorites,
  displayCategories,
  display,
  handleGenre,
}) => {
  filteredMovies && filteredMovies.sort((a, b) => b.favorite - a.favorite);

  return (
    <>
      <div className="movieTitle">
        <div>
          <img
            src={process.env.PUBLIC_URL + "/image/filterk.png"}
            alt="filter"
            onClick={displayCategories}
          />
          {display && (
            <ul class="animate">
              <li onClick={(e) => handleGenre("all")}> all</li>
              {data &&
                data.genres.map((genre) => {
                  return (
                    <li onClick={(e) => handleGenre({ genre })} key={genre}>
                      {" "}
                      {genre}
                    </li>
                  );
                })}
            </ul>
          )}
        </div>
        <h1> Famous Movies </h1>
      </div>
      <div className="App">
        {filteredMovies &&
          filteredMovies.map((movie, index) => (
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
