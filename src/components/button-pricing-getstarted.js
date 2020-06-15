import React, { useState } from 'react'
import { navigate } from '@reach/router'

const GetStartedPricing = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className="mb-3 d-none d-lg-block" style={{ color: 'black' }}>
                <button onClick={() => setShowModal(true)} className="p-1" style={{fontSize: "13px",
  border: '1px solid black',
  width: "80%",
  outline: "none",
  padding: "12px",
  boxShadow: "2px 5px 10px rgba(0,0,0,.1)",
  backgroundColor: "white",
  borderRadius: "30px",
  fontWeight:'bolder'}}>
                    <strong>GET STARTED</strong>
                </button>
            </div>
            <div className=" d-lg-none" style={{ color: 'black' }}>
                <button type="button" onClick={() => setShowModal(true)} class="btn btn-lg btn-block btn-outline-dark">
                    GET STARTED
                </button>
            </div>
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
    )
}
export default GetStartedPricing
