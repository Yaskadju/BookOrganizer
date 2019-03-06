import React from "react";
import Book from "./Book";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      query: "",
      newBooks: [],
      searchError: false
    };
    this.getBooks = this.getBooks.bind(this);
  }

  getBooks(event) {
    const query = event.target.value;

    this.setState({
      query
    });

    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length > 0
          ? this.setState({ newBooks: books, searchError: false })
          : this.setState({ newBooks: [], searchError: true });
      });
    } else this.setState({ newBooks: [], searchError: false });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              name="query"
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={this.getBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          <div>
            <ol className="books-grid">
              {this.state.newBooks.map(book => (
                <Book
                  book={book}
                  books={this.props.books}
                  changeShelf={this.props.changeShelf}
                  key={book.id}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
