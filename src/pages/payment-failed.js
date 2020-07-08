import React from "react"
import { Link } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const PaymentFailed = () => (

  <Layout>
    <SEO title="Payment failed" />
    <div className="container h-100">
        <div className="row text-center h-100 justify-content-center align-items-center " style={{paddingTop: "8em", paddingBottom: "10em", color:"red"}}>
            <div className="col-12">
                <i style={{fontSize: "100px"}} className="fa fa-exclamation-triangle" aria-hidden="true"></i>

                <h1>Transaction failed</h1>
                <p>You are account has been created with the "free" subscription. Log in to the employer site and under setting you can change the subscription.</p>
                <p>If you any question about the transaction please contact us at support@jobcore.co</p>

                <a href="https://employer.jobcore.co/login"><button className="btn radius btn-darkgreen px-4 py-2 mb-3">Redirect to login page</button></a>
            </div>
        </div>
    </div>


  </Layout>
)

export default PaymentFailed
