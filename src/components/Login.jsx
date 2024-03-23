import { useState } from 'react';
import { useDispatch } from "react-redux"
import { useNavigate } from 'react-router-dom';
import {addLoginData} from "../redux/slices/loginData"

// import { NavLink } from 'react-router-dom';
function Login() {
    const [formData,setFormData]=useState({
        email:"",
        password:""
       })
       const [loginData,setLoginData]=useState(null)
       const dispatch=useDispatch()
       const navigate=useNavigate()
         
       const inputHandler=(e)=>{
            setFormData({...formData,[e.target.name]:e.target.value})
    
       }
       const submitHandler=(e)=>{
             e.preventDefault()
                  try{
                       if(formData.email && formData.password){
                            setLoginData(formData)
                       dispatch(addLoginData(loginData))
                       
                       setFormData({
                           email:"",
                           password:""
                          })
                          alert("Login Succefully ")
                          navigate("/sidenav")
                       
                      }else{ 
                       
                       
                      
                      }
                  }catch(error){
                        console.log(error)
                  }
                  
            
       }
    
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center h-100 ">
                
                <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form onClick={submitHandler}>
                        <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3 fw-bolder fs-2 text-center">Login to your Account</p>
                        </div>
                        <br />

                        <div className="form-outline mb-4">
                            <label className="form-label fw-medium" for="form3Example3">Email address</label>

                            <input type="email" id="form3Example3" className="form-control form-control-lg"
                                placeholder="Enter a valid email address"  name="email" value={formData.email}
                                onChange={inputHandler} required/>
                        </div>


                        <div className="form-outline mb-3">
                            <label className="form-label fw-medium" for="form3Example4">Password</label>
                            

                            <input type="password" id="form3Example4" className="form-control form-control-lg"
                                placeholder="Enter password"  name="password" value={formData.password} onChange={inputHandler} required/>
                        </div>


                        <div className="text-center text-lg-start mt-4 pt-2">

                            <button type="submit" className="btn text-light btn-lg "
                                style={{ backgroundColor:"#06425c" ,paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                        </div>

                    </form>
                </div>
                <div className="col-md-9 col-lg-6 col-xl-5">
                    <img src="/Assets/images/signin-image.jpg" className="img-fluid" alt="Sample image" /> 
                   
                </div>
            </div>


        </>
    );
}


export default Login











