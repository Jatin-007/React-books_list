import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/style.css';

class BookDetail extends Component {
    render () {
        if(!this.props.book){
            return <div className="col-md-6 col-md-offset-2"><h3>Select a Book to get Started</h3></div>
        }

        return (
            <div className="container col-md-8 card">
            
            <div>
                <h3 className="book-title">{this.props.book.title}</h3>
                <hr/>
            </div>

            <div>
                <div>
                    By: {this.props.book.author}<br/>
                    {this.props.book.description}<br/>  
                    <img className="img-thumbnail float-right col-md-4" src={this.props.book.image} alt="image"/>
                </div>
                <div className="col-md-12">
                    <p>
                        <div className="card col-md-3 font-weight-bold">Price: {this.props.book.price}</div>
                        <a href={this.props.book.url} className="float-right"> BUY NOW! </a>
                    </p>
                </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        book: state.activeBook 
        // from reducer
    };
}

export default connect(mapStateToProps)(BookDetail);