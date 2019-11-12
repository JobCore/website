
import React, {useState} from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import { Link } from "gatsby"
//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Magnify from '../images/magnifying-glass.png'
import Star from '../images/star.png'
import Clock from '../images/clock.png'

import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import animationEmployer from '../images/animation-employer.gif'
import animationEmployee from '../images/animation-employee.gif'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'
import Customer1 from '../images/customer1.png'
import Customer2 from '../images/customer2.png'
import Customer3 from '../images/customer3.png'
import { navigate } from "@reach/router"
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
import { get } from 'https'
/* eslint-disable */

export default () => {
    const [getStarted, setGetStarted] = useState("");
    const [emailGetStarted, setemailGetStarted] = useState("");

    const handleInputChange = (event) => {
        event.persist();
          
        setemailGetStarted(emailGetStarted => ({...emailGetStarted, [event.target.name]: event.target.value}));
        }

    return(

    <Layout>
        <SEO title="Home" />
       
        <div className="bg-lightgray py-10 m-0">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-left">
                        <h1 className="">
                            Create your shift-schedule & hire your<span className="text-brightblue"> part-time</span> staff
                            {/* <span className="text-brightblue"> get paid </span> */}
                        </h1>

                        <p>
                            JobCore is where events are organized: A curated and validated talent pool of workers
                           and hundreds of companies
                            organizing events and hiring everyday.
                        </p>

                        <div className="pt-3 d-flex align-items-center justify-content-center">

                    
 
                            <input
                                type="email"
                                name="email"
                                className="form-control d-inline w-300px"
                                placeholder="Enter Your Email"
                                value={emailGetStarted.email}
                                onChange={handleInputChange}
                            />
                 

                            <button type="submit" className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline"  onClick={()=>setGetStarted("signup")}>
                                Get Started
                            </button>
                          

                        </div>

                        <div className="text-center pt-5 mb-2">
                            <a className="mr-2" href="https://play.google.com/store/apps/details?id=co.jobcore.talent&hl=en_US">
                                <img src={GooglePlayStore} width="125px" height="40px"/>
                            </a>
                            <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430?app=itunes&ign-mpt=uo%3D4">
                                <img src={AppleStore} width="125px" height="40px" />
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <Player
                            video="izRld2t-Xw8"
                            height={'300px'}
                            style={{ backgroundColor: '#dcdbdb' }}
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className="py-10 px-10 text-center">
            <div className="container">
              
<div className="py-10 px-10 text-center">
            <div className="container">
                <h3>
                    Finally a centralized{' '}
                    <span className="text-brightblue">source of talents </span>
                    and companies!
                </h3>

                <p className="pt-3">
                   JobCore is a platform focused on the hospitality industry that connects carterers, single location full service restaurants 
                   nightclubs, bars and janitorial services companies to qualified part-time workes.
                </p>
                <p>Employers create their calendar shifts, recruit workers from out curated pool, communicate with them and schedule, pay, and rat ethem quickly and efficiently</p>

                <div className="mt-5 d-flex justify-content-between align-items-end">
                    <div className="w-250px mb-auto">
                        <img src={Suitcase} />
                        <h6 className="mt-3">Publish Shifts</h6>
                        <p className="text-secondary font-size-13px">
                            Setup your job and preferences in a custom calendar.
                        </p>
                    </div>
                    <div className="w-250px mb-auto">
                        <img src={Magnify} />
                        <h6 className="mt-2">Find Talent</h6>
                        <p className="text-secondary font-size-13px">
                            Access a talent pool of people in Miami, rated with
                            experience.
                        </p>
                    </div>
                    <div className="w-250px mb-auto">
                        <img src={Calendar} />
                        <h6 className="mt-3">Manage Schedule</h6>
                        <p className="text-secondary font-size-13px">
                            Automatically send employees job location and shift
                            times.
                        </p>
                    </div>
                </div>

                <div className="mt-5 d-flex justify-content-between align-items-end">
                    <div className="w-250px mb-auto">
                        <img src={Clock} />
                        <h6 className="mt-1">Clock In-Out</h6>
                        <p className="text-secondary font-size-13px">
                            Track employee performance with GPS located clock
                            in-out features.
                        </p>
                    </div>
                    <div className="w-250px mb-auto">
                        <img src={Money} />
                        <h6 className="mt-2">Payroll Reports</h6>
                        <p className="text-secondary font-size-13px">
                            Instant payroll reports based on employee activity.
                        </p>
                    </div>
                    <div className="w-250px mb-auto">
                        <img src={Envelope} />
                        <h6 className="mt-2">Direct Payments</h6>
                        <p className="text-secondary font-size-13px">
                            Direct ACH payments to employee bank accounts.
                        </p>
                    </div>
                </div>
            </div>
        </div>
                
            </div>
        </div>

        <div className="bg-lightgray px-10 py-10 m-0 text-center">
            <h3 className="mb-2">
                Finally a job platform for the
                <span className="text-brightblue"> hospitality industry!</span>
            </h3>

            <p>
                Finding talent and jobs in the hospitality industry has never
                been easier.
                <br />
                Sign up today and give it a try!
            </p>

            <div className="mt-4 d-flex align-items-center justify-content-center">
            <input
                                type="email"
                                name="email"
                                className="form-control d-inline w-300px"
                                placeholder="Enter Your Email"
                                onChange={handleInputChange} value={emailGetStarted.email} 
                            />

                <button className="btn radius btn-purple my-2 ml-2 px-4 py-2" onClick={()=>setGetStarted("signup")}>
                    Get Started
                </button>
            </div>
        </div>
        <div className="py-10 text-left d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 col-md-6 my-auto">
            <div>
                <h3 className="ml-4">
                    Employers can manage
                    <br />
                    <span className="text-brightblue"> talent</span> & payroll
                </h3>
                <ul className="purple-checkmark text-left mt-3">
                    <li>Setup your event and preferences</li>
                    <li>Publish shifts to hundreds of curated talents</li>
                    <li>Hire the talents you want</li>
                    <li>Talent clocks-in / out using our app</li>
                    <li>Manage payroll and pay faster</li>
                    <li>Everything employers need in one platform!</li>
                </ul>
            </div>
                    
                </div>
                <div className="col-12 col-md-6">
            <img  className="animated-employer mx-auto d-block pb-3" style={{width: "100%"}} src={animationEmployer} />

                </div>
            </div>

        </div>
        <div className="text-left d-flex justify-content-center align-items-center">
            <div className="row">
                <div className="col-12 col-md-4">

            <img className="animated-employee mx-auto d-block pb-3" src={animationEmployee} />
                </div>
                <div className="col-md-8 my-auto">

            <div>
                <h3 className="ml-4">
                    Job seekers can find 
                    <br/>
                    jobs in minutes and
                    <br />
                    <span className="text-brightblue"> get paid</span> faster
                </h3>
                <ul className="purple-checkmark text-left mt-3">
                    <li>Setup your location, profile and preferences</li>
                    <li>Start receiving invites to work on shifts based <br />on your preferences</li>
                    <li>Apply to the invitations you like</li>
                    <li>Get to work: clock-in and clock-out at the event</li>
                    <li>Get paid in less than 24 hrs</li>
                    <li>It is that simple!</li>
                </ul>
            </div>
                </div>
            </div>

        </div>

        

        <div className="bg-lightgray px-5 py-10 m-0 text-center">
            <h3 className="mb-1">
                It's never been easier to
                <span className="text-brightblue"> find jobs and hire</span> in
                the hospitality industry.
            </h3>

            <p>
                Sign up today and experience the difference. It's fast and easy!
            </p>

            <button className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3" onClick={()=>setGetStarted("signup")}>
                Get Started
            </button>
        </div>
        <div class={getStarted !== "" ? "modal d-block" : "modal"} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header" style={{borderStyle: "none"}}>
        <h5 class="modal-title" id="exampleModalLabel">Are you a jobseeker or an employer?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={()=>setGetStarted("")}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="row justfy-content-center text-center p-4">
          <div className="col">
          <button type="button" class="btn btn-primary" value="jobseeker" onClick={(email) => navigate(`/job-seekers-signup/${emailGetStarted["email"] ? "?email=" + emailGetStarted["email"] : '' }`)} style={{color: "white", backgroundColor: "#a319a3", border: "none", borderRadius: "30px", width: "140px"}}>Jobseeker</button>

          </div>
          <div className="col">
          <button type="button" class="btn btn-primary" value="employer" onClick={(email) => navigate(`/employers-signup/${emailGetStarted["email"] ? "?email=" +emailGetStarted["email"] : '' }`)} style={{color: "white", backgroundColor: "#12687E", border: "none", borderRadius: "30px", width: "140px"}}>Employer</button>

          </div>
      </div>
    
    </div>
  </div>
</div>
        <div className="py-10 text-left text-center">
            <h3 className="mb-2">
                The <span className="text-brightblue">platform</span> at a
                glance
            </h3>

            <p>
                JobCore provides an easy to use end-to-end experience for
                employers and job seekers
                <br />
                in the hospitality industry on mobile and desktop.
            </p>


            <div className="background-image-platform2" />


            <h3 className="my-4">
                What our <span className="text-brightblue">customers</span> are
                saying about us
            </h3>

            <div className="row justify-content-center py-4">

            <div className="col-md-3 pt-2 pr-0">
                <Player
                            video="izRld2t-Xw8"
                         
                            style={{ width: '100%', height:"200px" }}
                        />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                        <span>
                            <div>
                                <small
                             
                                >
                                    Tanya,
                                    </small>
                            </div>
                            <div>
                                <small
                                
                                    className="text-gray"
                                >
                                    Victoria
                                    </small>
                            </div>
                        </span>

                            </div>
                            <div className="col-6 col-md-3 my-auto">

                        <img src={Review1} />
                            </div>

                        </div>
                  
                </div>

                <div className="col-md-3 pt-2 pr-0">
                <Player
                            video="izRld2t-Xw8"
                         
                            style={{ width: '100%',height:"200px" }}
                        />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                        <span>
                            <div>
                                <small
                             
                                >
                                    Tanya,
                                    </small>
                            </div>
                            <div>
                                <small
                                
                                    className="text-gray"
                                >
                                    Victoria
                                    </small>
                            </div>
                        </span>

                            </div>
                            <div className="col-6 col-md-3 my-auto">

                        <img src={Review1} />
                            </div>

                        </div>
                  
                </div>
                <div className="col-md-3 pt-2 pr-0">
                <Player
                            video="izRld2t-Xw8"
                         
                            style={{ width: '100%', height: "200px" }}
                        />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                        <span>
                            <div>
                                <small
                             
                                >
                                    Tanya,
                                    </small>
                            </div>
                            <div>
                                <small
                                
                                    className="text-gray"
                                >
                                    Victoria
                                    </small>
                            </div>
                        </span>

                            </div>
                            <div className="col-6 col-md-3 my-auto">

                        <img src={Review1} />
                            </div>

                        </div>
                  
                </div>

            </div>

            <h3 className="pt-5 mt-5">
                It's never been easier
                <span className="text-brightblue"> find jobs and hire</span> in
                the hospitality industry.
            </h3>

            <p className="mb-4">
                Sign up today and experience the difference. It's fast and easy!
            </p>

            <div className="d-flex align-items-center justify-content-center">
            <input
                                type="email"
                                name="email"
                                className="form-control d-inline w-300px"
                                placeholder="Enter Your Email"
                                onChange={handleInputChange} value={emailGetStarted.email} 
                            />

                <button className="btn radius btn-purple my-2 ml-2 px-4 py-2" onClick={()=>setGetStarted("signup")}>
                    Get Started
                </button>
            </div>
        </div>
    </Layout>
    )
}
