import React from "react"
import BookShelf from "./BookShelf"
import './App.css'

class BookList extends React.Component {
    constructor() {
        super()
    }

    render() {
        return(
            <ol className="books-grid">
                <BookShelf />          
            </ol>
        )
    }
}

export default BookList