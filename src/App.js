import React from 'react'
import './App.css'
import Search from './Search';
import MainPage from './MainPage';
import * as BooksAPI from './BooksAPI';
import { BrowserRouter, Route } from 'react-router-dom'

class BooksApp extends React.Component {

  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((e) => {
      this.setState({ books: e });
    })


  }
  moveToShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    BooksAPI.getAll().then((e) => {
      this.setState({ books: e });
    })
  }
  render() {

    return (


      <div className="app">
        <Route exact path="/" render={() => (

          <MainPage books={this.state.books} moveToShelf={this.moveToShelf} />

        )} />

        <Route path="/search" render={() => (
          <Search moveToShelf={this.moveToShelf}
            books={this.state.books} />

        )} />
      </div>

    )
  }
}

export default BooksApp
