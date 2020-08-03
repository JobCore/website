import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import './pricing.css'
const PricingBasic = (props) => {
    return (
        
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
        
          </div>
        </div>
        
    )
}
export default PricingBasic
