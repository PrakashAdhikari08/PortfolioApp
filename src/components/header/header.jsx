import React, { Component } from 'react';
import './header.component.css';
import {Link } from 'react-router-dom'
import LoginForm from './loginForm'


const Header = () => {
    return (  

        <nav className= "navbar fixed-top navbar-expand-lg nav-container bg-primary">
            
                    <Link className="navbar-brand brandText" to="/home">CodeScholar</Link>
                    <div className = "collapse navbar-collapse justify-content-center">
                        <Link to="/home" className="h3color">Home</Link>
                        <Link className="h3color">My projects</Link>
                        <Link to="/about" className="h3color">About Me</Link>
                        <Link to="/contact" className="h3color">Contact</Link>                
                    </div>

                   

                    {/* <div className=" collapse navbar-collapse justify-content-end ">
                        <button className="btn btn-warning m-2" size="sm">Learn with Max</button>
                    </div> */}
                    <LoginForm/>
           
            
    
            

        </nav>
    );
}
 
export default Header;