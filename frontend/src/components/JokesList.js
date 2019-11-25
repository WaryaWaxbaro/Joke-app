import React, { useState, useEffect } from "react";
import { Title } from "./Title";
import AddJoke from "./AddJoke";
import Jokes from "./Jokes";
import axios from "axios";
import { useToggleState } from "../hooks/useToggleState";
import Loader from "./Loader";

function JokesList() {
  const [data, setData] = useState([]);
  const [state, toggle] = useToggleState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getJokes = async () => {
      const response = await axios("/jokes/api");
      const jokesData = await response.data;
      setIsLoading(false);
      setData(() => {
        return jokesData;
      });
    };

    getJokes();
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
    addUpdateDeleteData("post", "/jokes/api", newJoke);
  };

  const updateJoke = (id, newJoke) => {
    addUpdateDeleteData("put", `/jokes/api/${id}`, { joke: newJoke });
  };

  const deleteJoke = id => {
    addUpdateDeleteData("delete", `/jokes/api/${id}`, {});
  };
  return (
    <section className="JokeList">
      <Title title="submit a joke" />
      <AddJoke add={addJoke} />
      <Title title="jokes list" />
      {isLoading ? (
        <Loader />
      ) : (
        <Jokes
          data={data}
          updateJoke={updateJoke}
          toggle={toggle}
          deleteJoke={deleteJoke}
        />
      )}
    </section>
  );
}

export default JokesList;
