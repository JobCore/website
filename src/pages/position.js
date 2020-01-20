import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'
import SocialMediaSideBar from '../components/socialmedia-sidebar.js'
import Slider from "react-slick";
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { navigate } from '@reach/router'
import withLocation from '../withLocation'
import Countdown from "../components/countdown";

const Position = ({ search }) => {
    const queryString = search["id"]
    const [count, setCount] = useState(0);
    const [shiftData, setShiftdata] = useState([]);
    const [err, setErrors] = useState([]);
    const settings = {
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    async function fetchShift() {
        const res = await fetch(`https://8080-fd2c98dd-a9cb-48fa-ae47-f5e1621ee59a.ws-us02.gitpod.io/api/public/shifts?id=${queryString || ""}`);
        res
          .json()
          .then(res => setShiftdata(res))
          .catch(err => setErrors(err));
      }

      useEffect(() => {
        fetchShift();
      }, []);

    console.log(shiftData)
    return (
        <Layout>
            <SEO title="Positions" />
            <div>
                <SocialMediaSideBar />
                <div className="container pt-4 mt-4">
                    <div class="row">
                        <div class="col-md-8">
                            <h1 style={{ fontSize: "calc(12px + 1.8vw)" }}>
                                {shiftData[0] ? shiftData[0].position.title : ""} 
                        </h1>
                            <h4 style={{ color: "#464646", fontSize: "calc(12px + 0.5vw)" }}>
                            <Countdown deadline={shiftData[0] ? shiftData[0].starting_at : ""} />
                        </h4>
                            <div class="row pt-4">

                                <div class="col-md-10">

                                    <h5 style={{ color: "#464646", fontSize: "calc(12px + 0.5vw)" }}>Job Brief</h5>
                                    <p style={{ color: "#787878", fontSize: "calc(10px + 0.5vw)" }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sem metus, pharetra ac ex eget, euismod vehicula libero. Aliquam imperdiet dapibus mauris, at luctus massa hendrerit vitae. Nulla nisl lacus, ultrices eu vestibulum ac, commodo in lectus. Etiam ut est aliquet, placerat turpis a, efficitur arcu. Vivamus eros neque, imperdiet ut lobortis et, hendrerit sit amet lorem. Aliquam et sollicitudin arcu. Donec vel sagittis purus.
                        </p>
                                    <br />
                                    <h5>Responsibilities</h5>
                                    <ul style={{ listStyleType: "none", color: "#787878", fontSize: "calc(10px + 0.5vw)" }}>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.


                            </li>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.


                            </li>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.


                            </li>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.


                            </li>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.


                            </li>
                                        <li><i class="fas fa-check-circle" style={{ color: "rgb(163, 25, 163)" }}></i>{" "}
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut.

</li>

                                    </ul>

                                </div>

                            </div>
                        </div>
                        <div class="col-md-4 mx-auto my-auto">
                            <div class="card border-dark mb-3" style={{ maxWidth: "100%" }}>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">
                                        <div style={{ width: '100%', height: "calc(50px + 1vw)", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                            <i class="fas fa-map-marker-alt" style={{ color: "rgb(163, 25, 163)", fontSize: "calc(24px + 0.5vw)", paddingRight: "15px" }}></i>
                                            <span style={{ color: "#464646", fontSize: "calc(8px + 0.5vw)" }}>Location <br />
                                                <strong style={{ fontSize: "calc(10px + 0.5vw)" }}> {shiftData[0] ? shiftData[0].venue.title + ", " + shiftData[0].venue.street_address : ""} </strong></span>

                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div style={{ width: '100%', height: "calc(50px + 1vw)", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                            <i class="far fa-calendar-check" style={{ color: "rgb(163, 25, 163)", fontSize: "calc(24px + 0.5vw)", paddingRight: "15px" }}></i>
                                            <span style={{ color: "#464646", fontSize: "calc(8px + 0.5vw)" }}>Salary <br />
                                                <strong style={{ fontSize: "calc(10px + 0.5vw)" }}>{shiftData[0] ? shiftData[0].minimum_hourly_rate : ''} / Hour</strong></span>

                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div style={{ width: '100%', height: "calc(50px + 1vw)", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                            <i class="far fa-calendar-alt" style={{ color: "rgb(163, 25, 163)", fontSize: "calc(24px + 0.5vw)", paddingRight: "15px" }}></i>
                                            <span style={{ color: "#464646", fontSize: "calc(8px + 0.5vw)" }}>Job Type <br />
                                                <strong style={{ fontSize: "calc(10px + 0.5vw)" }}>Contract - Part Time</strong></span>

                                        </div>
                                    </li>
                                    <li class="list-group-item">
                                        <div style={{ width: '100%', height: "calc(50px + 1vw)", display: "flex", flexDirection: "row", alignItems: "center" }}>

                                            <span style={{ color: "#464646", fontSize: "calc(8px + 0.5vw)" }}>Category <br />
                                                <strong style={{ fontSize: "calc(10px + 0.5vw)" }}>Lorem</strong></span>

                                        </div>
                                    </li>
                                </ul>

                                <div class="card-footer bg-transparent text-center"><h3 className="text-brightblue" style={{ fontSize: "calc(12px + 1.8vw)" }}>Apply Here</h3>
                                    <button className="btn radius btn-purple pl-4 pr-4 pt-2 pb-2 w-100 mt-3" style={{ fontSize: "calc(10px + 0.5vw)" }} onClick={e => navigate(`/job-seekers-signup/`)}>
                                        Get Started
                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="mt-4">
                        <h2 style={{ fontSize: "calc(12px + 1.8vw)" }} >Similar <span className="text-brightblue">Shifts</span></h2>
                    </div>
                    <div>

                        <Slider {...settings}>
                            <div className="pb-4 mb-4">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>

                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>
                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>
                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>

                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>
                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>

                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>
                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>

                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>

                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">

                                        <div className="position-card border mx-auto">
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                    <span>Coral Gables</span>
                                                </div>
                                                <div>
                                                    <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                    <span>$12/hrs</span>
                                                </div>
                                            </div>

                                            <h6 style={{ fontSize: "calc(12px + 0.5vw)" }}>Event Coordinator</h6>


                                            <p style={{ fontSize: "calc(10px + 0.5vw)" }}> Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <button className="btn radius btn-darkgreen d-inline">
                                                    Read more
            </button>
                                                <small> Ends in 3 Days 21h 24m 36s/></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>

                    {/* <div className="row">
                                <div className="col-md-4">
                                    <div className="position-card border mx-auto">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                <span>Coral Gables</span>
                                            </div>
                                            <div>
                                                <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                <span>$12/hrs</span>
                                            </div>
                                        </div>

                                        <h6>Event Coordinator</h6>

                                        <p>Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn radius btn-darkgreen d-inline">
                                                Read more
            </button>
                                            <small> Ends in 3 Days 21h 24m 36s/></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                    <div className="position-card border mx-auto">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                <span>Coral Gables</span>
                                            </div>
                                            <div>
                                                <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                <span>$12/hrs</span>
                                            </div>
                                        </div>

                                        <h6>Event Coordinator</h6>

                                        <p>Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn radius btn-darkgreen d-inline">
                                                Read more
            </button>
                                            <small> Ends in 3 Days 21h 24m 36s/></small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4">

                                    <div className="position-card border mx-auto">
                                        <div className="d-flex justify-content-between">
                                            <div>
                                                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                                                <span>Coral Gables</span>
                                            </div>
                                            <div>
                                                <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                                                <span>$12/hrs</span>
                                            </div>
                                        </div>

                                        <h6>Event Coordinator</h6>

                                        <p>Earn $120 working as a Event Coordinator during 6 hours on Mat 15.</p>

                                        <div className="d-flex justify-content-between align-items-center">
                                            <button className="btn radius btn-darkgreen d-inline">
                                                Read more
            </button>
                                            <small> Ends in 3 Days 21h 24m 36s/></small>
                                        </div>
                                    </div>
                                </div>
                            </div> */}







                </div>
            </div>

        </Layout >
    );
}

export default withLocation(Position)