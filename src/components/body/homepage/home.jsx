import React, { Component } from 'react';
import './home.component.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div class="row jumbotron home-container positonTop row-container">
                

                <div class="col ">
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    <h4>Hello I am Prakash</h4>
                    <h2>Software Developer</h2>
                    
                    <span><button type="submit" className="btn btn-primary badge-pill m-2"><h6>Explore about me</h6></button></span> 
                    <span><p className="pText">Want to be a software developer <Link to="/">Click</Link> here</p></span>

                </div>

                <div class="col ">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    
                    
                    
                        

                
                </div>
       
        
      </div>
     
      );
}
 
export default Home;
