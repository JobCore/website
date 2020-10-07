import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import './pricing.css'
const PricingTable = (props) => {
    console.log('this is the email', props.email)
    return (
        <div style={{
            maxWidth: "1200px",
            height: "auto",
            margin: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            textAlign: "center",
        }}>
        {/* <div className="column">
          <div className="pricing-card free">
            <div className="pricing-header">
              <span className="plan-title">FREE 30 DAY TRIAL</span>
              <div className="price-circle">
                <span className="price-title">
                  <small>$</small><span>0</span>
                </span>
                <span className="info">/ Month</span>
              </div>
            </div>
            <div className="badge-box">
            </div>
            <ul>
              <li>
                <strong>1 Schedule shifts</strong> 
              </li>
              <li>
                <strong>Talent Search</strong>
              </li>
              <li>
                <strong>Rate Talent</strong> 
              </li>
              <li>
                <strong>Invite Talent</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>Create Favorites Lists</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>Geo clock in/out</strong>
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
                <Link to={`/employers-signup/?email=${props.email || ""}&plan=free`}className="buy-now" style={{backgroundColor:"#4b7bec"}}>BUY NOW</Link>
            </div>        
          </div>
        </div> */}
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
            <Link to={`/employers-signup/?email=${props.email || "" }&plan=basic`}>

            <div className="badge-box">
              <span>Free 30 Day Trial</span>

            </div>
            </Link>
            <span style={{color: "red", fontSize: '12px'}}>Cancel Anytime</span>

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
              <Link to={`/employers-signup/?email=${props.email || "" }&plan=basic`}className="buy-now" style={{backgroundColor:"#26de81"}}>START TRIAL NOW</Link>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="pricing-card pro">
            <div className="popular">MOST POPULAR</div>
            <div className="pricing-header">
              <span className="plan-title">PRO PLAN</span>
              <div className="price-circle">
                <span className="price-title">
                  <small>$</small><span>99.95</span>
                </span>
                <span className="info">/ Month</span>
              </div>
            </div>
            <Link to={`/employers-signup/?email=${props.email || "" }&plan=pro`}>

            <div className="badge-box">
              <span>Free 30 Day Trial</span>

            </div>
            </Link>
            <span style={{color: "red", fontSize: '12px'}}>Cancel Anytime</span>

            <ul>
            <li>
                <strong>Unlimited Schedule shifts</strong> 
              </li>
              <li>
                <strong>Talent Search</strong>
              </li>
              <li>
                <strong>Rate Talent</strong> 
              </li>
              <li>
                <strong>Invite Talent</strong>
              </li>
              <li>
                <strong>Unlimited Favorites Lists</strong>
              </li>
              <li>
                <strong>100 Geo clock in/out</strong>
              </li>
              <li>
                <strong>Smart Calendar</strong>
              </li>
              <li>
                <strong>Auto approve trusted talent</strong>
              </li>
              <li>
                <strong>Payroll reports</strong>
              </li>
              <li>
                <strong style={{color: "#D3D3D3"}}>One click payments</strong>
              </li>
        
            </ul>
            <div className="buy-button-box">
                <Link to={`/employers-signup/?email=${props.email || "" }&plan=pro`}className="buy-now" style={{backgroundColor:"#f7b731"}}>START TRIAL NOW</Link>

            </div>
          </div>
        </div>
        <div className="column">
          <div className="pricing-card business">
            <div className="pricing-header">
              <span className="plan-title">ENTERPRISE PLAN</span>
              <div className="price-circle">
                <span className="price-title">
                  <small>$</small><span>149.95</span>
                </span>
                <span className="info">/ Month</span>
              </div>
            </div>
            <Link to={`/employers-signup/?email=${props.email || "" }&plan=enterprise`}>

            <div className="badge-box">
              <span>Free 30 Day Trial</span>

            </div>
            </Link>
                      
            <span style={{color: "red", fontSize: '12px'}}>Cancel Anytime</span>
            <ul>
            <li>
                <strong>Unlimited Schedule shifts</strong> 
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
                <strong>Unlimited Favorites Lists</strong>
              </li>
              <li>
                <strong>Unlimited Geo clock in/out</strong>
              </li>
              <li>
                <strong>Smart Calendar</strong>
              </li>
              <li>
                <strong>Auto approve trusted talent</strong>
              </li>
              <li>
                <strong>Payroll reports</strong>
              </li>
              <li>
                <strong>One click payments</strong>
              </li>
            </ul>
            <div className="buy-button-box" >
              <Link to={`/employers-signup/?email=${props.email || ""}&plan=enterprise`}className="buy-now" style={{backgroundColor:"#a55eea"}}>START TRIAL NOW</Link>

            </div>
          </div>
        </div>
      </div>
    )
}
export default PricingTable
