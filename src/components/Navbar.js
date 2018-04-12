import React from 'react';
import styles from '../styles/style.css';

const Navbar = ()=> {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <h3 className="navbar-brand mb-0 h1">Mini BookStore</h3>
                <h3 className="navbar-brand">Created by <span className="font-weight-bold">Jatin Suneja</span></h3>
            </nav>
        </div>
    )
}

export default Navbar;