import React, { useState } from "react";

function AddJoke({add}) {
  const [newJoke, setJoke] = useState({joke: '', name: ''});

  const getInput = e => {
    setJoke({...newJoke, [e.target.name]: e.target.value});
  };

  return (
    <form className="Jokelist__new-form" onSubmit={e => {
      e.preventDefault();
      add(newJoke);
      console.log(newJoke);
      setJoke({joke: '', name: ''});
    }}>
      <div className="form-group">
        <label htmlFor="joke">Joke</label>
        <input
          type="text"
          id="joke"
          name="joke"
          value={newJoke.joke}
          onChange={getInput}
          placeholder="type a joke here"
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          value={newJoke.name}
          onChange={getInput}
          type="text"
          id="name"
          name="name"
          placeholder="name"
        />
      </div>
      <input className="form-group-btn btn" type="submit" value="submit" />
    </form>
  );
}

export default AddJoke;
