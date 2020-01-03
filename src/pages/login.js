import React, { useState } from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { navigate } from '@reach/router'
import { loginUser } from '../actions'
import validator from 'validator'

/* eslint-disable */

const handleSubmit = async (event, user) => {
    event.preventDefault()
    console.log(user)
    var errors = []

    if (validator.isEmpty(user.email)) errors.push('Email is required')
    else if (!validator.isEmail(user.email)) errors.push('Invalid email address')

    if (validator.isEmpty(user.password)) errors.push('Password is required')

    if (errors.length === 0) return user
    throw errors
}
const Login = () => {
    const [inputs, setInputs] = useState({})
    const [errors, setErrors] = useState('')
    const [loading, setLoading] = useState(false)

    const handleInputChange = event => {
        event.persist()

        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }

    return (
        <Layout>
            <SEO title="Login" />
            <div className="d-none d-lg-block">
                <div className="pink-top-image text-light d-flex align-items-center mb-2">
                    <div className="text-center w-100 px-10">
                        <h1 style={{ fontSize: '3.5vw' }}>
                            <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>
                                Login Your
                                <span className="text-brightblue"> Account</span>
                            </span>
                        </h1>
                    </div>
                </div>
                <div style={{ height: '74px' }}>
                    {errors[0] ? (
                        <div className="row text-center justify-content-center">
                            <div className="col col-md-4">
                                <div class="alert alert-danger text-center mx-auto" role="alert">
                                    {errors[0]}
                                </div>
                            </div>
                        </div>
                    ) : null}
                </div>
                <div className="container mx-auto">
                    <div className="mx-auto w-400px pt-4">
                        <h2 style={{ fontWeight: 'bold' }}>Login</h2>
                        <form
                            onSubmit={e => {
                                setErrors([''])
                                setLoading(true)
                                const dataToSubmit = inputs
                                handleSubmit(e, dataToSubmit)
                                    .then(validatedData => {
                                        loginUser(validatedData).then(res => {
                                            if (res['non_field_errors']) {
                                                setErrors(res['non_field_errors'])
                                                setLoading(false)
                                            } else if (res['user']['profile']['employer'] !== null) {
                                                navigate('https://employer.jobcore.co/?token=' + res['token'])
                                                // setLoading(false)
                                            } else if (res['user']['profile']['employee'] !== null) {
                                                setErrors(['Only employers are allowed to login into this application. Please download the JobCore application on the App Store or Google Play Store.'])
                                                setLoading(false)
                                            }
                                        })
                                    })
                                    .catch(errors => setErrors(errors))
                            }}
                        >
                            <div className="form-group py-1">
                                <label className="">
                                    <h6>Email</h6>
                                </label>
                                <div class="icon_form">
                                    <span class="fas fa-envelope"></span>
                                    <input placeholder="example@gmail.com" maxlength="59" type="text" name="email" onChange={handleInputChange} value={inputs.email} autoFocus />
                                </div>
                            </div>
                            <h6 className="mt-4" style={{ fontWeight: 'bold' }}>
                                Password
                            </h6>
                            <div class="icon_form">
                                <span class="fas fa-lock"></span>
                                <input placeholder="" maxlength="59" type="password" name="password" onChange={handleInputChange} value={inputs.password} />
                            </div>
                            <div className="pt-3 text-gray">
                                <small>
                                    <input type="checkbox" /> Remember Password
                                </small>
                            </div>
                            <button className="btn radius btn-purple mt-4  px-5 py-2" type="submit" disabled={loading ? true : false}>
                                {!loading ? 'Login' : 'Loading...'}
                            </button>
                        </form>
                        <div className="pt-3 mb-5">
                            <small className="text-secondary">
                                Don't have an account?
                                <Link to="/employers-signup/">
                                    <span className="text-success"> Sign Up Now</span>
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="d-none d-block d-sm-block d-md-block d-lg-none mt-5 mb-5 text-center">
                    <h1>You need to login from a desktop.</h1>
                </div>
            </div>
        </Layout>
    )
}

export default Login
