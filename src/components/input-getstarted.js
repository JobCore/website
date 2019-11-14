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
            setShowModal(true)
        } else setShowModal(false)
    }
    return (
        <form onSubmit={validateEmail} >
            <input type="text" name={inputName} className={showModal === false ? 'form-control d-inline w-300px is-invalid' : 'form-control d-inline w-300px'} placeholder={inputPlaceholder} value={inputs.inputName} onChange={handleInputChange} />

            <button type="submit" className="btn radius btn-purple my-2 ml-2 px-4 py-2 d-inline" onClick={validateEmail}>
                {buttonText}
            </button>
            <div className="text-left"> {showModal === false ? <span style={{ fontSize: '12px', color: 'red' }}>{errorLabel}</span> : null}</div>
            <div class={showModal ? 'modal d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header" style={{ borderStyle: 'none' }}>
                            <h5 class="modal-title text-center" id="exampleModalLabel">
                                Are you a jobseeker or an employer?

                            </h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={(e) => setShowModal('')}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="row justfy-content-center text-center p-4">
                            <div className="col">
                                <button
                                    type="button"
                                    class="btn btn-primary"
                                    value="jobseeker"
                                    onClick={() => navigate(`${modalNavigation1 + inputs.inputName ? `?${inputName}=` + inputs.inputName : ''}`)}
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
                                    onClick={() => navigate(`${modalNavigation2 + inputs.inputName ? `?${inputName}=` + inputs.inputName : ''}`)}
                                    style={{ color: 'white', backgroundColor: '#12687E', border: 'none', borderRadius: '30px', width: '140px' }}
                                >
                                    {modalButton2}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default showModal
