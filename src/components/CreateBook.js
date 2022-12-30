import React, { useState } from "react";

const CreateBook = ({ onCreate }) => {
  const [title, SetTitle] = useState("");

  const handleChange = (e) => {
    SetTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    SetTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default CreateBook;
