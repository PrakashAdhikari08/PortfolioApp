import React, { Component } from 'react';
import './header.component.css';
import {Link } from 'react-router-dom'
const Header = () => {
    return (  

        <nav className= "navbar bg-info navbar-expand-lg">
            <Link className="navbar-brand brandText" to="/home">Max&Code</Link>
            <div className = "collapse navbar-collapse justify-content-center">
                <Link className="h3color">Home</Link>
                <Link className="h3color">My projects</Link>
                <Link className="h3color">About Me</Link>
                <Link className="h3color">Contact</Link>                
            </div>

            <div className=" collapse navbar-collapse justify-content-end ">
                <button className="btn btn-warning m-2" size="sm">Login</button>
            </div>
            
    
            

        </nav>
    );
}
 
export default Header;