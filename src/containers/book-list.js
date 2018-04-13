import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux'; // action generated helps to forward it to the reducers in the application

import styles from '../styles/style.css';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li 
                    key = {book.title} 
                    onClick = {()=> this.props.selectBook(book)}
                    className="list-group-item">
                    <h5>
                        {book.title}
                    </h5>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group col-md-4">
                    <li className="list-group-item list-group-item-dark font-weight-bold text-uppercase"><h4>List of Books</h4></li>
                    {this.renderList()}
                </ul>                    
            </div>  
        );
    }
}

// the below function will help to return the state into props
function mapStateToProps(state){
    return {
        books: state.books
    };
}

// Anything returned from this funciton will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, result should be passed to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// connect function in react-redux connects functionality inside mapStateToProps with the view container inside BookList
// Promote bookList componenet to a container- it needs to now about this new dispatch method
// selectBook. Make it available as props
export default connect(mapStateToProps, mapDispatchToProps)(BookList);