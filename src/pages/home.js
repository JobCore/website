import React, { useState } from 'react'
import validator from 'validator'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
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
import data from '../jsons/home.json';

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
    console.log(data)
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
                                <div className="col-md-9">

                                    <p style={{ color: "white" }}>JobCore is a scheduling, hiring and payment marketplace for the hospitality industry: a validated and curated talent pool of workers and hundreds of companies organizing events and hiring every day.</p>

                                    <div className="row pt-4">
                                        <div className="col-md-6">

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


            <div className="container">
                <div className="py-10 text-center">
                    <div>
                        <div>

                            <h3>
                                Finally a centralized <span className="text-brightblue">source of talents </span>
                                and companies!
                            </h3>

                            <p className="pt-3">
                                JobCore is a platform focused on the hospitality industry that connects carterers, single location full service restaurants, nightclubs, bars and janitorial services companies to qualified part-time workers.
                            </p>
                            <p>Employers create their calendar shifts, recruit workers from our curated pool, communicate with them, and schedule, pay, and rate them quickly and efficiently.</p>
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

            <div>
                <div className="bg-lightgray py-10 m-0 text-center">
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
                        <div className="col-md-3">

                            <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                        </div>

                    </div>
                </div>
            </div>
        </Layout >
    )
}
