import React, { useState, useEffect } from 'react';
import { getBooks, deleteBook } from '../../services/api/books'
import { Book } from '../../types/Book'
import '../../assets/Form.css'

const BookList: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      //const data = await getAuthors();
      const data: Book[] = await getBooks(); // Ensure the data is of type Author[]
      setBooks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteBook(id);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="table-container">
      <h2>Book List</h2>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>ISBN</th>
            <th>Publication Year</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.book_id}>
              <td>{book.title}</td>
              <td>{book.genre}</td>
              <td>{book.isbn}</td>
              <td>{book.publication_year}</td>
              <td>{book.author_id}</td>
              <td>
                <button onClick={() => handleDelete(book.book_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;