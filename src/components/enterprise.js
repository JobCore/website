import React, { useState } from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'

import './pricing.css'
const PricingEnterprise = (props) => {
    return (
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
          <div className="badge-box">
            <span>Free 30 Day Trial</span>

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

        </div>
      </div>
        
    )
}
export default PricingEnterprise
