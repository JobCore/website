import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { navigate } from '@reach/router'
import GetStarted from '../components/input-getstarted'
import PricingTable from '../components/pricing-table'
import GetStartedPricing from '../components/button-pricing-getstarted'
import FAQ from '../components/faq-question'
import withLocation from '../withLocation'

/* eslint-disable */

const Pricing = ({ search }) => {
    const queryString = search["email"]

    return (
        <Layout>
            <SEO title="Sign Up" />

            {/* <div className="pink-top-image text-light d-flex align-items-center">
                <div className="text-center w-100 px-10">
                    <h1 className="font-size-4em">
                        <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>Pricing</span>
                    </h1>
                </div>
            </div> */}

            <div className="container mt-4">
                <div className="text-center ml-auto mr-auto mt-auto mb-5">
                    {/* <span>
                        It's free for Job Seekers.{' '}
                        <Link to="/job-seekers-signup" style={{ color: '#75c7d2' }}>
                            Sign Up Here
                        </Link>{' '}
                    </span>
                    <br/>
                    <br/> */}
            

                 
                        <div>
                        <h2 className="mt-4">STEP <strong>1</strong> OF <strong>3</strong>: SELECT SUBSCRIPTION</h2>
                        <h6 className="mt-4">Start Your Free Trial</h6>
                        <h6 className="mt-4">Get started with your free 30 day trial with Jobcore</h6>

                    
                        <h3 className="mt-4">Choose the subscription that's right for you:</h3>
                        
                        </div>
              
                      
                </div>
      
                {/* <div className="row d-none d-lg-block">
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
                                    <GetStartedPricing />
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
                                    <GetStartedPricing />
                                </div>
                            </div>
                            <div className="col-2 p-0 border-right text-center" style={{border: "10px solid red"}}>
                                <div className="p-2 align-self-center" style={{ backgroundColor: '#f5ac39', color: 'white', fontSize: '18px' }}>
                                    <strong>Pro</strong>
                                </div>
                                <div style={{ color: '#f5ac39', height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <span style={{ fontWeight: '900', fontSize: '30px' }}>$99.95</span>
                                    <span style={{ display: 'block', fontSize: '12px' }}> USD/month</span>
                                </div>
                                <div style={{ color: 'black' }}>
                                    <GetStartedPricing />
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
                                    <GetStartedPricing />
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
                </div> */}
                {/* <div className="d-lg-none">
                    <div class="card-deck mb-3 text-center">
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#b3519e', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal">Free</h2>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title pricing-card-title">$0/month</h4>
                                <ul class="list-unstyled mt-3 mb-4">
                                    <li>15 - Schedule shifts</li>
                                    <li>Talent Search</li>
                                    <li>Rate Talent</li>
                                    <li>Invite Talent</li>
                                </ul>
                                <GetStartedPricing />
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#2dbe83', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal">Basic</h2>
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
                                <GetStartedPricing />
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#f5ac39', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal">Pro</h2>
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
                                <GetStartedPricing />
                            </div>
                        </div>
                        <div class="card mb-4 box-shadow">
                            <div class="card-header" style={{ backgroundColor: '#b927cf', fontWeight: 'bold', color: 'white' }}>
                                <h2 class="my-0 font-weight-normal">Enterprise</h2>
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
                                <GetStartedPricing />
                            </div>
                        </div>
                    </div>
                </div> */}

                <PricingTable email={queryString}/>

          


            </div>

            <div className="row mt-4 pt-4 justify-content-center">
                <div className="col-md-10">
                <h3 className="text-center mt-5" style={{ fontWeight: 'bolder', color: '#75c7d2' }}>
                    Frequently Asked Questions
                </h3>
                <FAQ question="How much does JobCore cost?" text="So, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />
                <FAQ question="Which plan is right for me?" text="So2, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />
                <FAQ question="How to manage my billing?" text="So3, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />
                <FAQ question="Can I use this for my whole organization, or just my team?" text="So4, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />
                <FAQ question="Can I change my plan?" text="So5, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />
                <FAQ question="Does Jobcore offer plans to non-profits, NGO's and educational institutions?" text="So6, we offer a free trial period so you can fall in love with JobCore s much as we love it. For more details regarding the plans we offer you can read more at 'How does pricing work?'" />

                </div>
      
                </div>
            <div class="jumbotron jumbotron-fluid text-center mb-0 mt-3" style={{ backgroundColor: "#E9ECEF" }}>
                <h2 style={{ fontWeight: '900' }}>
                    Start Using <span style={{ color: '#75c7d2' }}>JobCore</span> today
                </h2>
                <p class="lead">Try it now for free / No credit card needed</p>

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default withLocation(Pricing);
