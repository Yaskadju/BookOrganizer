import React from "react";
import ShelfChanger from "./ShelfChanger";
import "./App.css";

class Book extends React.Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
              }}
            />
            <ShelfChanger
              book={this.props.book}
              books={this.props.books}
              changeShelf={this.props.changeShelf}
            />
          </div>
          <div className="book-title"> {this.props.book.title} </div>
          {/* Check for authors and render each on separate line if exist*/
          this.props.book.authors &&
            this.props.book.authors.map((author, index) => (
              <div className="book-authors" key={index}>
                {author}
              </div>
            ))}
        </div>
      </li>
    );
  }
}

export default Book;
