import React, {useEffect} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import axios from 'axios'
import useSignUpForm from '../hooks/useSignUpForm.js'
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

const JobSeekersSignUp = (props) => {
 
      const emailQueryString = decodeURIComponent(props.location.search.replace("?email=", ''))
        console.log(emailQueryString)
      const {inputs, handleInputChange, handleSubmit} = useSignUpForm(emailQueryString);
    
      return(
    <Layout>
        <SEO title="Sign Up" />

        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 
                // className="font-size-4em"
                style={{fontSize:"3.5vw"}}
                >
                    <span className="p-2 px-4 bg-black-opacity">Job Seekers
                        <span className="text-brightblue"> Sign Up</span>
                    </span>
                </h1>
            </div>
        </div>

        <div className="container my-5">    
            <div className="row justify-content-center mx-auto">
                <div className="col-12 col-md-6">




                <h2 className="text-brightblue">SIGN UP NOW</h2>
                <div className="text-gray pb-4" >
                <small style={{fontSize: "11px"}}>
                    After you submit the form, please check your email for the mobile app download link.
                    Please download the mobile app to complete the sign-up process.
                        </small>

                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group py-1">
                        <label className=""><h6>First Name</h6></label>
                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                        <div class="icon_form">
  <span class="fa fa-user"></span>
  <input placeholder="John" maxlength="254" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} required />
</div>
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Last Name</h6></label>
                        <div class="icon_form">
  <span class="fa fa-user"></span>
  <input placeholder="Doe" maxlength="59" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} required/>
</div>
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Your Email</h6></label>
                        <div class="icon_form">
  <span class="fas fa-envelope"></span>
  <input placeholder="john.doe@gmail.com" maxlength="254" type="email" name="email" onChange={handleInputChange}  defaultValue={emailQueryString} value={inputs.email} required/>
</div>
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Password</h6></label>
                        <div class="icon_form">
  <span class="fas fa-lock"></span>
  <input type="password" name="password" onChange={handleInputChange} value={inputs.password} required/>
</div>
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Re-enter Password</h6></label>
                        <div class="icon_form">
  <span class="fas fa-lock"></span>
  <input type="password" name="repeatPassword" onChange={handleInputChange} value={inputs.repeatPassword} required/>
</div>
                    </div>
                    <div className="form-group py-1">
                        <label className=""><h6>Phone Number</h6></label>
                        <div class="icon_form">
  <span class="fas fa-phone"></span>
  <input type="text" name="phone" placeholder="(555) 555 - 5555" onChange={handleInputChange} value={handleInput(inputs.phone)} required/>
</div>
                    </div>
                    <button
                        className="btn radius btn-purple  mt-2 px-5 py-2"
                        type="submit"
                        onSubmit={handleSubmit}
                    >
                        SIGN UP
                    </button>
                    <div className="pt-4 text-gray">
                        <small style={{fontSize: "11px"}}>
                            By clicking the button above you agree to the<br />
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
                                <div style={{fontSize: "11px"}}>
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
        </div>
    </Layout>

      )
}

export default JobSeekersSignUp
