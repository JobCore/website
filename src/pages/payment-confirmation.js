import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PaymentConfirmation = () => (

  <Layout>
    <SEO title="Payment set up" />
    <div className="container h-100">
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
              <span>Free 30 Day Trial</span>

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
                <button className="btn radius btn-purple mt-3 px-5 py-2">Start Subscription</button>
            </div>
        </div>
    </div>


  </Layout>
)

export default PaymentConfirmation
