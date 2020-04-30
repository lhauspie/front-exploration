import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand brand">Developers rules</a>
            </div>

            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav">
                    <li className="active"><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new">New</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;