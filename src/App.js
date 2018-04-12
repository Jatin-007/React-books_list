import React, { Component } from 'react';
import BookList from './containers/book-list';
import BookDetail from './containers/book-detail';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar/>
        <BookList />
        <BookDetail/>
      </div>
    );
  }
}

export default App;