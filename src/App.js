import React, { useState, useEffect } from "react";
import axios from "axios";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/Books");

    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const createBook = async (title) => {
    const response = await axios.post("http://localhost:3001/Books", {
      title,
    });

    const updateBooks = [...books, response.data];
    setBooks(updateBooks);
  };

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/Books/${id}`, {
      title: newTitle,
    });

    const editedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }
      return book;
    });
    setBooks(editedBook);
  };

  const deleteById = async (id) => {
    await axios.delete(`http://localhost:3001/Books/${id}`);
    const updatedBookd = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBookd);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteById} onEdit={editBookById} />
      <CreateBook onCreate={createBook} />
    </div>
  );
}

export default App;
