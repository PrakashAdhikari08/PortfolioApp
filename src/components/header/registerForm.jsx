import React, { useState, useEffect } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './header.component.css'
import { Link } from 'react-router-dom';
import * as Yup from "yup";
import { useFormik } from "formik";
import LoginForm from './loginForm';

const initialValues = {
    username: "",
    firstName:"",
    lastName:"",
    password: "",
  };

  const onSubmit = (values) => {
    console.log("form data " + values.username + "  " + values.password);
  };


  const validationSchema = Yup.object({
    username: Yup.string()
      .email("Invalid Email Address")
      .required("Username is requied"),
      firstName: Yup.string().required("Enter first Name"),
      lastName: Yup.string().required("Last Name is Mandatory"),
    password: Yup.string().required("Password Required"),
  });
  

const Register = (props) => {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
      });

    const [modal, setModal] = useState(props.register);
    
    const [pwType, setPwType] = useState("password");

    const [passwordVisible, setPasswordVisible] = useState(false);

    const visibilityClicked=()=>{
      setPasswordVisible(!passwordVisible);
      setPwType("text");
      
    }

    const noVisibilityClicked=()=>{
      setPasswordVisible(!passwordVisible);
      setPwType("password");
      
    }

    const isCancelClicked = ()=> {
        setModal(false);
       
    }
   
      
  
    return (
        <div>
                <Modal  style={{"width": "30%"}}show={modal} onHide={isCancelClicked} className=" modalSetup">
                    <Modal.Header className="justify-content-center">
                    <Modal.Title style={{"fontStyle":"italic"}}>Register Form</Modal.Title>
                    </Modal.Header>
                    <form className="formSize" onSubmit={formik.handleSubmit}>
                        <Modal.Body>
                      <div className="row">
                        <div className="form-group col">
                            
                                  <input  size="sm" type="text" name="firstName" className="form-control " 
                                  placeholder="First Name*"
                                  {...formik.getFieldProps("firstName")}></input>

                                      {formik.touched.firstName && formik.errors.firstName ? (
                                      <label size='sm' style={{ color: "red" }}>
                                      {formik.errors.firstName}
                                      </label>
                                  ) : null}
                            </div> 
                            <div className="form-group col">
                                  <input  size="sm" type="text" name="lastName" className="form-control " 
                                  placeholder="Last Name*"
                                  {...formik.getFieldProps("lastName")}></input>

                                      {formik.touched.lastName && formik.errors.lastName ? (
                                      <label size='sm' style={{ color: "red" }}>
                                      {formik.errors.lastName}
                                      </label>
                                  ) : null}
                            
                          </div>
                          </div>
                            <div className="form-group">
                                  
                                    <input  size="sm" type="email" name="username" className="form-control " 
                                    placeholder="Enter Username*"
                                    {...formik.getFieldProps("username")}></input>

                                        {formik.touched.username && formik.errors.username ? (
                                        <label size='sm' style={{ color: "red" }}>
                                        {formik.errors.username}
                                        </label>
                                    ) : null}
                            </div>

                            <div className="form-group input-container">
                                 
                                    <input type={pwType} name="password" className="form-control " 
                                    placeholder="Enter Password*"
                                    {...formik.getFieldProps("password")}></input>
                                    {passwordVisible?
                                    <Link onClick={noVisibilityClicked}>
                                    <svg class="bi bi-eye-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                                    <path fill-rule="evenodd" d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                                    </svg>
                                    </Link>
                                    :
                                    <Link onClick={visibilityClicked}>
                                    <svg class="bi bi-eye-slash-fill" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.79 12.912l-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708l-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829z"/>
                                    <path fill-rule="evenodd" d="M13.646 14.354l-12-12 .708-.708 12 12-.708.708z"/>
                                    </svg>
                                    </Link>
                                    }
                                       
                            </div>
                            <div>
                                  {formik.touched.password && formik.errors.password ? (
                                  <label size='sm' style={{ color: "red" }}>
                                  {formik.errors.password}
                                  </label>
                                  ) : null} 
                           </div>
                                         
                        </Modal.Body>

                        <Modal.Footer>
                            <Button 
                            type="submit"
                            className="btn btn-primary btn-sm formSize"
                            disabled={!(formik.isValid && formik.dirty)}
                            ><h6>Login</h6></Button>
                            <Button className="btn btn-danger btn-sm formSize" onClick={isCancelClicked}><h6>Cancel</h6></Button>
                        </Modal.Footer>
                    </form>
                    
                </Modal>
           
        </div>


      );
}
 

 
export default Register;
