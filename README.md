<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links-->
<!-- search and replace  github_repro & netlify  -->

  

<p align="center">
  <a href="mailto:a.quinkenstein@gmail.com"><img src="https://image.flaticon.com/icons/svg/725/725643.svg" height="20" width="20" /></a>
  <a href="https://linkedin.com/in/AnneQuinkenstein"><img src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" height="20"     width="20" /></a>
</p>

<!-- PROJECT LOGO -->

  <h3 align="center">MOVIEAPP CodeSchool Test</h3>

<br />
<p align="left">
   Objective: 
    Display Movies, mark favorite, which are then shown on the top of the list. 
    Click on Movie to display its Poster. 
    <br />
    Logic is finished in a two hour test. Styling still tbd. 
    <br />
      <a href="https://aquin-movies.netlify.app/">Demo</a>
</p>

## Task
- Fetch movies at [`/movies.json`](https://raw.githubusercontent.com/wildcodeschoolparis/datas/master/movies.json)
- Display the list of movies 
  - Create a `Movie` component
- Place an 'Add to Favourites' button on each `Movie`
  - on click, movie should be added to the favourite list
- Display all the favourites on top of the movie list
- Add a 'Remove from Favourites' button on each favourite
  - on click, it should be removed from the favourite list
- Create a `Pick` button 
  - on click, the movie shoud be displayed in a different page (you will use React Router for this)

## my Solution 

### 1. If Favorite is clicked: Add a new property "favorite" as a key to the Movie- Objekt + set it to Value "true"
'data.movies[index].favorite = true'

### 2. Click on a favorite Movie to put it back to the nonfacorites   
I use the terenary operator: If a property favorite already exists and set to true, then set it to false. 

  const changeFavorites = (movie, index) => {
    movie.favorite? data.movies[index].favorite = false : data.movies[index].favorite = true;   
    setRender(!render); 
  }

### 3. Sort the movie array: 
top: Movies with favorite set to true; 
bottom: Movies with no favorite or favorite set to false; 
``` data &&  data.movies.sort((a, b)=> (b.favorite || false) - (a.favorite || false))``` 

### 4. Display Movie Poster on Click on a single Page 
#### 1. Routing to a Movie with a certain id: 

```javascript
      <Switch>
      <Route path="/movie/:id"  render={ () => 
              <DisplayMovie data={data}/>  
      } /> 
      <Route exact path="/" render={ () => <MoviesList data={data} changeFavorites ={changeFavorites} render={render}/> }/>
      </Switch>
``` 
#### 2. Select the right id + display right title/ Poster 
`useParams` to get the parameter of the Movie-URL
pass the movie-id on click to the single-Page and display the movie wich id equals the parameters of the url
(`+` to change it from string to number)

´´´javascript
import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const DisplayMovie = ({ data }) => {

    let { id } = useParams();

    const matchedMovie = data && data.movies.find((movie) => (movie.id === +id))

    return (
        <>
        <div>
        <Link to='/'>Movielist</Link>
        </div>
        <div>
            <h1> {matchedMovie && matchedMovie.title} </h1>
            <img src={matchedMovie && matchedMovie.posterUrl} alt={matchedMovie && matchedMovie.title} />
        </div>
        </>
    )
}


export default DisplayMovie;

´´´ 




### Built With

- [React](https://reactjs.org/)
- [React Router](https://reacttraining.com/blog/react-router-v6-pre/)
- [React Context](https://reactjs.org/docs/context.html)
- [React Hooks](https://reactjs.org/)

## How to get started
    git clone https://github.com/AnneQuinkenstein/github_repro
    cd github_repro
    yarn install
    yarn start


## Contact

<p> <a target="_blank" href="https://www.linkedin.com/in/anne-quinkenstein"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=Linkedin&logoColor=white"></img></a>
<a target="_blank" href="mailto:a.quinkenstein@gmail.com"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white"></img></a>
</p>

<img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="60"> <em>Say Hi!</em>