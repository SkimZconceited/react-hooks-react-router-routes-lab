import React from "react";
import { actors } from "../data";

function Actors() {
  // console.log(actors);

  return (
    <div>
      <h1>Actors Page</h1>

      {actors.map((actor, index) => (
        <div key={index}>
          <h2 key={index}>{actor.name}</h2>
          <ul>
            {actor.movies.map((movie, index) => (
              <li key={index}>{movie}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Actors;
