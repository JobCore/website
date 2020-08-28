import React, { useState } from 'react'
import { navigate } from '@reach/router'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import Logo from '../images/jobcorelogo.png'
import ReactPlayer from 'react-player'
import Testimonials from '../components/testimonials'

import GetStartedModal from '../components/modal-getstarted'
//assets

import Clock from '../images/clock.png'
import Magnify from '../images/magnifying-glass.png'
import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import animationEmployer from '../images/animation-employer.gif'
import Review1 from '../images/review1.png'
import PlatformGlance1 from '../images/platform-glance-1.png'
import PlatformGlance2 from '../images/platform-glance-2.png'
import PlatformGlance3 from '../images/platform-glance-3.png'
import PlatformGlance4 from '../images/platform-glance-4.png'
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
import GetStarted from '../components/input-getstarted'
import Testimonial from '../components/testimonials'
/* eslint-disable */

const Employers = () => {
    const [showModal, setShowModal] = useState(false)
    const [emailGetStarted, setemailGetStarted] = useState('')

    const handleInputChange = event => {
        event.persist()

        setemailGetStarted(emailGetStarted => ({ ...emailGetStarted, [event.target.name]: event.target.value }))
    }
    return (
        <Layout>
            <SEO title="Employers" />

            <div className="bg-lightgray py-10 m-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 text-left pb-2">
                            <h1>
                                Create your shift schedule & hire your <span className="text-brightblue">part-time </span>
                                staff
                            </h1>

                            <p>JobCore is where events are organized: A talent pool of curated workers and hundreds of companies organizing events and hiring everyday.</p>

                            <div className="pt-3 d-flex align-items-center justify-content-center">
                                <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />

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

                        <div className="col-md-6">
                            <ReactPlayer url="https://streamable.com/s07d3" className='react-player' playing loop controls="false" width="100%" height="300px" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-2 px-10 text-center">
                <div className="container">
                    <div className="py-10 text-center">
                        <div>
                            <h3>
                                Finally a centralized <span className="text-brightblue">source of talents </span>
                                and companies!
                            </h3>

                            <p className="pt-3">
                                JobCore is a marketplace focused on the hospitality industry that connects caterers, full service restaurants, nightclubs, bars and janitorial services companies to qualified part-time workers.
                            </p>
                            <p>Employers create their calendar shifts, recruit workers from our curated pool, communicate, schedule, pay and rate them quicky and efficiently.</p>

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
            </div>

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

                <div className="row justify-content-center">
                    <div className="col-md-6">

                        <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                    </div>

                </div>
            </div>
            <div className="py-10 text-left d-flex justify-content-center align-items-center">
                <div className="row ml-0 mr-0">
                    <div className="col-11 col-md-6 my-auto">
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
                    <div className="col-11 col-md-6">
                        <img className="animated-employer mx-auto d-block pb-3" style={{ width: "100%" }} src={animationEmployer} />
                    </div>
                </div>
            </div>


            <GetStartedModal />
            <div className="py-10 text-left text-center">
  
            



                <h3>
                    What our <span className="text-brightblue">customers</span> are saying about us
                </h3>

                <Testimonials/>

                {/* <div className="px-10  m-0 text-center">

                    <h3 className="pt-5 mt-3">
                        It's never been easier to <span className="text-brightblue">find job</span> in the hospitality industry.
                </h3>

                    <p className="mb-4">Sign up today and experience the difference. It's fast and easy!</p>

                    <div className="row justify-content-center">
                        <div className="col-md-6">

                            <GetStarted modalQuestion="Are you a jobseeker or an employer?" buttonText="Get Started" errorLabel="Enter a valid email address." inputPlaceholder="Enter your email" inputName="email" modalButton1="Jobseeker" modalButton2="Employer" modalNavigation1="/job-seekers-signup/" modalNavigation2="employers-signup" />
                        </div>

                    </div>
                </div> */}
                <div class={showModal ? 'modal fade show d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={{ borderStyle: 'none' }}>
                                <h5 class="modal-title" id="exampleModalLabel">
                                    Are you a jobseeker or an employer?
                                </h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setShowModal(false)}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="row justfy-content-center text-center p-4">
                                <div className="col">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        value="jobseeker"
                                        onClick={() => navigate(`/job-seekers-signup/`)}
                                        style={{ color: 'white', backgroundColor: '#a319a3', border: 'none', borderRadius: '30px', width: '140px' }}
                                    >
                                        Jobseeker
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        value="employer"
                                        onClick={() => navigate(`/employers-signup/`)}
                                        style={{ color: 'white', backgroundColor: '#12687E', border: 'none', borderRadius: '30px', width: '140px' }}
                                    >
                                        Employer
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Employers
