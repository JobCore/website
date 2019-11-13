import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import PhoneApp from '../images/phone-app.png'
import StepOne from '../images/step-one.png'
import StepTwo from '../images/step-two.png'
import StepThree from '../images/step-three.png'

/* eslint-disable */

export default () => (
    <Layout>
        <SEO title="About" />

        <div className="pink-top-image text-light d-flex align-items-center">
            <div className="text-center w-100 px-10">
                <h1 className="font-size-4em">
                    <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>
                        Our <span className="text-brightblue"> Story</span>
                    </span>
                </h1>
            </div>
        </div>


        <div className="container my-5 d-flex justify-content-around align-items-center">
            <img className="s1000-hide" height="450" src={PhoneApp} />

            <div className="w-500px px-2 py-5">
                <h1>About <span className="text-brightblue">JobCore</span></h1>
                <p className="text-secondary">We started our catering and event management company in 2004, and have become industry leaders in the South Florida market over the past 15 years. We have learned the hard way that recruiting qualified workers in the hospitality industry is really hard. The seasonal and temporary nature of our operations hurts our ability to provide good part time workers a steady paycheck, and the best ones end up leaving our industry in search of more hours or higher wages. We thought it did not have to be this way, so we decided to raise the bar for ourselves and the industry as a whole.</p>
                <p className="text-secondary">We started JobCore in 2018 to bring to market our solution to the staffing problems we experienced ourselves over the past 15 years. It is a platform for event organizers to recruit, schedule, pay and rate part-time workers quickly, efficiently and transparently in the hospitality industry.</p>

            </div>
        </div>

        <div className="container my-5 d-flex justify-content-around align-items-center s800-display-column">
            <div className="w-450px px-2 py-5">
                <h1>Our <span className="text-brightblue">Vision</span></h1>
                <p className="text-secondary">We envision businesses in the hospitality industry hiring, scheduling and paying for the most qualified and talented part-time employees they can afford based on industry peer recommendations in a transparent and efficient way. We envision employees that want to pursue opportunities in the hospitality industry being able to fulfill their employment needs through multiple meaningful part-time opportunities that fit their schedules, where they can recommend good employers and be rewarded for their good performance while doing the jobs they like</p>
                <p className="text-secondary">We envision a hospitality industry where employers and job-seekers collaborate transparently through JobCore, raising the bar for everyone and resulting in less stressed out employers, better working environments, decreased industry-wide employee turnover and the most satisfied end customers.</p>
            </div>

            <div className="w-450px px-5 py-4 text-white bg-brightblue-opacity text-center">
                <h1>Our <span className="text-purple">Mission</span></h1>
                <p>JobCore's mission is to provide the best tool available to business owners and part-time shift workers in the hospitality industry to collaborate efficiently and transparently, creating mutual opportunity and prosperity.</p>
            </div>
        </div>

        <div className="text-center px-10 my-5 pb-5 pt-5">
            <h1>How We <span className="text-brightblue">Work</span></h1>
            <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur ullam asperiores possimus pariatur assumenda quae.</p>
            <div className="d-flex justify-content-center s900-display-column">
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepOne} />
                    <h4>Step One</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
                </div>
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepTwo} />
                    <h4>Step Two</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
                </div>
                <div className="shadow w-300px m-3 p-3 s900-mx-auto">
                    <img className="m-3" src={StepThree} />
                    <h4>Step Three</h4>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, ullam</p>
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

            <div className="mt-4 d-flex align-items-center justify-content-center">
                <input
                    type="text"
                    className="form-control w-300px"
                    placeholder="Enter Your Email"
                />
                <button
                    className="btn radius btn-purple my-2 ml-2 px-4 py-2"
                >
                    Get Started
                </button>
            </div>

        </div>

    </Layout>
)
