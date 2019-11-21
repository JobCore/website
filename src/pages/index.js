import React, { useState } from 'react'
import validator from 'validator'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import GetStarted from '../components/input-getstarted'
import GetStartedModal from '../components/modal-getstarted'
//banner video
import BannerVideo from '../videos/BannerVideo.mp4'

import { Link } from 'gatsby'
//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Magnify from '../images/magnifying-glass.png'
import Star from '../images/star.png'
import Clock from '../images/clock.png'
import BannerVideoPlaceholder from '../images/BannerPHVideo.png'

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
    console.log(getStarted)
    return (
        <Layout>
            <SEO title="Home" />
            <div class="jumbotron jumbotron-fluid">

                <video autoPlay muted loop poster={BannerVideoPlaceholder}>
                    <source src={BannerVideo} data-src="//clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" type="video/mp4" />

                </video>

                <div class="container text-white">


                    <div className="row justify-content-center">
                        <div className="col-sm-9 text-left">
                            <h1 className="">
                                <span style={{ color: "white" }}>Create your shift schedule & hire your</span><span className="text-brightblue"> part-time</span> <span style={{ color: "white" }}>staff</span>

                            </h1>
                            <div className="row">
                                <div className="col-md-6">

                                    <p style={{ color: "white" }}>JobCore is a scheduling, hiring and payment marketplace for the hospitality industry: a validated and curated talent pool of workers and hundreds of companies organizing eventes and hiring every day.</p>

                                    <div className="pt-3 d-flex align-items-center  ">
                                        <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                                    </div>

                                    <div className=" pt-5 mb-2">
                                        <a className="mr-2" href="https://play.google.com/store/apps/details?id=co.jobcore.talent&hl=en_US">
                                            <img src={GooglePlayStore} width="125px" height="40px" />
                                        </a>
                                        <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430?app=itunes&ign-mpt=uo%3D4">
                                            <img src={AppleStore} width="125px" height="40px" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="bg-lightgray py-10 m-0" style={{ display: "block", position: "relative", height: "100%" }}>

                <div style={{ position: 'absolute', top: "0px", bottom: "0px", display: "block", align: "center", width: "100%", height: "100%", overflow: "hidden" }}>

                    <video loop autoPlay id="videoBG">
                        <source src={BannerVideo} type="video/mp4" />
                        <source src={BannerVideo} type="video/ogg" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="row justify-content-center">
                    <div className="col-sm-9 text-left">
                        <h1 className="">
                            <span>Create your shift schedule & hire your</span><span className="text-brightblue"> part-time</span> staff

                            </h1>
                        <div className="row">
                            <div className="col-md-6">

                                <p>JobCore is a scheduling, hiring and payment marketplace for the hospitality industry: a validated and curated talent pool of workers and hundreds of companies organizing eventes and hiring every day.</p>

                                <div className="pt-3 d-flex align-items-center  ">
                                    <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                                </div>

                                <div className=" pt-5 mb-2">
                                    <a className="mr-2" href="https://play.google.com/store/apps/details?id=co.jobcore.talent&hl=en_US">
                                        <img src={GooglePlayStore} width="125px" height="40px" />
                                    </a>
                                    <a href="https://apps.apple.com/us/app/jobcore-talent/id1437290430?app=itunes&ign-mpt=uo%3D4">
                                        <img src={AppleStore} width="125px" height="40px" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
          

                </div>




            </div >  */}

            < div className="py-2 px-10 text-center" >
                <div className="container">
                    <div className="py-10 text-center">
                        <div>
                            <h3>
                                Finally a centralized <span className="text-brightblue">source of talents </span>
                                and companies!
                            </h3>

                            <p className="pt-3">
                                JobCore is a platform focused on the hospitality industry that connects carterers, single location full service restaurants, nightclubs, bars and janitorial services companies to qualified part-time workers.
                            </p>
                            <p>Employers create their calendar shifts, recruit workers from our curated pool, communicate with them, and schedule, pay, and rate them quickly and efficiently.</p>

                            <div className="mt-5 d-flex justify-content-between align-items-end">
                                <div className="w-250px mb-auto">
                                    <img src={Suitcase} width="50" height="50" />
                                    <h6 className="mt-3">Publish Shifts</h6>
                                    <p className="text-secondary font-size-13px">Setup your job and preferences in a custom calendar.</p>
                                </div>
                                <div className="w-250px mb-auto">
                                    <img src={Magnify} width="50" height="50" />
                                    <h6 className="mt-3">Find Talent</h6>
                                    <p className="text-secondary font-size-13px">Access a talent pool of people in Miami, rated with experience.</p>
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

                <div className="mt-4 d-flex align-items-center justify-content-center">
                    <GetStarted buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />

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
                        <img className="animated-employer mx-auto d-block pb-3" style={{ width: '100%' }} src={animationEmployer} />
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

            <div className="py-10 text-left text-center">
                <h3 className="mb-2">
                    The <span className="text-brightblue">platform</span> at a glance
                </h3>

                <p>
                    JobCore provides an easy to use end-to-end experience for employers and job seekers
                    <br />
                    in the hospitality industry on mobile and desktop.
                </p>

                <div className="background-image-platform2" />

                <h3 className="my-4">
                    What our <span className="text-brightblue">customers</span> are saying about us
                </h3>

                <div className="row justify-content-center py-4">
                    <div className="col-md-2 pt-2 pr-0">
                        <Player video="s/4almu/qjkrrt" height={'200px'} />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                                <span>
                                    <div>
                                        <small>Tanya,</small>
                                    </div>
                                    <div>
                                        <small className="text-gray">Victoria</small>
                                    </div>
                                </span>
                            </div>
                            <div className="col-6 col-md-3 my-auto">
                                <img src={Review1} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 pt-2 pr-0">
                        <Player video="s/4almu/qjkrrt" height={'200px'} />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                                <span>
                                    <div>
                                        <small>Tanya,</small>
                                    </div>
                                    <div>
                                        <small className="text-gray">Victoria</small>
                                    </div>
                                </span>
                            </div>
                            <div className="col-6 col-md-3 my-auto">
                                <img src={Review1} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 pt-2 pr-0">
                        <Player video="s/4almu/qjkrrt" height={'200px'} />
                        <div className="row justify-content-end">
                            <div className="col-6 col-md-2 text-right my-auto">
                                <span>
                                    <div>
                                        <small>Tanya,</small>
                                    </div>
                                    <div>
                                        <small className="text-gray">Victoria</small>
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
                    It's never been easier to
                    {" "}<span className="text-brightblue"> find jobs and hire</span> in the hospitality industry.
                </h3>

                <p className="mb-4">Sign up today and experience the difference. It's fast and easy!</p>

                <div className="d-flex align-items-center justify-content-center">
                    <GetStarted buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />

                </div>
            </div>
        </Layout >
    )
}
