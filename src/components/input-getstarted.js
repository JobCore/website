import React, { useState } from 'react'
import validator from 'validator'
import { navigate } from '@reach/router'

const GetStarted = () => {
    const [getStarted, setGetStarted] = useState()
    const [emailGetStarted, setemailGetStarted] = useState({
        email: '',
    })

    const handleInputChange = event => {
        event.persist()

        setemailGetStarted(emailGetStarted => ({ ...emailGetStarted, [event.target.name]: event.target.value }))
    }
    return (
        <div>
            <input type="email" name="email" className={getStarted === false ? 'form-control d-inline w-300px is-invalid' : 'form-control d-inline w-300px'} placeholder="Enter Your Email" value={emailGetStarted.email} onChange={handleInputChange} />
            <button type="submit" className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline" onClick={() => (emailGetStarted.email.length > 0 && validator.isEmail(emailGetStarted.email) ? setGetStarted(true) : setGetStarted(false))}>
                Get Started
            </button>
            <div className="text-left"> {getStarted === false ? <span style={{ fontSize: '12px', color: 'red' }}>Enter a valid email address.</span> : null}</div>
            <div class={getStarted ? 'modal d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" style={{ borderStyle: 'none' }}>
                            <h5 class="modal-title" id="exampleModalLabel">
                                Are you a jobseeker or an employer?
                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => setGetStarted('')}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row justfy-content-center text-center p-4">
                            <div className="col">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    value="jobseeker"
                                    onClick={email => navigate(`/job-seekers-signup/${emailGetStarted['email'] ? '?email=' + emailGetStarted['email'] : ''}`)}
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
                                    onClick={email => navigate(`/employers-signup/${emailGetStarted['email'] ? '?email=' + emailGetStarted['email'] : ''}`)}
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
    )
}
export default GetStarted
