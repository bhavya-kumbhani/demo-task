import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from "react-router-dom";

const SignUp = () => {
   const [inputValue, setInputValue] = useState({});
   const [errors, setErrors] = useState({});

   const regexEmail =
      /^(([^<>()[\],;:\s@]+([^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@]{2,})$/i;

   const handleOnChange = (e) => {
      const { name, value } = e.target;
      if (name === "first_name" && value.charAt(e.length) == " ") return;
      if (name === "surname" && value.charAt(e.length) == " ") return;
      else {
         setInputValue({ ...inputValue, [name]: value });
         setErrors({ ...errors, [name]: "" });
      }
   };

   const Validation = () => {
      let error = {};
      let Formvalid = true;
      if (!inputValue?.first_name) {
         Formvalid = false;
         error["first_name"] = "First name is required*";
      }
      if (!inputValue?.surname) {
         Formvalid = false;
         error["surname"] = "Last name is required*";
      }
      if (!inputValue.email || regexEmail.test(inputValue.email) === false) {
         Formvalid = false;
         error["email"] = "Email is not valid*";
      }
      if (inputValue?.phone?.length < 10) {
         Formvalid = false;
         error["phone"] = "Phone number is not valid*";
      }
      if (!inputValue?.phone || inputValue?.phone < 10) {
         Formvalid = false;
         error["phone"] = "Phone number is required*";
      }
      if (!inputValue.password) {
         Formvalid = false;
         error["password"] = "password is required";
      }
      if (!inputValue.cpassword) {
         Formvalid = false;
         error["cpassword"] = "Confirm password is required";
      }
      if (inputValue.password !== inputValue.cpassword) {
         console.log("inputValueinputValue", inputValue);
         Formvalid = false;
         error["cpassword"] = "Password and Confirm password should be same";
      }
      setErrors(error);
      console.log("Formvalid", Formvalid);
      return Formvalid;
   };



   const onSubmit = async () => {
      let data = {
         first_name: inputValue?.first_name,
         surname: inputValue?.surname,
         email: inputValue?.email,
         phone: inputValue?.phone,
         password: inputValue.password,
         cpassword: inputValue.cpassword
      };
      if (Validation()) return
      await axios.post(`signup api`, data)
         .then((res) => {
            if (res?.status === 200) {
               console.log("res", res);
               setInputValue({
               });
            }
         })
         .catch((error) => {
            console.log("erroe", error);

         });

   }
   return (
      <>
         <div className="w-50 mt-5 h-80 m-auto">
            <div className="row justify-content-center">
               <div className="col-md-6">
                  {/* <div className="container"> */}

                  <div className="tab-content">

                     <div className="tab-pane fade show active" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                           {/* <div className="text-center mb-3">
                              <p>Sign up with:</p>
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

                           <div className="form-outline mb-2">
                              <label className="form-label" for="registerName">Name</label>
                              <input type="text" id="registerName" className="form-control" />
                           </div>

                           <div className="form-outline mb-2">
                              <label className="form-label" for="registerEmail">Email</label>
                              <input type="email" id="registerEmail" className="form-control" />
                           </div>

                           <div className="form-outline mb-2">
                              <label className="form-label" for="registerPhone">Phone</label>
                              <input type="number" id="registerPhone" className="form-control" />
                           </div>

                           <div className="form-outline mb-2">
                              <label className="form-label" for="registerPassword">Password</label>
                              <input type="password" id="registerPassword" className="form-control" />
                           </div>

                           <div className="form-outline mb-2">
                              <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                              <input type="password" id="registerRepeatPassword" className="form-control" />
                           </div>

                           <div className="form-check d-flex justify-content-center mb-4">
                              <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                 aria-describedby="registerCheckHelpText" />
                              <label className="form-check-label" for="registerCheck">
                                 I have read and agree to the terms
                              </label>
                           </div>

                           <button type="submit" className="btn btn-primary btn-block mb-3">Sign Up</button>
                           <div className="text-center">
                              <p>Already have an account? <NavLink to="/">Login</NavLink></p>
                           </div>
                        </form>
                     </div>
                  </div>
                  {/* </div> */}
               </div>
            </div>
         </div>
      </>
   )
}

export default SignUp