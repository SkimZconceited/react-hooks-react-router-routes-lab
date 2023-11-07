import React from "react";
import { directors } from "../data";

function Directors() {
  // console.log(directors);
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) => (
        <div key={index}>
          <h2>Directors: {director.name}</h2>
          {director.movies.map((movie, index) => (
            <li key={index}>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors;
