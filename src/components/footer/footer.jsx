import React, { Component } from 'react';
import './footer.component.css'
const Footer = () => {
    return ( 
       <>
        <div className=" jumbotron footer-container">
            
            <div className="row  justify-content-center">
                <div className="col ">
                <h2><span className="badge badge-info">Social</span></h2>
                <ul>
                    <li> Facebook</li>
                    <li> LinkedIn</li>
                    <li> Instagram</li>
                    <li> Youtube</li>
                </ul>
                </div>

                <div className="col">
                <h2><span className="badge badge-info">Services</span></h2>
                <ul>
                    <li> Deveopment</li>
                    <li> Testing</li>
                    <li> Mentoring</li>
                    <li> Motivating</li>
                </ul>
                </div>

                <div className="col">
                <h2><span className="badge badge-info">Qualification</span></h2>
                <ul>
                    <li> Undergrad</li>
                    <li> Grad</li>
                    <li> Certificate</li>
                    <li> Work Experience</li>
                </ul>
                </div>

           

            

            
         </div>

                <div className="justify-content-center">
                    <br></br>
                            <h6>Copyright@Code&Max 2020 All rights.</h6>
                </div>
        </div>
        
        </>
     );
}
 
export default Footer;