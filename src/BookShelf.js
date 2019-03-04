import React from "react"
import Book from "./Book"
import './App.css'

class BookShelf extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <ol className="books-grid">
                <Book />          
            </ol>
        )
    }

}

export default BookShelf