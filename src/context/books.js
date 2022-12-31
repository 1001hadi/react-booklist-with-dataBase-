import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

function Provider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/Books");

    setBooks(response.data);
  };

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

  const valueToShare = {
    books,
    createBook,
    deleteById,
    editBookById,
    fetchBooks,
  };

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );
}

export { Provider };
export default BooksContext;
