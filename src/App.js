import React, { useEffect } from "react";
import BookList from "./components/BookList";
import CreateBook from "./components/CreateBook";
import useBooksContext from "./hooks/use-books-context";

function App() {
  const { fetchBooks } = useBooksContext();

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <CreateBook />
    </div>
  );
}

export default App;
