import React from "react";
import "./App.css";

class ShelfChanger extends React.Component {
  constructor() {
    super();
    this.updateShelf = this.updateShelf.bind(this);
  }

  updateShelf(event) {
    this.props.changeShelf(this.props.book, event.target.value);
  }

  render() {
    // the default current shelf is set to none
    let currentShelf = "none";
    const { book, books } = this.props;

    // if book is in current list, set current shelf to book.shelf
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
        break;
      }
    }

    return (
      <div className="book-shelf-changer">
        <select onChange={this.updateShelf} defaultValue={currentShelf}>
          <option value="none">Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
