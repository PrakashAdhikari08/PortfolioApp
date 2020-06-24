import React, { Component } from 'react';
import './home.component.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div class="row positonTop">
        <div class="col jumbotron">
        <p>Hello 2</p>    
        </div>

        <div class="col jumbotron">
            <br></br>
            <br></br>
            <br></br>
        <h4>Hello I am Prakash</h4>
        <h2>Software Developer</h2>
        
           <span><button type="submit" className="btn btn-primary badge-pill m-2"><h6>Explore about me</h6></button></span> 
        <span><p className="pText">Want to be a software developer <Link to="/">Click</Link> here</p></span>

        </div>
        
      </div>
      );
}
 
export default Home;
