import React, { useState } from "react";

function ForecastSearch({ getName }) {
  const [name, setName] = useState("");
  return (
    <form onSubmit={e => {
      e.preventDefault();
      getName(name.toLowerCase());
      setName('');
    }}>
      <div className="form-group">
        <label>city</label>
        <input type="text" name="city" id="city" value={name} onChange={e => setName(e.target.value)} placeholder="search city" />
      </div>
    </form>
  );
}

export default ForecastSearch;
