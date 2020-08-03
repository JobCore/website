import React, { useState } from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout'
import withLocation from '../withLocation'
import { navigate } from "@reach/router"
import SEO from '../components/seo'
import PaymentConfirmation from '../components/payment-confirmation'
import validator from 'validator'
import ReCAPTCHA from "react-google-recaptcha";
import { loadStripe } from "@stripe/stripe-js"
import PricingBasic from '../components/basic'
import PricingPro from '../components/pro'
import PricingEnterprise from '../components/enterprise'
import { registerEmployer, loginUser } from '../actions';
/* eslint-disable */
const handleInputPhone = (value) => {
    if (value) {
        let output = "(";
        value.replace(/^\D*(\d{0,3})\D*(\d{0,3})\D*(\d{0,4})/, function (match, g1, g2, g3) {
            if (g1.length) {
                output += g1;
                if (g1.length == 3) {
                    output += ")";
                    if (g2.length) {
                        output += " " + g2;
                        if (g2.length == 3) {
                            output += " - ";
                            if (g3.length) {
                                output += g3;
                            }
                        }
                    }
                }
            }
        }
        );
        return output;
    }
}

const checkUppercase = (password) => {
    return password.match(/[a-z]/);
}
const handleSubmit = async (employer) => {
    console.log(event);

    var errors = []

    if (validator.isEmpty(employer.firstName)) errors.push("First name is required");

    if (validator.isEmpty(employer.lastName)) errors.push("Last name is required");

    if (validator.isEmpty(employer.business_email)) {
        errors.push("Business email is required");
    } else if (!validator.isEmail(employer.business_email)) {
        errors.push("Invalid email address");
    }

    if (validator.isEmpty(employer.phone)) errors.push("Phone number is required");

    if (validator.isEmpty(employer.password)) {
        errors.push("Password is required");
    } else if (employer.password.length < 7) {
        errors.push("Password must be 8 character long");
    } else if (employer.password !== employer.repeatPassword) {
        errors.push("Password do not match");
    }

    if (validator.isEmpty(employer.business_name)) errors.push("Business name is required");

    if (validator.isEmpty(employer.about_business)) errors.push("About your business is required");

    if (validator.isEmpty(employer.business_website)) {
        errors.push("Business website is required");
    } else if (!validator.isURL(employer.business_website)) {
        errors.push("Invalid website");
    }

    if (errors.length === 0) return employer
    throw errors
}

const redirectToCheckout = async (event, plan, token, search, employer) => {

    event.preventDefault()

    const cancelURL = `https://jobcore.co/employers-signup/?email=${search.email}&plan=${search.plan}`
    const successUrl = `https://jobcore.co/payment-success/?employer=${employer}&plan=${search.plan}&token=${token}`
    const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY)
    
    let selectedPlan = plan == "free" ? process.env.FREE : plan == "basic" ? process.env.BASIC : plan == "pro" ? process.env.PRO : plan == "enterprise" ? process.env.ENTERPRISE : "";
    console.log(selectedPlan);
    const stripe = await stripePromise
    const { error } = await stripe.redirectToCheckout({
      items: [{ plan: selectedPlan, quantity: 1 }],
      successUrl: successUrl,
      cancelUrl: cancelURL
    })
    
    console.log('strpie', error);

    if (error) {
      console.warn("Error:", error)
    } else console.log('subscrip pagado');
  }
 
  
