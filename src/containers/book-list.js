import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key = {book.title} className="list-group-item">
                <h5>
                    {book.title}
                </h5>
                <p>
                    {book.description}<br/>
                    {book.price}
                </p>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <ul className="list-group col-md-4">
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

// connect function in react-redux connects functionality inside mapStateToProps with the view container inside BookList
export default connect(mapStateToProps)(BookList);