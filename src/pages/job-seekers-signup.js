import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PropTypes from "prop-types"
import { navigate } from '@reach/router'
import { registerJobSeeker } from '../actions'
import withLocation from '../withLocation'
import validator from 'validator'
import ReCAPTCHA from "react-google-recaptcha";

/* eslint-disable */

const handleInputPhone = value => {
    if (value) {
        let output = '('
        value.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function (match, g1, g2, g3) {
            if (g1.length) {
                output += g1
                if (g1.length == 3) {
                    output += ')'
                    if (g2.length) {
                        output += ' ' + g2
                        if (g2.length == 3) {
                            output += ' - '
                            if (g3.length) {
                                output += g3
                            }
                        }
                    }
                }
            }
        })
        return output
    }
}

const handleSubmit = async (event, jobseeker) => {
    event.preventDefault()
    console.log(jobseeker)
    var errors = []

    if (validator.isEmpty(jobseeker.firstName)) errors.push('First name is required')
    if (validator.isEmpty(jobseeker.lastName)) errors.push('Last name is required')

    if (validator.isEmpty(jobseeker.email)) errors.push('Email is required')
    else if (!validator.isEmail(jobseeker.email)) errors.push('Invalid email address')

    if (validator.isEmpty(jobseeker.password)) {
        errors.push('Password is required')
    } else if (jobseeker.password.length < 7) {
        errors.push('Password must be 8 character long')
    }

    if (jobseeker.password !== jobseeker.repeatPassword) errors.push('Password do not match')

    if (validator.isEmpty(jobseeker.phone)) errors.push('Phone number is required')

    if (errors.length === 0) return jobseeker
    throw errors
}

