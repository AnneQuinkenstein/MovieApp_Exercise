import React, { useEffect, useState } from "react";
import "./App.css";
import MoviesList from "./components/MoviesList";
import { Switch, Route } from "react-router-dom";
import DisplayMovie from "./components/DisplayMovie";

const App = () => {
  const [data, setData] = useState(null);
  const [render, setRender] = useState(true);
  const [display, setDisplay] = useState(false); 

  const fetchData = () => {
    fetch(
      `https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json`
    )
      .then((res) => res.json())
      .then((data) => { 
        data.movies.map(movie => movie.favorite = false); 
        setData(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const changeFavorites = (movie, index) => {
    movie.favorite
      ? (data.movies[index].favorite = false)
      : (data.movies[index].favorite = true);
    setRender(!render);
  };

  console.log(display); 

  const displayCategories = () =>{
   setDisplay(!display); 
  }

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
              changeFavorites={changeFavorites}
              displayCategories={displayCategories}
              display={display}
            />
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
