import React, { useState, useEffect, useRef } from 'react';
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { registerEmployer, loginUser } from '../actions';

import './pricing.css'
const scrollToRef = (ref) => window.scrollTo(0, 0)   

const redirectToCheckout = async (event, plan, token, search, employer) => {

    event.preventDefault()

    const cancelURL = `https://jobcore.co/employers-signup/?email=${search.email}&plan=${search.plan}`
    const successUrl = `https://jobcore.co/payment-success/?employer=${employer}&plan=${search.plan}&token=${token}`
    const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
    
    let selectedPlan = plan == "free" ? process.env.FREE : plan == "basic" ? process.env.BASIC : plan == "pro" ? process.env.PRO : plan == "enterprise" ? process.env.ENTERPRISE : "";
    console.log(selectedPlan);
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: selectedPlan, quantity: 1 }],
      successUrl: successUrl,
      cancelUrl: cancelURL
    })
    
    console.log('strpie', error);

    if (error) {
      console.warn("Error:", error)
    } else console.log('subscrip pagado');
  }
const PaymentConfirmation = (props) => {
    
    scrollToRef()

    console.log(props);
    return (
        <div className="container h-100 mb-4">
        <div className="text-center">
            <ul id="progressbar">
                <li className="active">Select Subscription</li>
                <li className="active">Create an Account</li>
                <li className="active">Set up payment</li>
            </ul>
            <h3>Your subscription starts as soon as you set up payment.</h3>
        </div>
        <div className="row">
            <div className="col">
                <h5 className="mt-4 text-center">SUBSCRIPTION: <strong className="text-brightblue">PRO</strong></h5>
                <h5 className="mt-4 text-center"><button className="btn radius btn-secondary py-2">Change Subscription</button></h5>
                <div style={{
            maxWidth: "300px",
            height: "auto",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
        }}>
       
        <div className="column">
          <div className="pricing-card basic">
            <div className="pricing-header">
              <span className="plan-title">BASIC PLAN</span>
              <div className="price-circle">
                <span className="price-title">
                  <small>$</small><span>49.95</span>
                </span>
                <span className="info">/ Month</span>
              </div>
            </div>
            <div className="badge-box">
              <span>Free 30 Days Trial</span>

            </div>
            <ul>
            <li>
                <strong>Unlimited Schedule Shifts</strong> 
              </li>
              <li>
                <strong>Talent Search</strong>
              </li>
              <li>
                <strong>Rate Talent</strong> 
              </li>
              <li>
                <strong>Unlimited Invite Talent</strong>
              </li>
              <li>
                <strong>2 Create Favorites Lists</strong>
              </li>
              <li>
                <strong>50 Geo clock in/out</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>Smart Calendar</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>Auto approve trusted talent</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>Payroll reports</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>One click payments</strong>
              </li>
      
            </ul>
            <div className="buy-button-box">

            </div>
          </div>
        </div>
        
        
      </div>
            </div>
            <div className="col">
                <h5 className="mt-4"> <strong className>SUMMARY:</strong></h5>
                <div style={{backgroundColor: "#F5F5F5", fontColor:"black"}}>
                    <p style={{color:"black"}}>- FIRST 30 DAYS</p>
                    <p className="text-brightblue"><strong>- FREE</strong></p>
                    <p style={{color:"black"}}>- PRO SUBSCRIPTION</p>
                </div>
                <hr/>
                <div style={{backgroundColor: "#F5F5F5"}}>
                    <p style={{color:"black"}}>- AFTER 30 DAYS</p>
                    <p className="text-brightblue"><strong>- $49.95 / month</strong></p>
                    <p style={{color:"black"}}>- PRO SUBSCRIPTION</p>
                </div> 
                <span>To finish signup, click the <strong><u>Start Subscription</u></strong> button</span>
                <button className="btn radius btn-purple mt-3 px-5 py-2" onClick={()=>{
                    registerEmployer(inputs).then(res => {
                                if (res['id']) {
                                    loginUser({email: res.email, password: validatedData.password}).then((res) => {
                                        if(res['token']){
                                            if(queryStringPlan){
                                                redirectToCheckout(e,queryStringPlan, res['token'], search, res['user']['profile']['employer']);
                                            }
                                        }
                                    })
                            
                                } else {
                                    setLoading(false)
                                    setErrors(res.non_field_errors)
                                }
                            })
                }}>Start Subscription</button>
            </div>
        </div>
    </div>
    )
}
export default PaymentConfirmation
