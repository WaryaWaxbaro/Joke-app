import React, {useState} from 'react'

function EditJoke({toggle, id, updateJoke, joke}) {
  const [text, setText] = useState(joke);
  return (
    <form className="form-edit" onSubmit={e => {
      e.preventDefault();
      updateJoke(id, text);
      console.log('id', id, 'value', text);
      toggle();
    }}>
      <input type="text" value={text} onChange={e => setText(e.target.value)}/>
    </form>
  );
}

export default EditJoke
