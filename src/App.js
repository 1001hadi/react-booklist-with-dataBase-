import React, { useState } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";

function App() {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 999999),
        title,
      },
    ];
    setBooks(updateBooks);
  };

  const editBookById = (id, newTitle) => {
    const editedBook = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(editedBook);
  };

  const deleteById = (id) => {
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
