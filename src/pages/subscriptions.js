import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Checkout from '../components/checkout'
import { Link } from "gatsby"
import GetStartedPricing from '../components/button-pricing-getstarted'
/* eslint-disable */

export default () => (
    <Layout>
        <SEO title="Plan" />
        <div className="d-none d-lg-block">
                <div className="pink-top-image text-light d-flex align-items-center">
                    <div className="text-center w-100 px-10">
                        <h1 className="font-size-4em">
                            <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>Employers
                        <span className="text-brightblue"> Sign Up</span>
                            </span>
                        </h1>
                    </div>
                </div>

            </div>

            <div className="container mt-4">

                <div className="row d-none d-lg-block">
                    <div className="col shadow">
                        <div className="row justify-content-center border">
                            <div className="col-4 align-self-center text-center" style={{ color: '#75c7d2' }}>
                                <strong className="p-2" style={{ fontSize: '45px' }}>
                                    Pick your plan
                                </strong>
                            </div>
                            <div className="col-2 p-0 border-left border-right text-center">
                                <div className="p-2" style={{ backgroundColor: '#b3519e', fontSize: '18px', color: 'white' }}>
                                    <strong>Free</strong>
                                </div>
                                <div style={{ color: '#b3519e', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: '900', fontSize: '30px' }}>Free</span>
                                </div>
                                <div className="mb-3" style={{ color: 'black' }}>
                                    <Checkout plan="free"/>

                                </div>
                            </div>
                            <div className="col-2 p-0 border-right text-center">
                                <div className="p-2" style={{ backgroundColor: '#2dbe83', fontSize: '18px', color: 'white' }}>
                                    <strong>Basic</strong>
                                </div>

                                <div style={{ color: '#2dbe83', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: '900', fontSize: '30px' }}>$49.95</span>
                                    <span style={{ display: 'block', fontSize: '12px' }}> USD/month</span>
                                </div>

                                <div style={{ color: 'black' }}>
                                <Checkout plan="price_1GuIrZAQGSNQlybY41AJDfoW"/>
                                </div>
                            </div>
                            <div className="col-2 p-0 border-right text-center">
                                <div className="p-2 align-self-center" style={{ backgroundColor: '#f5ac39', color: 'white', fontSize: '18px' }}>
                                    <strong>Pro</strong>
                                </div>
                                <div style={{ color: '#f5ac39', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: '900', fontSize: '30px' }}>$99.95</span>
                                    <span style={{ display: 'block', fontSize: '12px' }}> USD/month</span>
                                </div>
                                <div style={{ color: 'black' }}>
                                <Checkout plan="price_1GuIttAQGSNQlybYWpGxUJyV"/>
                                </div>
                            </div>
                            <div className="col-2 p-0 text-center">
                                <div className="p-1" style={{ backgroundColor: '#b927cf', fontSize: '18px', color: 'white' }}>
                                    <label>Enterprise</label>
                                </div>
                                <div style={{ color: '#b927cf', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: '900', fontSize: '30px' }}>$149.95</span>
                                    <span style={{ display: 'block', fontSize: '12px' }}> USD/month</span>
                                </div>
                                <div style={{ color: 'black' }}>
                                <Checkout plan="price_1GuIv1AQGSNQlybYK7k61xh2"/>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Schedule shifts</span>
                            </div>
                            <div className="col-2 border-right p-4">
                                <span>15</span>
                            </div>
                            <div className="col-2 border-right p-4">
                                <span>Unlimited</span>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#f5ac39' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Talent Search</span>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b3519e' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#2dbe83' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#f5ac39' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Rate Talent</span>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b3519e' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#2dbe83' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#f5ac39' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Invite Talent</span>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b3519e' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4">Unlimited</div>
                            <div className="col-2 border-right p-4" style={{ color: '#f5ac39' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">Create favorites lists</div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4">2</div>
                            <div className="col-2 border-right p-4">Unlimited</div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Geo click in out</span>
                            </div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4">
                                <span>50</span>
                            </div>
                            <div className="col-2 border-right p-4">100</div>
                            <div className="col-2 border-right p-4">Unlimited</div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">Smart Calendar</div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4">
                                <i className="fas fa-check-circle" style={{ color: '#f5ac39' }}></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Auto approve trusted talent</span>
                            </div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4">
                                <i className="fas fa-check-circle" style={{ color: '#f5ac39' }}></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left">
                            <div className="col-4 border-right p-4">
                                <span>Payroll reports</span>
                            </div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4" style={{ color: '#f5ac39' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                        <div className="row text-center justify-content-center border-left border-bottom">
                            <div className="col-4 border-right p-4">
                                <span>One click payments</span>
                            </div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4"></div>
                            <div className="col-2 border-right p-4" style={{ color: '#b927cf' }}>
                                <i className="fas fa-check-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-lg-none">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#b3519e', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal" style={{color:"white"}}>Free</h2>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title pricing-card-title">$0/month</h4>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>15 - Schedule shifts</li>
                                    <li>Talent Search</li>
                                    <li>Rate Talent</li>
                                    <li>Invite Talent</li>
                                </ul>
                                <Checkout plan="free"/>
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#2dbe83', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal" style={{color:"white"}}>Basic</h2>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title pricing-card-title">$49.95/month</h4>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Unlimited - Schedule shifts</li>
                                    <li>Talent Search</li>
                                    <li>Rate Talent</li>
                                    <li>Unlimited - Invite Talent</li>
                                    <li>2 - Create favorite lists</li>
                                    <li>50 - Geo click and out</li>
                                </ul>
                                {/* <Checkout plan="basic"/> */}
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#f5ac39', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal" style={{color:"white"}}>Pro</h2>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title pricing-card-title">$99.95/month</h3>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Schedule shifts</li>
                                    <li>Talent Search</li>
                                    <li>Rate Talent</li>
                                    <li>Invite Talent</li>
                                    <li>Unlimited - Create favorite lists</li>
                                    <li>100 - Geo click and out</li>
                                    <li>Smart Calendar</li>
                                    <li>Auto approve trusted talent</li>
                                    <li>Payroll reports</li>
                                </ul>
                                <Checkout  plan="pro"/>
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#b927cf', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal" style={{color:"white"}}>Enterprise</h2>
                            </div>
                            <div class="card-body">
                                <h3 class="card-title pricing-card-title">$149.95/month</h3>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>Schedule shifts</li>
                                    <li>Talent Search</li>
                                    <li>Rate Talent</li>
                                    <li>Invite Talent</li>
                                    <li>Create favorite lists</li>
                                    <li>Unlimited - Geo click and out</li>
                                    <li>Smart Calendar</li>
                                    <li>Auto approve trusted talent</li>
                                    <li>Payroll reports</li>
                                    <li>One click payments</li>
                                </ul>
                                <Checkout plan="enterprise"/>
                            </div>
                        </div>
                    </div>
                </div>
     

            </div>

            
  
        

    </Layout>
)
