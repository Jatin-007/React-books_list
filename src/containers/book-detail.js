import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetail extends Component {
    render () {
        if(!this.props.book){
            return <div>Select a Book to get Started</div>
        }

        return (
            <div className="container col-md-8 card">
                <h3>{this.props.book.title}</h3>
                <hr/>
                <div>
                    <p>
                        {this.props.book.description}<br/>
                        {this.props.book.price}
                    </p>
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