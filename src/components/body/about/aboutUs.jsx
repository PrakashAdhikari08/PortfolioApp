import React from 'react';
import './about.component.css'
import { Link } from 'react-router-dom';
const About = () => {
    return (
    <div className="about-container">  
        <div className="div1-container">
            <div className="div2-container row">
                <div className="col">
                           
                </div>
                <div className="col-8 text-left">
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <span ><h6 style={{color: "white"}}>Hello, My name is </h6></span>
                            <span><h2 className="h2-title">Prakash Adhikari</h2></span>
                            <p style={{color: "white"}}>
                                I am a full stack developer specialized in frontend and backend developement for complex
                                scalable web apps. I also mentor people who want to persue their career in software development.
                                Want to know how I can help you? 
                                Check out <Link style={{color: "black"}}><h6>My Projects.</h6></Link>
                            </p>
                            
                            <Link to="/contact">
                            <button className="btn btn-sm btn-primary"><h6>Hire Me</h6></button>

                            </Link>
                            <br></br>
                            <br></br>
                </div>
                
            </div>
            <div>

            </div>

        </div>
        <div className="skills-container jumbotron">
            <h2 className="h2-skill">Skills Overview</h2>
                <div className=" div-card-container">
            <div className="row  ">
                <div className="col m-2">
                    
                    <div class="card card-container">
                        <div class="card-header">
                            <h6>Frontend</h6>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">ReactJS</li>
                            <li class="list-group-item">JavaScript</li>
                            <li class="list-group-item">html/CSS</li>
                        </ul>
                        </div>
                </div>
                <div className="col m-2">
                    <div class="card card-container">
                                    <div class="card-header">
                                       <h6>Backend</h6> 
                                    </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Java</li>
                                <li class="list-group-item">Spring/Spring-boot</li>
                                <li class="list-group-item">Hibernate</li>
                            </ul>
                    </div>
                        
                </div>
                <div className="col m-2">
                    <div class="card card-container">
                            <div class="card-header">
                                <h6>Others</h6>
                            </div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">MySQL</li>
                                <li class="list-group-item">Git/Github/Bitbucket</li>
                                <li class="list-group-item">Intellij/Eclipse/VS Code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div> 
    );
}
 
export default About;