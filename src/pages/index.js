import React, { useState } from 'react'
import validator from 'validator'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import Testimonials from '../components/testimonials'
import GetStarted from '../components/input-getstarted'
import GetStartedModal from '../components/modal-getstarted'
//banner video
import BannerVideo from '../videos/BannerVideo.mp4'
import Logo from '../images/jobcorelogo.png'

import { Link } from 'gatsby'
//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Magnify from '../images/magnifying-glass.png'
import Star from '../images/star.png'
import Clock from '../images/clock.png'
import BannerVideoPlaceholder from '../images/BannerPHVideo.png'
import PlatformGlance1 from '../images/platform-glance-1.png'
import PlatformGlance2 from '../images/platform-glance-2.png'
import PlatformGlance3 from '../images/platform-glance-3.png'
import PlatformGlance4 from '../images/platform-glance-4.png'
import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import animationEmployer from '../images/animation-employer2.gif'
import animationEmployee from '../images/animation-employee2.gif'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'
import Customer1 from '../images/customer1.png'
import Customer2 from '../images/customer2.png'
import Customer3 from '../images/customer3.png'
import { navigate } from '@reach/router'
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
import { get } from 'https'
/* eslint-disable */

export default () => {
    const [getStarted, setGetStarted] = useState()
    const [emailGetStarted, setemailGetStarted] = useState({
        email: '',
    })

    const handleInputChange = event => {
        event.persist()

        setemailGetStarted(emailGetStarted => ({ ...emailGetStarted, [event.target.name]: event.target.value }))
    }
    return (
        <Layout>
            <SEO title="Home" />

            <div class="jumbotron jumbotron-fluid">

                <video autoPlay muted loop poster={BannerVideoPlaceholder}>
                    <source src={BannerVideo} type="video/mp4" />

                </video>

                <div class="container text-white">


                    <div className="row justify-content-left">
                        <div className="col-sm-9 text-left">
                            <h1 className="">
                                <span style={{ color: "white" }}>Create your shift schedule & hire your</span><span className="text-brightblue"> part-time</span> <span style={{ color: "white" }}>staff</span>

                            </h1>
                            <div className="row">
                                <div className="col-md">

                                    <p style={{ color: "white" }}>JobCore is a scheduling, hiring and payment marketplace for the hospitality industry: a validated and curated talent pool of workers and hundreds of companies organizing events and hiring every day.</p>

                                    <div className="row">
                                        <div className="col-md-8">

                                            <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                                        </div>

                                    </div>
                                    <div className=" pt-5 mb-2">
                                        <a className="mr-2" href="https://play.google.com/store/apps/details?id=co.jobcore.talent&hl=en_US">
                                            <img src={GooglePlayStore} width="140px" height="60px" />
                                        </a>
                                        <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430?app=itunes&ign-mpt=uo%3D4">
                                            <img src={AppleStore} width="140px" height="60px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className="py-2 text-center" >
                <div className="container">
                    <div className="py-10 text-center">
                        <div>
                            <div>

                                <h3>
                                    Finally a centralized <span className="text-brightblue">source of talents </span>
                                    and companies!
                            </h3>

                                <p className="pt-3">
                                    JobCore is a platform focused on the hospitality industry that connects caterers, full service restaurants, nightclubs, bars and janitorial services companies to qualified part-time workers.
                            </p>
                                <p>Employers create their calendar shifts, recruit workers from our curated pool, communicate, schedule, pay and rate them quicky and efficiently.</p>
                            </div>

                            <div className="mt-5 d-flex justify-content-between align-items-end">
                                <div className="w-250px mb-auto">
                                    <img src={Suitcase} width="50" height="50" />
                                    <h6 className="mt-3">Publish Shifts</h6>
                                    <p className="text-secondary font-size-13px">Setup your job and preferences in a custom calendar.</p>
                                </div>
                                <div className="w-250px mb-auto">
                                    <img src={Magnify} width="50" height="50" />
                                    <h6 className="mt-3">Find Talent</h6>
                                    <p className="text-secondary font-size-13px">Access a talent pool of people, rated with experience.</p>
                                </div>
                                <div className="w-250px mb-auto">
                                    <img src={Calendar} width="50" height="50" />
                                    <h6 className="mt-3">Manage Schedule</h6>
                                    <p className="text-secondary font-size-13px">Automatically send employees job location and shift times.</p>
                                </div>
                            </div>

                            <div className="mt-5 d-flex justify-content-between align-items-end">
                                <div className="w-250px mb-auto">
                                    <img src={Clock} width="50" height="50" />
                                    <h6 className="mt-3">Clock In-Out</h6>
                                    <p className="text-secondary font-size-13px">Track employee performance with GPS located clock in-out features.</p>
                                </div>
                                <div className="w-250px mb-auto">
                                    <img src={Money} width="70" height="50" />
                                    <h6 className="mt-3">Payroll Reports</h6>
                                    <p className="text-secondary font-size-13px">Instant payroll reports based on employee activity.</p>
                                </div>
                                <div className="w-250px mb-auto">
                                    <img src={Envelope} width="70" height="50" />
                                    <h6 className="mt-3">Direct Payments</h6>
                                    <p className="text-secondary font-size-13px">Direct ACH payments to employee bank accounts.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className="bg-lightgray px-10 py-10 m-0 text-center">
                <h3 className="mb-2">
                    Finally a job marketplace for the
                    <span className="text-brightblue"> hospitality industry!</span>
                </h3>

                <p>
                    Finding talent and jobs in the hospitality industry has never been easier.
                    <br />
                    Sign up today and give it a try!
                </p>

                <div className="row mt-4 justify-content-center">
                    <div className="col-lg-6">

                        <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                    </div>

                </div>
            </div>
            <div className="container py-10">
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
                        <img className="animated-employer mx-auto d-block pb-3" style={{ width: "100%" }} src={animationEmployer} />
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row" style={{ paddingBottom: "80px" }}>
                    <div className=" col-12 col-md-6 my-auto order-2 order-sm-1">
                        <img className="animated-employee mx-auto d-block pb-3" src={animationEmployee} />
                    </div>
                    <div className="col-12 col-md-6 my-auto order-1 order-sm-2">
                        <div>
                            <h3 className="ml-4">
                                Job seekers can find
                                <br />
                                jobs in minutes and
                                <br />
                                <span className="text-brightblue"> get paid</span> faster
                            </h3>
                            <ul className="purple-checkmark text-left mt-3">
                                <li>Setup your location, profile and preferences</li>
                                <li>
                                    Start receiving invites to work on shifts based <br />
                                    on your preferences
                                </li>
                                <li>Apply to the invitations you like</li>
                                <li>Get to work: clock-in and clock-out at the event</li>
                                <li>Get paid in less than 24 hrs</li>
                                <li>It is that simple!</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <GetStartedModal />

            <div className="container text-left text-center" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
                <h3 className="mt-4">
                    The <span className="text-brightblue">platform</span> at a glance
                </h3>


                <p className="mt-4">
                    JobCore provides an easy to use end-to-end experience for employers and job seekers
                    <br />
                    in the hospitality industry on mobile and desktop.
                </p>
                {/* 4 Cards  Find Talent, Job Preference, Check in and out, Get paid same day*/}
                {/* <div className="background-image-platform" /> */}
                <div className="row justify-content-center ml-0 mr-0">
                    <div className="col">

                        <div class="card-deck mx-auto">
                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <img class="card-img-top " src={PlatformGlance1} alt="Card image cap" style={{ height: '120px' }} />

                                <div class="card-body">
                                    <p class="card-title">Find Talent</p>
                                </div>
                            </div>
                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <img class="card-img-top" src={PlatformGlance2} alt="Card image cap" style={{ height: '120px' }} />
                                <div class="card-body">
                                    <p class="card-title">Job Preferences</p>
                                </div>
                            </div>
                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <img class="card-img-top" src={PlatformGlance3} alt="Card image cap" style={{ height: '120px' }} />
                                <div class="card-body">
                                    <p class="card-title">Clock In and Out</p>
                                </div>
                            </div>

                            <div class="card shadow p-3 mb-5 bg-white rounded">
                                <img class="card-img-top" src={PlatformGlance4} alt="Card image cap" style={{ height: '120px' }} />
                                <div class="card-body">
                                    <p class="card-title">Get Paid Same Day</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-image-platform2" />

                <h3 className="my-4">
                    What our <span className="text-brightblue">customers</span> are saying about us
                </h3>

                <Testimonials/>

                <div className="px-10 m-0 text-center">

                    <h3 className="pt-5 mt-3">
                        It's never been easier to <span className="text-brightblue">find job</span> in the hospitality industry.
</h3>

                    <p className="mb-4">Sign up today and experience the difference. It's fast and easy!</p>

                    <div className="row justify-content-center">
                        <div className="col-md-7">

                            <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                        </div>

                    </div>
                </div>

            </div>
        </Layout >
    )
}
