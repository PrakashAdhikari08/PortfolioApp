import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './header.component.css'
import { Link } from 'react-router-dom';

const LoginForm = () => {

    const [modal, setModal] = useState(false);
    
    const isLoginClicked =()=>setModal(!modal);
    return (
        <div>
            <Button className="btn btn-warning" onClick={isLoginClicked}>Code With Max</Button>
                <Modal show={modal} onHide={isLoginClicked}>
                    <Modal.Header>
                    <Modal.Title style={{"fontStyle":"italic"}}>Please Login To Start Learning</Modal.Title>
                    </Modal.Header>
                    <form className="formSize">
                        <Modal.Body>
                            <div className="form-group">
                                  
                                    <input  size="sm" type="text" className="form-control" placeholder="Enter Username"></input>
                            </div>

                            <div className="form-group">
                                 
                                    <input type="password" className="form-control" placeholder="Enter Password"></input>
                            </div>
                                        
                             <div className="form-group form-check">
                                    <label class="form-check-label">
                                    <input type="checkbox" className="form-check-input" ></input>
                                    Remember Me</label>
                             </div>

                             <div>
                                 <label>Don't have account. <Link>Click </Link>to register</label>
                             </div>
                              
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="btn btn-primary btn-sm formSize"><h6>Login</h6></Button>
                            <Button className="btn btn-danger btn-sm formSize" onClick={isLoginClicked}><h6>Cancel</h6></Button>
                        </Modal.Footer>
                    </form>
                    
                </Modal>
           
        </div>


      );
}
 

 
export default LoginForm;
