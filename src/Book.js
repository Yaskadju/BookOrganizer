import React from "react"
import ShelfChanger from "./ShelfChanger"
import './App.css'

class Book extends React.Component {

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` 
                            }}>
                        </div>

                    <ShelfChanger book = {this.props.book}
                                  changeShelf={this.props.changeShelf}  />
                    </div>
                    <div className="book-title">{this.props.book.title}</div>
                    {this.props.book.authors.map((author, index) => (
                        <div className="book-authors" key={index}>{author}</div>
                    ))}
                    
                </div>
            </li>
        )
    }
}

export default Book