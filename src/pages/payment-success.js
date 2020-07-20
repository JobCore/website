import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import withLocation from '../withLocation'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { subscription } from '../actions';

const PaymentFailed = ({ search }) => {
    const queryStringPlan = search["plan"]
    const queryStringEmployer = search["employer"]
    const queryStringToken = search['token']

    let selectedPlan = queryStringPlan == "basic" ? process.env.BASIC_ID : queryStringPlan == "pro" ? process.env.PRO_ID : queryStringPlan == "enterprise" ? process.env.ENTERPRISE_ID : "";

    const user = {
        plan : selectedPlan,
        employer: queryStringEmployer,
        token: queryStringToken
    }
    const [state, setState] = useState(null)
    const [seconds, setSeconds] = useState(5);

    useEffect(() => {
        subscription(user).then(
            res => {setState(res.data)}
        )
    }, [])

    useEffect(() => {
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
        window.location.assign('https://employer.jobcore.co/');
        }
    })

    return(
    
        <Layout>
            <SEO title="Payment failed" />
            <div className="container h-100">
                <div className="row text-center h-100 justify-content-center align-items-center " style={{paddingTop: "8em", paddingBottom: "10em", color:"green"}}>
                    <div className="col-12">
                        <i style={{fontSize: "100px"}} className="far fa-thumbs-up" aria-hidden="true"></i>

                        <h1>Payment succesful</h1>
                        <p>{seconds}</p>

                        <a href="https://employer.jobcore.co/login"><button className="btn radius btn-darkgreen px-4 py-2 mb-3">Redirect to login page</button></a>
                    </div>
                </div>
            </div>
        </Layout>

    )


 
}

export default withLocation(PaymentFailed);
