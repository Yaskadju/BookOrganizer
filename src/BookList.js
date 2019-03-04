import React from "react";
import BookShelf from "./BookShelf";
import "./App.css";

class BookList extends React.Component {
  constructor() {
    super();
    this.state = {
      shelfChange: false
    };
  }

  render() {
    const shelfTypes = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want to Read" },
      { type: "read", title: "Read" }
    ];

    return (
      <div className="list-books-content">
        {shelfTypes.map((shelf, index) => {
          const shelfBooks = this.props.books.filter(
            book => book.shelf === shelf.type
          );
          return (
            <div className="bookshelf" key={index}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <div className="bookshelf-books">
                <BookShelf
                  books={shelfBooks}
                  changeShelf={this.props.changeShelf}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default BookList;