const JobSeekersSignUp = ({ search }) => {


    const queryString = search["email"]

    console.log(queryString)
    const [inputs, setInputs] = useState({
        email: queryString || '',
        firstName: '',
        lastName: '',
        password: '',
        repeatPassword: '',
        phone: '',
        account_type: 'employee',
    })

    const [errors, setErrors] = useState([''])
    const [captcha, setCaptcha] = useState([false])
    const [submitData, setSubmitData] = useState(0)

    const handleInputChange = event => {
        event.persist()

        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }


    return (
        <Layout>
            <SEO title="Sign Up" />
            <div className=" d-none d-lg-block">

                <div className="pink-top-image text-light d-flex align-items-center bg-lightgrey">
                    <div className="text-center w-100 px-10">
                        <h1
                            // className="font-size-4em"
                            style={{ fontSize: '3.5vw' }}
                        >
                            <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>
                                Job Seekers
                            <span className="text-brightblue"> Sign Up</span>
                            </span>
                        </h1>
                    </div>
                </div>

            </div>

            <div className="container my-5">
                <div className="row justify-content-center mx-auto">
                    <div className="col-12 col-md-6">
                        <h2 className="text-brightblue">SIGN UP NOW</h2>
                        <div className="text-gray pb-4">
                            <small style={{ fontSize: '16px' }}>After you submit the form, please check your email for the mobile app download link. Please download the mobile app to complete the sign-up process.</small>
                        </div>
                        <form
                            onSubmit={e => {
                                setErrors([''])
                                setSubmitData(inputs)
                                const dataToSubmit = inputs
                                handleSubmit(e, dataToSubmit)
                                    .then(validatedData => {
                                        registerJobSeeker(validatedData)
                                    })
                                    .catch(errors => setErrors(errors))
                            }}
                        >
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>First Name</h6>
                                </label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    <span class="fa fa-user"></span>
                                    <input id={errors.includes('First name is required') ? 'error-form' : null} placeholder="John" maxlength="254" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} autoFocus />

                                    {errors.includes('First name is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('First name is required')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Last Name</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fa fa-user"></span>
                                    <input id={errors.includes('Last name is required') ? 'error-form' : null} placeholder="Doe" maxlength="254" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} />

                                    {errors.includes('Last name is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Last name is required')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Your Email</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fas fa-envelope"></span>
                                    <input
                                        id={errors.includes('Email is required') || errors.includes('Invalid email address') || errors.includes('This email already exist.') ? 'error-form' : null}
                                        placeholder="john.doe@gmail.com"
                                        maxlength="254"
                                        type="text"
                                        name="email"
                                        onChange={handleInputChange}
                                        value={inputs.email}
                                    />
                                    {errors.includes('Email is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Email is required')]}</strong>
                                        </div>
                                    ) : null}
                                    {errors.includes('Invalid email address') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Invalid email address')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Create Password</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fas fa-lock"></span>
                                    <input
                                        id={errors.includes('Password is required') || errors.includes('Password must be 8 character long') || errors.includes('Password do not match') ? 'error-form' : null}
                                        type="password"
                                        name="password"
                                        onChange={handleInputChange}
                                        value={inputs.password}
                                    />
                                    {errors.includes('Password is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password is required')]}</strong>
                                        </div>
                                    ) : null}
                                    {errors.includes('Password must be 8 character long') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password must be 8 character long')]}</strong>
                                        </div>
                                    ) : null}
                                    {errors.includes('Password do not match') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password do not match')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Re-enter Password</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fas fa-lock"></span>
                                    <input
                                        id={errors.includes('Password is required') || errors.includes('Password must be 8 character long') || errors.includes('Password do not match') ? 'error-form' : null}
                                        type="password"
                                        name="repeatPassword"
                                        onChange={handleInputChange}
                                        value={inputs.repeatPassword}
                                    />
                                    {errors.includes('Password is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password is required')]}</strong>
                                        </div>
                                    ) : null}
                                    {errors.includes('Password must be 8 character long') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password must be 8 character long')]}</strong>
                                        </div>
                                    ) : null}
                                    {errors.includes('Password do not match') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Password do not match')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Phone Number</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fas fa-phone"></span>
                                    <input
                                        id={errors.includes('Phone number is required') ? 'error-form' : null}
                                        maxlength="254"
                                        type="text"
                                        name="phone"
                                        placeholder="(555) 555 - 5555"
                                        onChange={handleInputChange}
                                        value={handleInputPhone(inputs.phone)}
                                    />

                                    {errors.includes('Phone number is required') ? (
                                        <div className="text-center pt-1">
                                            <strong className="text-danger">{errors[errors.indexOf('Phone number is required')]}</strong>
                                        </div>
                                    ) : null}
                                </div>
                            </div>
                            {/* <ReCAPTCHA sitekey="6Ldc_MMUAAAAAJ6TXKxWk4KXGs-2G533PLc6PPf3"
                                onChange={(e) => setCaptcha(true)} /> */}
                            <button
                                disabled={JSON.stringify(submitData) === JSON.stringify(inputs) ? true : false}
                                className="btn radius btn-purple  mt-4 px-5 py-2"
                                type="submit"
                                onSubmit={e => {
                                    setErrors([''])
                                    setSubmitData(inputs)
                                    const dataToSubmit = inputs
                                    handleSubmit(e, dataToSubmit)
                                        .then(validatedData => {
                                            registerJobSeeker(validatedData)
                                        })
                                        .catch(errors => setErrors(errors))
                                }}
                            >
                                {JSON.stringify(submitData) === JSON.stringify(inputs) ? "Errors have been found" : "SIGN UP"}
                            </button>
                            <div className="pt-4 text-gray" >
                                <small style={{ fontSize: "16px" }}>
                                    By clicking the button above you agree to the
                                    <br />
                                    <Link to="/terms">
                                        <a> Terms of Service </a>
                                    </Link>
                                    and
                                    <Link to="/privacy">
                                        <a> Privacy Policy</a>
                                    </Link>
                                    .
                                    <div className="d-flex justify-content-start mt-3">
                                        <input className="mt-1 mr-2" type="checkbox" />
                                        <div style={{ fontSize: '16px' }}>I consent to receive updates and agree to receive occasional automated text message from JobCore. Message and data rates may apply. Text STOP to cancel or HELP for help.</div>
                                    </div>
                                </small>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </Layout>
    )
}

JobSeekersSignUp.propTypes = {
    search: PropTypes.object,
}

export default withLocation(JobSeekersSignUp)
