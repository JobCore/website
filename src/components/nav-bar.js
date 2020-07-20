import React, { useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../images/jobcorelogo.png'
import { navigate } from "@reach/router"
/* eslint-disable */
export default () => {
    const [accountType, setAccountType] = useState('');
    return (
        <div id="top">
            <div className="d-none d-md-block">

                <nav className="navbar justify-content-between px-10 s1000-display-column s700-collapse-padding">
                    <Link to="/">
                        <img className="navbar-brand jobcore-logo-img" src={Logo} />
                    </Link>

                    <div>
                        {/* <div className="text-right nav-top">
                            <small>
                                <span className="pr-4">(305) 555-8473</span>
                                <Link to="/about" activeClassName="active">
                                    <a className="link px-2 pr-4">
                                        <i class="fas fa-caret-right text-brightblue mr-2"></i>
                                        About the company
                                </a>
                                </Link>
                                <Link to="/login" className="link px-2">
                                    <i class="fas fa-caret-right text-brightblue mr-2"></i>
                                    Sign In
                                </Link>
                            </small>
                        </div> */}
                        <div>
                            <a className="link px-3 s700-collapse-padding" href="tel:+1-305-555-8473">
                                <i className="fas fa-phone-alt"></i> (305) 667-6668

                                </a>
                            <Link to="/job-seekers" activeClassName="active">
                                <a className="link px-3 s700-collapse-padding">
                                    Job Seekers
                                </a>
                            </Link>
                            <Link to="/employers" activeClassName="active" style={{cursor:"pointer"}}>
                                <a className="link px-3 s700-collapse-padding">
                                    Employers
                                </a>
                            </Link>
                            <Link to="/pricing" activeClassName="active">
                                <a className="link px-3 s700-collapse-padding mr-3">
                                    Pricing
                            </a>
                            </Link>

                            <button
                                className="btn radius btn-darkgreen my-2 px-4 s700-collapse-margin ml-0 mr-2"
                                type="submit"
                                onClick={() => setAccountType("signup")}
                            >
                                Get Started
                            </button>

                            <Link to="/login" className="link px-2 ml-3">
                                <i class="fas fa-caret-right text-brightblue mr-1"></i>
                                Sign In
                                </Link>

                        </div>
                    </div>
                </nav>
            </div>
            <div class={accountType ? 'modal fade show d-block' : 'modal'} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">

                <div class="modal-dialog" role="document">
                    <div class="modal-content">

                        <div class="modal-header" style={{ borderStyle: 'none' }}>
                            <h5 class="modal-title" id="exampleModalLabel" style={{ color: "black" }}>

                            </h5>
                            <button type="button" class="close" style={{ color: "#a319a3" }} data-dismiss="modal" aria-label="Close" onClick={(e) => setAccountType('')}>
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <h4 className="text-center" style={{ color: "rgb(17, 186, 192)", fontWeight: "bolder" }}>Are you a jobseeker or an employer?</h4>
                        </div>
                        <div className="row justfy-content-center text-center p-4">
                            <div className="col">
                                <button type="button" class="btn btn-primary" onClick={() => navigate("/job-seekers-signup/")} style={{ color: "white", backgroundColor: "#a319a3", border: "none", borderRadius: "30px", width: "140px" }}>Jobseeker</button>

                            </div>
                            <div className="col">
                                <button type="button" class="btn btn-primary" onClick={() => navigate("/pricing?email=")} style={{ color: "white", backgroundColor: "#12687E", border: "none", borderRadius: "30px", width: "140px" }}>Employer</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg navbar-light d-md-none">
                <Link to="/">
                    <img className="navbar-brand jobcore-logo-img" src={Logo} />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav text-right">

                        <span className="px-3">(305) 555-8473</span>
                        <Link to="/login" activeClassName="active">
                            <a className="link px-3">
                                <i class="fas fa-caret-right text-brightblue mr-2"></i>
                                About the company
                    </a>
                        </Link>
                        <a href="https://employer.jobcore.co" className="link px-3">
                            <i class="fas fa-caret-right text-brightblue mr-2"></i>
                            Sign In
                    </a>

                        <Link to="/job-seekers" activeClassName="active">
                            <a className="link px-3 s700-collapse-padding">
                                Job Seekers
                    </a>
                        </Link>
                        <Link to="/employers" activeClassName="active">
                            <a className="link px-3 s700-collapse-padding">
                                Employers
                    </a>
                        </Link>
                        <Link to="/positions" activeClassName="active">
                            <a className="link px-3 s700-collapse-padding">
                                Positions
                    </a>
                        </Link>
                        <button
                            className="btn radius btn-darkgreen my-2 px-4 s700-collapse-margin"
                            type="submit"
                            onClick={() => setAccountType("signup")}

                        >
                            Get Started
                </button>
                    </div>
                </div>
            </nav>
        </div>

    )
}

