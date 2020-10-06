import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import './pricing.css'
const PricingPro = (props) => {
    return (
        
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
          <div className="badge-box">
            <span>Free 30 Days Trial</span>

          </div>
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
  
        </div>
      </div>
        
    )
}
export default PricingPro
