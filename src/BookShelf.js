import React from "react";
import Book from "./Book";
import "./App.css";
import BooksApp from "./App";

class BookShelf extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ol className="books-grid">
        {this.props.books.map(book => (
          <Book
            book={book}
            books={this.props.books}
            key={book.id}
            changeShelf={this.props.changeShelf}
          />
        ))}
      </ol>
    );
  }
}

export default BookShelf;
