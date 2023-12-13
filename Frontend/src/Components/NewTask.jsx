import React, { useState } from 'react';

function NewTask() {
  const [value, setValue] = useState('');

  async function handleclick() {
    const response = await fetch('http://localhost:3000/post', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        value: value,
      }),
    });

    setValue('');
    const result = await response.json(); // assuming the response is in JSON format
    alert(result.message);
  }

  return (
    <div className="input-group flex-nowrap">
      <span className="input-group-text" id="addon-wrapping">
        Create New Task
      </span>
      <br />
      <input
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="form-control"
        placeholder=""
        aria-label="Username"
        aria-describedby="addon-wrapping"
      />
      <button type="button" className="btn btn-primary" onClick={handleclick}>
        Add
      </button>
    </div>
  );
}

export default NewTask;
