import React, { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import { Switch, Route } from "react-router-dom";
import DisplayMovie from "./components/DisplayMovie";

const App = () => {
  const [data, setData] = useState(null);
  const [render, setRender] = useState(true);
  const [display, setDisplay] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState(null);

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`
    )
      .then((res) => res.json())
      .then((data) => {
        data.movies.map((movie) => (movie.favorite = false));
        setData(data);
        setFilteredMovies(data.movies); 
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeFavorites = (movie, index) => {
    movie.favorite
      ? (filteredMovies[index].favorite = false)
      : (filteredMovies[index].favorite = true);
    setRender(!render);
  };

  const displayCategories = () => {
    setDisplay(!display);
  };

  const handleGenre = (genre) => { 
   
    if (genre === "all"){
      setFilteredMovies(data.movies) 
    } else {
      setFilteredMovies(data.movies.filter((movie) =>
        movie.genres.includes(genre.genre)));
      }
  
    setDisplay(false);
    console.log(filteredMovies)
  };

  return (
    <div>
      <Switch>
        <Route path="/movie/:id" render={() => <DisplayMovie data={data} />} />
        <Route
          exact
          path="/"
          render={() => (
            <MoviesList
              data={data}
              filteredMovies={filteredMovies}
              changeFavorites={changeFavorites}
              displayCategories={displayCategories}
              display={display}
              handleGenre={handleGenre}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
