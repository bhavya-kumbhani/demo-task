import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const Login = () => {
   const [inputValue, setInputValue] = useState({});
   const [errors, setErrors] = useState({})
   const regexEmail =
      /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;
   const validation = () => {
      let error = {};
      let FormValid = true;
      if (!inputValue.email || regexEmail.test(inputValue.email) === false) {
         FormValid = false;
         error["email"] = "Email is not valid*";
      }
      setErrors(error);
      return FormValid;
   }

   const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({ ...inputValue, [name]: value })
      setErrors({ ...errors, [name]: "" })
   }
   return (
      <>
         <div className="w-50 mt-5 h-80 m-auto" >
            <div className="row justify-content-center">
               <div className="col-md-6">

                  <div className="tab-content">
                     <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-login">
                        <form>
                           {/* <div className="text-center mb-3">
                              <p>Sign in with:</p>
                              <button type="button" className="btn btn-link btn-floating mx-1">
                                 <i className="fab fa-facebook-f"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                 <i className="fab fa-google"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                 <i className="fab fa-twitter"></i>
                              </button>

                              <button type="button" className="btn btn-link btn-floating mx-1">
                                 <i className="fab fa-github"></i>
                              </button>
                           </div>

                           <p className="text-center">or:</p> */}

                           <div className="form-outline mb-4">
                              <label className="form-label" for="loginName">Email or username</label>
                              <input type="email" id="loginName" className="form-control" />
                           </div>

                           <div className="form-outline mb-4">
                              <label className="form-label" for="loginPassword">Password</label>
                              <input type="password" id="loginPassword" className="form-control" />
                           </div>

                           <div className="row mb-4">
                              <div className="col-md-6 d-flex justify-content-center">
                                 <div className="form-check mb-3 mb-md-0">
                                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                 </div>
                              </div>

                              <div className="col-md-6 d-flex justify-content-center">
                                 <a href="#!">Forgot password?</a>
                              </div>
                           </div>

                           <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                           <div className="text-center">
                              <p>Not a member? <NavLink to="/register">Register</NavLink></p>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Login;
