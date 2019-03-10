import React from "react";
import * as BooksAPI from "./BooksAPI";
import BookList from "./BookList";
import "./App.css";
import Search from "./Search";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";

class BooksApp extends React.Component {
  constructor() {
    super();
    this.state = {
      showSearchPage: false,
      books: []
    };

    this.changeShelf = this.changeShelf.bind(this);
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
  }

  changeShelf(changedBook, shelf) {
    BooksAPI.update(changedBook, shelf).then(response => {
      // set shelf for new or updated book
      changedBook.shelf = shelf;
      // update state with changed book
      this.setState(prevState => ({
        books: prevState.books
          // remove updated book from array
          .filter(book => book.id !== changedBook.id)
          // add updated book to array
          .concat(changedBook)
      }));
    });
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            path="/search"
            render={({ history }) => (
              <Search books={this.state.books} changeShelf={this.changeShelf} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <BookList
                  books={this.state.books}
                  changeShelf={this.changeShelf}
                />
                <div className="open-search">
                  <Link to="/search">Search</Link>
                </div>
              </div>
            )}
          />
          )}
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
