import React, { useState, useEffect } from "react";
import {Title} from './Title';
import AddJoke from "./AddJoke";
import Jokes from "./Jokes";
import axios from "axios";
import { useToggleState } from "../hooks/useToggleState";

const jokesArray = [
  {
    _id: "123",
    joke:
      "I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.",
    name: "Anonymous",
    created_date: "2019-11-19T12:55:20.658Z"
  },
  {
    _id: "456",
    joke:
      "Did anybody ever consider that cannibalism would resolve both overpopulation – and world hunger?",
    name: "Jonathan Swift",
    created_date: "2019-11-19T12:56:14.548Z"
  },
  {
    _id: "789",
    joke:
      "Wouldn’t exercise be more fun if calories screamed while you burned them?",
    name: "Bill Murray",
    created_date: "2019-11-19T12:56:59.454Z"
  }
];

function JokesList() {
  const [data, setData] = useState(jokesArray);
  const [state, toggle] = useToggleState(false);

  useEffect(() => {
  }, [state]);

  const addUpdateDeleteData = async (method, url, data) => {
    toggle();
    return await axios({
      method,
      url,
      data
    });
  };

  const addJoke = newJoke => {
    //addUpdateDeleteData('post', URL, newJoke);
    let newData = [...data, newJoke];
    setData(newData);
  };

  const updateJoke = (id, newJoke) => {
    const currentJoke = data.map(joke => {
      if (joke._id === id) {
        return { ...joke, joke: newJoke };
      }
      return joke;
    });
    console.log(currentJoke);
    setData(currentJoke);
  };

  const deleteJoke = id => {
    const currentJoke = data.filter(joke => joke._id !== id);
    setData(currentJoke);
  };
  return (
    <section>
      <Title title="submit a joke" />
      <AddJoke add={addJoke} />
      <Title title="jokes list" />
      <Jokes
        data={data}
        updateJoke={updateJoke}
        toggle={toggle}
        deleteJoke={deleteJoke}
      />
    </section>
  )
}

export default JokesList;
