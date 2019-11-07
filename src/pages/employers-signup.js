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
    const {inputs, handleInputChange, handleSubmit, errors} = useSignUpFormEmployer(emailQueryString, accountType);
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
  <input placeholder="John" maxlength="254" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
</div>
                    </div>
                        
                    <div className="form-group col py-1">
                        <label className=""><h6>Last Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-user"></span>
  <input placeholder="Doe" maxlength="254" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required />
</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Email</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <span class="fas fa-envelope"></span>
  <input placeholder="john.doe@gmail.com" maxlength="254" type="text" name="email" onChange={handleInputChange} value={inputs.email} required/>
</div>
                    </div>
                       <div className="form-group col py-1">
                        <label className=""><h6>Phone</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fas fa-phone"></span>
  <input maxlength="254" type="text" name="phone" placeholder="(555) 555 - 5555" onChange={handleInputChange} value={handleInput(inputs.phone)} required/>
</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Password</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <span class="fas fa-envelope"></span>
  <input  maxlength="254" type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
</div>
                    </div>
                       <div className="form-group col py-1">
                        <label className=""><h6>Repeat Password</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fas fa-phone"></span>
  <input maxlength="254" type="password" name="repeatPassword" onChange={handleInputChange} value={inputs.repeatPassword} required/>
</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
                        <i class="fas fa-shield-alt"></i>
  <input  maxlength="254" type="text" name="business_name" onChange={handleInputChange} value={inputs.business_name} required/>
</div>
                    </div>
                    <div className="form-group col py-1">
                        <label className=""><h6>Business Website</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-globe-americas"></span>
  <input  maxlength="254" type="text" name="business_website" onChange={handleInputChange} value={inputs.business_website} required/>
</div>
                    </div>
                    </div>
                    <div className="form-row s700-display-column">
                    <div className="form-group col py-1">
                        <label className=""><h6>Tell us about your business</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  
  <input  maxlength="254" type="text" name="about_business" onChange={handleInputChange} value={inputs.about_business} required/>
</div>
                    </div>
                    </div>
                    <button
                        className="btn radius btn-purple mt-3 px-5 py-2" type="submit"
                        onSubmit={handleSubmit}
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
