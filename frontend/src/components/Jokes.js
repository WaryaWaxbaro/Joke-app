import React from "react";
import Joke from "./Joke";

function Jokes({ data, updateJoke, deleteJoke }) {
  return (
    <ul className="Jokelist__list">
      {data.map(joke => (
        <Joke
          key={joke._id}
          {...joke}
          updateJoke={updateJoke}
          deleteJoke={deleteJoke}
        />
      ))}
    </ul>
  );
}

export default Jokes;
