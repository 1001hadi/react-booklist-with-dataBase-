import React, { useState } from "react";
import useBooksContext from "../hooks/use-books-context";

const CreateBook = () => {
  const [title, SetTitle] = useState("");
  const { createBook } = useBooksContext();

  const handleChange = (e) => {
    SetTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
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
