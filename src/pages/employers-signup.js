import React, {useState} from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

import axios from 'axios'
import useSignUpFormEmployer from '../hooks/useSignUpFormEmployer.js'
import { navigate } from "@reach/router"
/* eslint-disable */
const handleInput = (value) => {
    if(value){
        let output = "(";
        value.replace( /^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function( match, g1, g2, g3 )
            {
              if ( g1.length ) {
                output += g1;
                if ( g1.length == 3 ) {
                    output += ")";
                    if ( g2.length ) {
                        output += " " + g2; 
                        if ( g2.length == 3 ) {
                            output += " - ";
                            if ( g3.length ) {
                                output += g3;
                            }
                        }
                    }
                 }
              }
            }       
          );        
        return output;
    }
} 
const EmployersSignUp = (props) => {
    const [accountType, setAccountType] = useState('');
    const emailQueryString = decodeURIComponent(props.location.search.replace("?email=", ''))
    const {inputs, handleInputChange, handleSubmit, errors, submitData} = useSignUpFormEmployer(emailQueryString, accountType);
    console.log(errors)
    return(
    <Layout>
        <SEO title="Sign Up" />

        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity">Employers
                        <span className="text-brightblue"> Sign Up</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">
            <div className="mx-auto w-800px-max">



                <h2 className="text-brightblue" style={{fontWeight: "bold"}}>REQUEST A DEMO</h2>
                <div className="text-secondary mb-5" style={{fontSize: "14px"}}>After submitting the contact from a representative will reach out to you to schedule a demo. We look forward to speaking with you!</div>

                <form onSubmit={handleSubmit}>
                    <div className="form-row s700-display-column">
             
                        <div className="form-group col py-1">
                        <label className=""><h6>First Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-user"></span>
  <input id={errors.includes("First name is required") ? "error-form" : null} placeholder="John" maxlength="254" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName}  />
</div>
{errors.includes("First name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("First name is required")]}</strong></div>: null} 

                    </div>
                        
                    <div className="form-group col py-1">
                        <label className=""><h6>Last Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-user"></span>
  <input id={errors.includes("Last name is required") ? "error-form" : null} placeholder="Doe" maxlength="254" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName}  />
</div>
{errors.includes("Last name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Last name is required")]}</strong></div>: null} 

                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Email</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <span class="fas fa-envelope"></span>
  <input id={errors.includes("Business email is required") || errors.includes("Invalid email address") ? "error-form" : null} placeholder="john.doe@gmail.com" maxlength="254" type="text" name="business_email" onChange={handleInputChange} value={inputs.business_email} />
</div>
{errors.includes("Business email is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Business email is required")]}</strong></div>: null} 
{errors.includes("Invalid email address") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Invalid email address")]}</strong></div>: null} 

                    </div>
                       <div className="form-group col py-1">
                        <label className=""><h6>Phone</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fas fa-phone"></span>
  <input id={errors.includes("Phone number is required") ? "error-form" : null} maxlength="254" type="text" name="phone" placeholder="(555) 555 - 5555" onChange={handleInputChange} value={handleInput(inputs.phone)} />
  {errors.includes("Phone number is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Phone number is required")]}</strong></div>: null} 

</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Password</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <span class="fas fa-envelope"></span>
  <input id={errors.includes("Password is required") ||errors.includes("Password must be 8 character long") || errors.includes("Password do not match")  ? "error-form" : null}  maxlength="254" type="password" name="password" onChange={handleInputChange} value={inputs.password} />
  {errors.includes("Password is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password is required")]}</strong></div>: null} 
  {errors.includes("Password must be 8 character long") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password must be 8 character long")]}</strong></div>: null} 
  {errors.includes("Password do not match") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password do not match")]}</strong></div>: null} 

</div>
                    </div>
                       <div className="form-group col py-1">
                        <label className=""><h6>Repeat Password</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fas fa-phone"></span>
  <input id={errors.includes("Password is required") ||errors.includes("Password must be 8 character long") || errors.includes("Password do not match")  ? "error-form" : null}  maxlength="254" type="password" name="repeatPassword" onChange={handleInputChange} value={inputs.repeatPassword} />
  {errors.includes("Password is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password is required")]}</strong></div>: null} 
  {errors.includes("Password must be 8 character long") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password must be 8 character long")]}</strong></div>: null} 
  {errors.includes("Password do not match") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password do not match")]}</strong></div>: null} 

</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <i class="fas fa-shield-alt"></i>
  <input  id={errors.includes("Business name is required") ? "error-form" : null}maxlength="254" type="text" name="business_name" onChange={handleInputChange} value={inputs.business_name} />
  {errors.includes("Business name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf('Business name is required')]}</strong></div>: null} 

</div>
                    </div>
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Website</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-globe-americas"></span>
  <input id={errors.includes("Business website is required") ? "error-form" : null} maxlength="254" type="text" name="business_website" onChange={handleInputChange} value={inputs.business_website} />
  {errors.includes("Business website is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Business website is required")]}</strong></div>: null} 

</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Tell us about your business</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  
  <input id={errors.includes("About your business is required") ? "error-form" : null} maxlength="254" type="text" name="about_business" onChange={handleInputChange} value={inputs.about_business} />
  {errors.includes("About your business is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf('About your business is required')]}</strong></div>: null} 

</div>
                    </div>
                    </div>
          
                    <button
                        className="btn radius btn-purple mt-3 px-5 py-2" type="submit"
                        onSubmit={handleSubmit}
                        disabled={ JSON.stringify(submitData) === JSON.stringify(inputs) ? true: false}
                    >
                        SIGN UP
                    </button>
                    <div className="pt-4 text-gray">
                        <small>
                            By clicking the button above you agree to the 
                            <Link to="/terms">
                                <a> Terms of Service </a>
                            </Link>
                            and
                            <Link to="/privacy">
                                <a> Privacy Policy</a>
                            </Link>
                            .
                            <div className="d-flex justify-content-start mt-3">
                                <input className="mt-1 mr-2" type="checkbox" />
                                <div>
                                    I consent to receive updates and agree to receive occasional
                                    automated text message from JobCore. Message and data rates may
                                    apply. Text STOP to cancel or HELP for help.
                                </div>
                            </div>
                        </small>
                    </div>
                </form>

            </div>
        </div>
    </Layout>
    )
}

export default EmployersSignUp
