import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <div>
<nav className="navbar navbar-expand-md fixed-top p-3">
        <div className="container">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><i className="fas fa-caret-square-down fa-2x"></i></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/portfolio">Recent Works</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link" href="/blogs">Blog</a>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href="/contact">Contact</a>
                    </li>
                    </ul>
            </div>
        </div>
    </nav>
        </div>
    );
};

export default Nav;