const EmployersSignUp = ({ search }) => {
    const queryString = search["email"]
    const queryStringEmployer = search["employer"]
    const queryStringPlan = search["plan"]

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        password: null,
        repeatPassword: '',
        phone: '',
        account_type: 'employer',
        business_name: '',
        business_email: queryString || '',
        business_website: '',
        about_business: '',
        employer: queryStringEmployer || null
    })
    const [consent, setConsent] = useState(false)
    const [paymentConfirmation, setPaymentConfirmation] = useState(false)
    const [consentErrorMsg, setConsentErrorMsg] = useState('')
    const [errors, setErrors] = useState([])
    const [plan, setPlan] = useState(queryStringPlan)
    const [modal, setModal] = useState(false)
    const [showPassword, setShowPassword] = useState('off')
    const [loading, setLoading] = useState(false)
    const [submitData, setSubmitData] = useState(0)
    const handleInputChange = event => {
        event.persist()

        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }
    const handleClickConsent = () => setConsent(!consent)
    const toggleShowPassword = () =>  {
        setShowPassword(showPassword === "off" ? "on" : "off");
      }
    
   
    return (
        <Layout>
            <SEO title="Sign Up" />
            {/* <div className="d-none d-lg-block">
                <div className="pink-top-image text-light d-flex align-items-center">
                    <div className="text-center w-100 px-10">
                        <h1 className="font-size-4em">
                            <span className="p-2 px-4 bg-black-opacity" style={{ color: "white" }}>Employers
                        <span className="text-brightblue"> Sign Up</span>
                            </span>
                        </h1>
                    </div>
                </div>

            </div> */}
            {!paymentConfirmation ? (
                <div className="container my-5">
        
                <div className="mx-auto w-800px-max">

                    {/* {queryString ? (
                        <div>
                        <span className="mt-4">STEP <strong>2</strong> OF <strong>3</strong>: CREATE AN EMPLOYER ACCOUNT</span>
                        
                        <h3 className="mt-4">Please fill out the information below:</h3>
                        <span className="mt-4">SUBSCRIPTION: <strong className="text-brightblue">{queryStringPlan.toUpperCase()}</strong></span>
                        
                        </div>
                    ):(
                        <div>
                            <h2 className="text-brightblue" style={{ fontWeight: "bold" }}>REQUEST A DEMO</h2>
                            <div className="text-secondary mb-5" style={{ fontSize: "16px" }}>Submit your contact information and one of our representatives will reach out to you to schedule a demo. We look forward to speaking with you!</div>

                        </div>
                    )} */}
                        
                        <div>
                        <ul className="text-center" id="progressbar">
                            <li className="active">Select Subscription</li>
                            <li className="active">Create an Account</li>
                            <li>Set up payment</li>
                        </ul> 
                        <h3 className="mt-4">Please fill out the information below:</h3>
                        <h5 className="mt-4">SUBSCRIPTION: <strong className="text-brightblue">{queryStringPlan ? queryStringPlan.toUpperCase() : ""}</strong></h5>

                        </div>
               
                    <form className="pt-4" >
                        <div className="form-row s700-display-column">

                            <div className="form-group col py-1">
                                <label className=""><h6>First Name<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    <span class="fa fa-user"></span>
                                    <input id={errors.includes("First name is required") ? "error-form" : null} placeholder="John" autoFocus maxlength="254" type="text" name="firstName" onChange={handleInputChange} value={inputs.firstName} />
                                </div>
                                {errors.includes("First name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("First name is required")]}</strong></div> : null}

                            </div>

                            <div className="form-group col py-1">
                                <label className=""><h6>Last Name<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    <span class="fa fa-user"></span>
                                    <input id={errors.includes("Last name is required") ? "error-form" : null} placeholder="Doe" maxlength="254" type="text" name="lastName" onChange={handleInputChange} value={inputs.lastName} />
                                </div>
                                {errors.includes("Last name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Last name is required")]}</strong></div> : null}

                            </div>
                        </div>
                        <div className="form-row s700-display-column">
                            <div className="form-group col py-1">
                                <label className=""><h6>Business Email<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    <span class="fas fa-envelope"></span>
                                    <input id={errors.includes("Business email is required") || errors.includes("Invalid email address") ? "error-form" : null} placeholder="john.doe@gmail.com" maxlength="254" type="text" name="business_email" onChange={handleInputChange} value={inputs.business_email} />
                                </div>
                                {errors.includes("Business email is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Business email is required")]}</strong></div> : null}
                                {errors.includes("Invalid email address") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Invalid email address")]}</strong></div> : null}

                            </div>
                            <div className="form-group col py-1">
                                <label className=""><h6>Phone<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    <span class="fas fa-phone"></span>
                                    <input id={errors.includes("Phone number is required") ? "error-form" : null} maxlength="254" type="text" name="phone" placeholder="(555) 555 - 5555" onChange={handleInputChange} value={handleInputPhone(inputs.phone)} />
                                    {errors.includes("Phone number is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Phone number is required")]}</strong></div> : null}

                                </div>
                            </div>
                        </div>
                        <div className="form-row s700-display-column">
                            <div className="form-group col py-1">
                                <label className=""><h6>Create Password<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    {showPassword === "off" ? <span style={{cursor:"pointer"}} class="fa fa-eye-slash" onClick={() => toggleShowPassword()}></span>: <span style={{cursor:"pointer"}} class="fa fa-eye" onClick={() => toggleShowPassword()}></span>}
                                    <input id={errors.includes("Password is required") || errors.includes("Password must be 8 character long") || errors.includes("Password do not match") ? "error-form" : null} maxlength="254" type={showPassword == "off" ? 'password' : "text"} name="password" onChange={handleInputChange} value={inputs.password} />
                                    {errors.includes("Password is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password is required")]}</strong></div> : null}
                                    {errors.includes("Password must be 8 character long") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password must be 8 character long")]}</strong></div> : null}
                                    {errors.includes("Password do not match") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password do not match")]}</strong></div> : null}

                                </div>
                            </div>
                            <div className="form-group col py-1">
                                <label className=""><h6>Repeat Password<span style={{color:"red"}}>*</span></h6></label>
                                {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                <div class="icon_form">
                                    {showPassword === "off" ? <span style={{cursor:"pointer"}} class="fa fa-eye-slash" onClick={() => toggleShowPassword()}></span>: <span style={{cursor:"pointer"}} class="fa fa-eye" onClick={() => toggleShowPassword()}></span>}
                                    <input id={errors.includes("Password is required") || errors.includes("Password must be 8 character long") || errors.includes("Password do not match") ? "error-form" : null} maxlength="254" type={showPassword == "off" ? 'password' : "text"} name="repeatPassword" onChange={handleInputChange} value={inputs.repeatPassword} />
                                    {errors.includes("Password is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password is required")]}</strong></div> : null}
                                    {errors.includes("Password must be 8 character long") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password must be 8 character long")]}</strong></div> : null}
                                    {errors.includes("Password do not match") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Password do not match")]}</strong></div> : null}

                                </div>
                            </div>
                            
                        </div>
                 
                        {/* {inputs.password.length > 0 && inputs.repeatPainputs.password == inputs.repeatPassword && <span className="text-success mb-2"><i className="fas fa-check"></i> Password Match</span>} */}
                        <ul style={{listStyle: "none", paddingLeft:"0px"}}>
                <li>{inputs.password && inputs.password.length > 7 ? <i className="fas fa-check" style={{color:"green"}}></i> : <i className="fas fa-times" style={{color:"red"}}></i>} Minimum 8 digits</li>
                <li>{inputs.password && inputs.password == inputs.repeatPassword ? <i className="fas fa-check" style={{color:"green"}}></i> : <i className="fas fa-times" style={{color:"red"}}></i>} Password match</li>
                <li>{inputs.password && /[A-Z]/g.test(inputs.password) ? <i className="fas fa-check" style={{color:"green"}}></i> : <i className="fas fa-times" style={{color:"red"}}></i>} At least 1 upper case letter</li>
                        </ul>
                        {!inputs.employer ?
                            <div>
                                <div className="form-row s700-display-column">
                                    <div className="form-group col py-1">
                                        <label className=""><h6>Business Name<span style={{color:"red"}}>*</span></h6></label>
                                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                        <div class="icon_form">
                                            <i class="fas fa-shield-alt"></i>
                                            <input id={errors.includes("Business name is required") ? "error-form" : null} maxlength="254" type="text" name="business_name" onChange={handleInputChange} value={inputs.business_name} />
                                            {errors.includes("Business name is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf('Business name is required')]}</strong></div> : null}

                                        </div>
                                    </div>
                                    <div className="form-group col py-1">
                                        <label className=""><h6>Business Website<span style={{color:"red"}}>*</span></h6></label>
                                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                        <div class="icon_form">
                                            <span class="fa fa-globe-americas"></span>
                                            <input id={errors.includes("Business website is required") ? "error-form" : null} maxlength="254" type="text" name="business_website" onChange={handleInputChange} value={inputs.business_website} />
                                            {errors.includes("Business website is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf("Business website is required")]}</strong></div> : null}

                                        </div>
                                    </div>
                                </div>
                                <div className="form-row s700-display-column">
                                    <div className="form-group col py-1">
                                        <label className=""><h6>Tell us about your business<span style={{color:"red"}}>*</span></h6></label>
                                        {/* <input type='text' value='' class='form-control icon-input'/><a><i class='fa fa-user' aria-hidden='true'></i></a> <a></a> */}
                                        <div class="icon_form">

                                            <input id={errors.includes("About your business is required") ? "error-form" : null} maxlength="254" type="text" name="about_business" onChange={handleInputChange} value={inputs.about_business} />
                                            {errors.includes("About your business is required") ? <div className="text-center pt-1"><strong className="text-danger">{errors[errors.indexOf('About your business is required')]}</strong></div> : null}

                                        </div>
                                    </div>
                                </div>
                            </div>
                            : null}
                        <div className="row">
                            <div className="col-md-3">
                            <button type="button" className="btn radius btn-secondary mt-3 px-5 py-2" onClick={() => {
                                typeof history !== 'undefined' && history.go(-1)
                            }}>BACK</button>
                            </div>
                            <div className="col-md-3">
                                <button
                                    disabled={JSON.stringify(submitData) === JSON.stringify(inputs) ? true : false}
                                    className="btn radius btn-purple mt-3 px-5 py-2" type="button"
                                    onClick={() => {
                                        if(consent){
                                        setLoading(true)
                                        setErrors([''])
                                        setSubmitData(inputs)
                                        const dataToSubmit = inputs
                                            handleSubmit(dataToSubmit)
                                            .then(validatedData => {
                                                    window.scrollTo(0, 0);
                                                    setPaymentConfirmation(true);
                             
                                            })
                                            .catch(errors => setErrors(errors))
                                        }else {
                                            alert("Please click the consent checkbox to proceed");
                                            setConsentErrorMsg("Please click the consent checkbox to proceed");
                                        }
                                 
                                    }}>
                                
                                    SIGN UP
                                </button>

                            </div>

                        </div>
                        <div>

                            {errors.length > 0 ? (
                                errors.map(e => {
                                    return (
                                        <p style={{ color: "red" }}>{e}</p>
                                    )
                                })
                            ) : null}
                        </div>
                        <div className="pt-4 text-gray" >
                            <small style={{ fontSize: "16px" }}>
                                By clicking the button above you agree to the
                            <Link to="/terms">
                                    <a> Terms of Service </a>
                                </Link>
                                and
                            <Link to="/privacy">
                                    <a> Privacy Policy</a>
                                </Link>
                                .
                            <div className="d-flex justify-content-start mt-3">
                                    <input onChange={handleClickConsent} checked={consent}className="mt-1 mr-2" type="checkbox" />
                                    <div>
                                        I consent to receive updates and agree to receive occasional
                                        automated text messages from JobCore. Messages and data rates may
                                        apply. Text STOP to cancel or HELP for help.
                                </div>
                                </div>
                            <br/>
                            {consentErrorMsg != "" && !consent ? <span style={{color:"red"}}>{consentErrorMsg}</span> : null}
                            </small>
                        </div>
                    </form>

                </div>
            </div>   
            ): (
                <div className="container h-100 mb-4">
                <div className="text-center">
                    <ul id="progressbar">
                        <li className="active">Select Subscription</li>
                        <li className="active">Create an Account</li>
                        <li className="active">Set up payment</li>
                    </ul>
                    <h3>Your subscription starts as soon as you set up payment.</h3>
                </div>
                <div class={modal ? 'modal fade show d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-header" style={{ borderStyle: 'none' }}>
                            <h5 class="modal-title" id="exampleModalLabel" style={{ color: "black" }}>

                            </h5>
                            <button type="button" class="close" style={{ color: "#a319a3" }} data-dismiss="modal" aria-label="Close" onClick={() => setModal(false )}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h4 className="text-center" style={{ color: "rgb(17, 186, 192)", fontWeight: "bolder" }}>Change Subscription</h4>
                        </div>
                        <div className="row justfy-content-center text-center pb-5">
                            <div className="col">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    value="jobseeker"
                                    onClick={() => {setPlan("basic"); setModal(false)}}
                                    style={{ color: 'white', backgroundColor: '#26de81', border: 'none', borderRadius: '30px', width: '140px' }}
                                >
                                    Basic
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    value="employer"
                                    onClick={() => {setPlan("pro"); setModal(false)}}
                                    style={{ color: 'white', backgroundColor: '#f7b731', border: 'none', borderRadius: '30px', width: '140px' }}
                                >
                                    Pro
                                </button>
                            </div>
                            <div className="col">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    value="employer"
                                    onClick={() => {setPlan("enterprise"); setModal(false)}}
                                    style={{ color: 'white', backgroundColor: '#a55eea', border: 'none', borderRadius: '30px', width: '140px' }}
                                >
                                    Enterprise
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="row">
                    <div className="col">
                        <h5 className="mt-4 text-center">SUBSCRIPTION: <strong className="text-brightblue">{queryStringPlan == "basic" ? "BASIC" : queryStringPlan == "pro" ? "PRO" : queryStringPlan == "enterprise" ? "ENTERPRISE" : null}
                        </strong></h5>
                        <h5 className="mt-4 text-center"><button className="btn radius btn-secondary py-2" onClick={()=> setModal(true)}>Change Subscription</button></h5>
                        <div style={{
                    maxWidth: "300px",
                    height: "auto",
                    margin: "auto",
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    textAlign: "center",
                }}>
                {plan == "basic" ? <PricingBasic/> : plan == "pro" ? <PricingPro/> : plan == "enterprise" ? <PricingEnterprise/> : null}
                
                
                
              </div>
                    </div>
                    <div className="col">
                        <h5 className="mt-4"> <strong className>SUMMARY:</strong></h5>
                        <div style={{backgroundColor: "#F5F5F5", fontColor:"black"}}>
                            <p style={{color:"black"}}>- FIRST 30 DAYS</p>
                            <p className="text-brightblue"><strong>- FREE</strong></p>
                            <p style={{color:"black"}}>- {plan == "basic" ? "BASIC" : plan == "pro" ? "PRO" : plan == "enterprise" ? "ENTERPRISE" : null} SUBSCRIPTION</p>
                        </div>
                        <hr/>
                        <div style={{backgroundColor: "#F5F5F5"}}>
                            <p style={{color:"black"}}>- AFTER 30 DAYS</p>
                            <p className="text-brightblue"><strong>- ${plan == "basic" ? "49.95" : plan == "pro" ? "99.95" : plan == "enterprise" ? "149.95" : null} / month</strong></p>
                            <p style={{color:"black"}}>- {plan == "basic" ? "BASIC" : plan == "pro" ? "PRO" : plan == "enterprise" ? "ENTERPRISE" : null} SUBSCRIPTION</p>
                        </div> 
                        <span>To finish signup, click the <strong><u>Start Subscription</u></strong> button</span>
                        <div className="row">
                            <div className="col">
                                <button className="btn radius btn-secondary mt-3 px-5 py-2" onClick={()=>{setPaymentConfirmation(false);setSubmitData(0)}}>Back</button>

                            </div>
                            <div className="col">
                                <button className="btn radius btn-purple mt-3 px-5 py-2" onClick={(e)=>{
                                registerEmployer(inputs).then(res => {
                                            if (res['id']) {
                                                loginUser({email: res.email, password: inputs.password}).then((res) => {
                                                    if(res['token']){
                                                        if(queryStringPlan){
                                                            redirectToCheckout(e,plan, res['token'], search, res['user']['profile']['employer']);
                                                        }
                                                    }
                                                })
                                        
                                            } else {
                                                setLoading(false)
                                                setPaymentConfirmation(false)
                                                setErrors(res.non_field_errors)
                                            }
                                        })
                            }}>Start Subscription</button>
                            </div>
                        </div>
             
                    </div>
                </div>
            </div>
            )}
            
        </Layout>
    )
}

export default withLocation(EmployersSignUp)
