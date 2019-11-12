import React, { useState } from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import { navigate } from "@reach/router"

//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import FindJobs from '../images/find-jobs.png'
import Star from '../images/star.png'
import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import OpenEnvelope from '../images/open-envelope.png'
import animationEmployee from '../images/animation-employee.gif'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'
import Customer1 from '../images/customer1.png'
import Customer2 from '../images/customer2.png'
import Customer3 from '../images/customer3.png'
import PlatformGlance1 from '../images/platform-glance-1.png'
import PlatformGlance2 from '../images/platform-glance-2.png'
import PlatformGlance3 from '../images/platform-glance-3.png'
import PlatformGlance4 from '../images/platform-glance-4.png'
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
/* eslint-disable */

const JobSeekers = () => {
    const [getStarted, setGetStarted] = useState('');
    const [emailGetStarted, setemailGetStarted] = useState('');

    const handleInputChange = (event) => {
        event.persist();

        setemailGetStarted(emailGetStarted => ({ ...emailGetStarted, [event.target.name]: event.target.value }));
    }

    return (


        <Layout>
            <SEO title="Job Seekers" />

            <div className="bg-lightgray py-10 m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left">
                            <h1 className="">
                                Get work fast &{' '}
                                <span className="text-brightblue">get paid </span>
                                the same day
                        </h1>

                            <p>
                                JobCore is where events are organized: A talent pool
                                of curated workers and hundreds of companies
                                organizing events and hiring everyday.
                        </p>

                            <div className="pt-3 d-flex align-items-center justify-content-center">
                                <input
                                    type="email"
                                    name="email"
                                    className={getStarted === false ? "form-control d-inline w-300px is-invalid" : "form-control d-inline w-300px"}
                                    placeholder="Enter Your Email"
                                    onChange={handleInputChange} value={emailGetStarted.email}
                                />

                                <button className="btn radius btn-purple my-2 ml-2 px-4 py-2" onClick={() => emailGetStarted.email.length > 0 && validator.isEmail(emailGetStarted.email) ? setGetStarted(true) : setGetStarted(false)} >
                                    Get Started
                </button>
                            </div>

                            <div className="text-center pt-5">
                                <a className="mr-2" href="https://play.google.com/store/apps/details?id=co.jobcore.talent&hl=en_US">
                                    <img src={GooglePlayStore} width="125px" height="40px" />
                                </a>
                                <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430?app=itunes&ign-mpt=uo%3D4">
                                    <img src={AppleStore} width="125px" height="40px" />
                                </a>
                            </div>
                        </div>

                        <div className="col-md-6 pt-3   ">
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
                    <h3>
                        Finally a centralized{' '}
                        <span className="text-brightblue">source of talents </span>
                        and companies!
                </h3>

                    <p className="pt-3">
                        Sign up, setup your job preferences and start receiving
                    invitations to work as Chef, Cook, <br />
                        Bartender, Cleaning Staff or any other role surrounding
                        hospitality.
                </p>

                    <div className="mt-5 d-flex justify-content-between align-items-end">
                        <div className="w-250px mb-auto">
                            <img src={FindJobs} />
                            <h6 className="mt-2">Find Jobs</h6>
                            <p className="text-secondary font-size-13px">
                                Access to many jobs in South Florida and get hired some day.
                        </p>
                        </div>
                        <div className="w-250px mb-auto">
                            <img src={OpenEnvelope} />
                            <h6 className="mt-3">Receive Invitations</h6>
                            <p className="text-secondary font-size-13px">
                                Setup your job preferences to receive job invitations you want.
                        </p>
                        </div>
                        <div className="w-250px mb-auto">
                            <img src={Suitcase} />
                            <h6 className="mt-3">Get Hired</h6>
                            <p className="text-secondary font-size-13px">
                                Apply to jobs and get hired from your phone, schedule your work.
                        </p>
                        </div>
                    </div>

                    <div className="mt-5 d-flex justify-content-between align-items-end">
                        <div className="w-250px mb-auto">
                            <img src={Calendar} />
                            <h6 className="mt-1">Manage Schedule</h6>
                            <p className="text-secondary font-size-13px">
                                Use our mobile app to know where and when to start work.
                        </p>
                        </div>
                        <div className="w-250px mb-auto">
                            <img src={Money} />
                            <h6 className="mt-2">Paid Same Day</h6>
                            <p className="text-secondary font-size-13px">
                                Clock in/out & receive the money into your account in less than 24hrs.
                        </p>
                        </div>
                        <div className="w-250px mb-auto">
                            <img src={Star} />
                            <h6 className="mt-2">Rate Employers</h6>
                            <p className="text-secondary font-size-13px">
                                Find the best employers that have positive ratings.
                        </p>
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
                        className={getStarted === false ? "form-control d-inline w-300px is-invalid" : "form-control d-inline w-300px"}
                        placeholder="Enter Your Email"
                        onChange={handleInputChange} value={emailGetStarted.email}
                    />

                    <button className="btn radius btn-purple my-2 ml-2 px-4 py-2" onClick={() => emailGetStarted.email.length > 0 && validator.isEmail(emailGetStarted.email) ? setGetStarted(true) : setGetStarted(false)} >
                        Get Started
                </button>
                </div>
            </div>

            <div className="pt-10 text-left d-flex justify-content-center align-items-center">
                <div className="row">
                    <div className="col-12 col-md-4">

                        <img className="animated-employee mx-auto d-block pb-3" src={animationEmployee} />
                    </div>
                    <div className="col-md-8 my-auto pb-2">

                        <div>
                            <h3 className="ml-4">
                                Find jobs in minutes and
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

                <button
                    className="btn radius btn-purple mt-3 my-2 ml-2 px-5 py-3"
                >
                    Get Started
            </button>
            </div>

            <div className="py-10 text-center">
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
                {/* 4 Cards  Find Talent, Job Preference, Check in and out, Get paid same day*/}
                {/* <div className="background-image-platform" /> */}

                <div class="card-deck mx-auto" style={{ width: "75%" }}>
                    <div class="card shadow p-3 mb-5 bg-white rounded">


                        <img class="card-img-top " src={PlatformGlance1} alt="Card image cap" style={{ height: "120px" }} />

                        <div class="card-body">
                            <p class="card-title">Find Talent</p>
                        </div>

                    </div>
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <img class="card-img-top" src={PlatformGlance2} alt="Card image cap" style={{ height: "120px" }} />
                        <div class="card-body">
                            <p class="card-title">Job Preferences</p>
                        </div>

                    </div>
                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <img class="card-img-top" src={PlatformGlance3} alt="Card image cap" style={{ height: "120px" }} />
                        <div class="card-body">
                            <p class="card-title">Clock In and Out</p>
                        </div>

                    </div>

                    <div class="card shadow p-3 mb-5 bg-white rounded">
                        <img class="card-img-top" src={PlatformGlance4} alt="Card image cap" style={{ height: "120px" }} />
                        <div class="card-body">
                            <p class="card-title">Get Paid Same Day</p>
                        </div>

                    </div>
                </div>
                {/* End of 4 Application Cards */}
                <h3 className="my-4">
                    What our <span className="text-brightblue">customers</span> are
                    saying about us
            </h3>

                <div className="row justify-content-center py-4">

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

                <h3 className="pt-5 mt-3">
                    It's never been easier{' '}
                    <span className="text-brightblue">find jobs and hire</span> in
                    the hospitality industry.
            </h3>

                <p className="mb-4">
                    Sign up today and experience the difference. It's fast and easy!
            </p>

                <div className="d-flex align-items-center justify-content-center">
                    <input
                        type="email"
                        name="email"
                        className={getStarted === false ? "form-control d-inline w-300px is-invalid" : "form-control d-inline w-300px"}
                        placeholder="Enter Your Email"
                        onChange={handleInputChange} value={emailGetStarted.email}
                    />

                    <button className="btn radius btn-purple my-2 ml-2 px-4 py-2" onClick={() => emailGetStarted.email.length > 0 && validator.isEmail(emailGetStarted.email) ? setGetStarted(true) : setGetStarted(false)} >
                        Get Started
                </button>
                </div>
            </div>
            <div class={getStarted !== "" ? "modal d-block" : "modal"} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" style={{ borderStyle: "none" }}>
                            <h5 class="modal-title" id="exampleModalLabel">Are you a jobseeker or an employer?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setGetStarted("")}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row justfy-content-center text-center p-4">
                            <div className="col">
                                <button type="button" class="btn btn-primary" value="jobseeker" onClick={(email) => navigate(`/job-seekers-signup/${emailGetStarted["email"] ? "?email=" + emailGetStarted["email"] : ''}`)} style={{ color: "white", backgroundColor: "#a319a3", border: "none", borderRadius: "30px", width: "140px" }}>Jobseeker</button>

                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-primary" value="employer" onClick={(email) => navigate(`/employers-signup/${emailGetStarted["email"] ? "?email=" + emailGetStarted["email"] : ''}`)} style={{ color: "white", backgroundColor: "#12687E", border: "none", borderRadius: "30px", width: "140px" }}>Employer</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>)
}

export default JobSeekers
