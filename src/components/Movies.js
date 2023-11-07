import React from "react";
import { movies } from "../data";

function Movies() {
  console.log(movies);

  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) => (
        <div key={index}>
          <h2>{movie.title}</h2>
          <h5>{movie.time} mins</h5>
          {movie.genres.map((genre, index) => (<li key={index}>{genre}</li>))}
        </div>
      ))}
    </div>
  );
}

export default Movies;
