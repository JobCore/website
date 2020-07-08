import React, { useState } from 'react'
import validator from 'validator'
import { navigate } from '@reach/router'

const showModal = ({ buttonText, errorLabel, inputPlaceholder, inputName, modalQuestion, modalButton1, modalButton2, modalNavigation1, modalNavigation2, }) => {
    const [showModal, setShowModal] = useState()
    const [inputs, setInput] = useState({
        email: '',
    })

    const handleInputChange = event => {
        event.persist()

        setInput(inputs => ({ ...inputs, [event.target.name]: event.target.value }))
    }

    const validateEmail = event => {
        event.preventDefault();
        if (inputs.email.length > 0 && validator.isEmail(inputs.email)) {
            navigate(`/job-seekers-signup/${inputs['email'] ? '?email=' + inputs['email'] : ''}`)
        }
    }
    return (
        <div className="container">


            <form onSubmit={validateEmail} >
                <div className="row">
                    <div className="col-md-8 my-auto">
                        <input type="text" name={inputName} className={showModal === false ? 'form-control d-inline is-invalid' : 'form-control d-inline'} placeholder={inputPlaceholder} value={inputs.inputName} onChange={handleInputChange} />

                        <div className="text-left mt-2" style={{ fontSize: "1rem" }}> {showModal === false ? <div class="alert alert-danger p-2" role="alert">
                            {errorLabel}
                        </div> : null}</div>
                    </div>
                    <div className="col-md-4">

                        <button type="submit" className="btn radius btn-purple pl-4 pr-4" onClick={validateEmail}>
                            {buttonText}
                        </button>
                    </div>

                </div>


                {/* <div class={showModal ? 'modal fade show d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header" style={{ borderStyle: 'none' }}>
                                <h5 class="modal-title" id="exampleModalLabel" style={{ color: "black" }}>

                                </h5>
                                <button type="button" class="close" style={{ color: "#a319a3" }} data-dismiss="modal" aria-label="Close" onClick={(e) => setShowModal('')}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <h4 className="text-center" style={{ color: "rgb(17, 186, 192)", fontWeight: "bolder" }}>{modalQuestion}</h4>
                            </div>
                            <div className="row justfy-content-center text-center pb-5">
                                <div className="col">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        value="jobseeker"
                                        onClick={() => navigate(`/job-seekers-signup/${inputs['email'] ? '?email=' + inputs['email'] : ''}`)}
                                        style={{ color: 'white', backgroundColor: '#a319a3', border: 'none', borderRadius: '30px', width: '140px' }}
                                    >
                                        {modalButton1}
                                    </button>
                                </div>
                                <div className="col">
                                    <button
                                        type="button"
                                        class="btn btn-primary"
                                        value="employer"
                                        onClick={() => navigate(`/employers-signup/${inputs['email'] ? '?email=' + inputs['email'] : ''}`)}
                                        style={{ color: 'white', backgroundColor: '#12687E', border: 'none', borderRadius: '30px', width: '140px' }}
                                    >
                                        {modalButton2}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </form>
        </div>
    )
}
export default showModal
