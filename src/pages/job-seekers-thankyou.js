import React, {useState, useEffect} from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import axios from 'axios'
import useSignUpForm from '../hooks/useSignUpForm.js'
import { navigate } from "@reach/router"
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
/* eslint-disable */


const JobSeekersSignUp = (props) => {
    const [showAlert, setShowAlert] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
       
          setShowAlert(false)
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    const emailQueryString = decodeURIComponent(props.location.search.replace("?success=", ''))
      console.log(showAlert)
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
        <div className="row text-center justify-content-center">
            <div className="col col-md-4">
        <div class={`alert alert-success text-center mx-auto ${showAlert ? 'alert-thankyou-shown' : 'alert-thankyou-hidden'}`}role="alert">
       Your account has been successfully created.
</div>

            </div>
        </div>
        <div className="container my-5">    
            <div className="row justify-content-center mx-auto">
                <div className="col-12 col-md-6">
                <h2 className="text-brightblue" style={{fontSize: "4em"}}><strong>Thank You!</strong></h2>
                <div className="text-gray pb-4 mb-4" >
                <small style={{fontSize: "18px"}}>
                    Please check your email for the mobile app download link.

                        </small>
                        <br/>
                        <small style={{fontSize: "18px"}}>
                    Please download the mobile app to complete the sign-up process.

                        </small>

                </div>
                <div className="row text-center justify-content-center">
                    <div className="col-6">
                        <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430">
                    <img src={AppleStore} height="90%" width="100%"/>

                        </a>
                    </div>
                    <div className="col-6">
                    <a href="https://play.google.com/store/apps/details?id=co.jobcore.talent">

                        <img src={GooglePlayStore} height="90%" width="100%"/>
                    </a>

                    </div>
                </div>
                




               </div>
   

            </div>
        </div>
    </Layout>

      )
}

export default JobSeekersSignUp
