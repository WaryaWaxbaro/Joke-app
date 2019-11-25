import React from "react";
import EditJoke from "./EditJoke";
import { useToggleState } from "../hooks/useToggleState";
import { formatDistance } from "date-fns";

function Joke({ _id, joke, name, created_date, updateJoke, deleteJoke }) {
  const [state, toggle] = useToggleState(false);
  const handleDelete = () => {
    deleteJoke(_id);
  };

  return (
    <>
      {state ? (
        <EditJoke
          toggle={toggle}
          id={_id}
          updateJoke={updateJoke}
          joke={joke}
        />
      ) : (
        <li className="Jokelist__list--item">
          <p className="Jokelist__list--item-1">{joke}</p>
          <p className="Jokelist__list--item-2">{name}</p>
          <p className="Jokelist__list--item-3">
            Submitted{" "}
            {formatDistance(new Date(created_date), new Date(), {
              addSuffix: true
            })}
          </p>
          <div className="Jokelist_btn">
            <button onClick={toggle} className="Jokelist_btn--1">
              Edit
            </button>
            <button onClick={handleDelete} className="Jokelist_btn--2">
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
}

export default Joke;
