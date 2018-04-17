import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../styles/style.css';

class BookDetail extends Component {
    render () {
        if(!this.props.book){
            return <div className="d-flex justify-content-center"><h3>Select a Book to get Started</h3></div>
        }

        return (
            <div className="container col-md-8 card">
            
            <div>
                <h3 className="book-title">{this.props.book.title}</h3>
                <hr />
            </div>

            <div className="row">
                <div className="container">
                    <h6 className="book-author">By: {this.props.book.author}</h6>
                   
                   <div className="description col-md-8 border border-white">
                        <h5>DESCRIPTION</h5>
                        {this.props.book.description}
                   </div>
                   
                   <br/>
                   <img className="img-thumbnail float-right col-md-4 book-image border-right border-left" src={this.props.book.image} alt="image"/>
                </div>
                
                <div className="col-md-12">
                    <p>
                        <div className="card col-md-3 font-weight-bold price">Price: {this.props.book.price}</div>
                        <a href= {this.props.book.url} className="btn float-left book-button"> BUY NOW! </a>
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