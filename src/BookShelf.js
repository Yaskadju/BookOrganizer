import React from "react";
import Book from "./Book";
import "./App.css";
import BooksApp from "./App";

function BookShelf(props) {
  return (
    <ol className="books-grid">
      {props.books.map(book => (
        <Book
          book={book}
          books={props.books}
          key={book.id}
          changeShelf={props.changeShelf}
        />
      ))}
    </ol>
  );
}

export default BookShelf;
