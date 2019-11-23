import React, { useState } from 'react'
import { navigate } from '@reach/router'

const GetStartedModal = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        <div>
            <div className="bg-lightgray px-5 py-10 m-0 text-center">
                <h3 className="mb-1">
                    It's never been easier to
                    <span className="text-brightblue"> find jobs and hire</span> in the hospitality industry.
                </h3>

                <p>Sign up today and experience the difference. It's fast and easy!</p>

                <button className="btn radius btn-purple mt-3 my-2 ml-2 pt-3 pb-3 pl-5 pr-5" onClick={() => setShowModal(true)}>
                    Get Started
                </button>
            </div>
            <div class={showModal ? 'modal fade show d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-header" style={{ borderStyle: 'none' }}>
                            <h5 class="modal-title" id="exampleModalLabel" style={{ color: "black" }}>
                                
                            </h5>
                            <button type="button" class="close" style={{color: "#a319a3"}} data-dismiss="modal" aria-label="Close" onClick={(e) => setShowModal('')}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
        <h4 className="text-center" style={{color:"rgb(17, 186, 192)", fontWeight: "bolder"}}>Are you a jobseeker or an employer?</h4>
      </div>
                        <div className="row justfy-content-center text-center pb-5">
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
export default GetStartedModal
