import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby'
import withLocation from '../withLocation'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { registerEmployer, loginUser, subscription } from '../actions';

const CryptoJS = require('crypto-js');

const PaymentSuccess = ({ search }) => {
    const [inputs, setInputs] = useState(null)
    const [state, setState] = useState(null)
    const [token, setToken] = useState("")
    const [seconds, setSeconds] = useState(5);
    
    useEffect(
        () => {
            if(search && search.source){
                var source = decodeURIComponent(search.source)
                var bytes  = CryptoJS.AES.decrypt(source, 'jobcore_employer');
                var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
                decryptedData.validate_email = false;
                let selectedPlan = decryptedData.plan == "basic" ? process.env.BASIC_ID : decryptedData.plan == "pro" ? process.env.PRO_ID : decryptedData.plan == "enterprise" ? process.env.ENTERPRISE_ID : "";

                registerEmployer(decryptedData).then(res => {
                    if (res['id']) {
                        loginUser({email: decryptedData.email, password: decryptedData.password}).then((res) => {
                            console.log('res login', res);
                            console.log(res['token'])
                            if(res['token']){
                                setToken(res['token'])
                                console.log('TOKEN', res['token'])
                                subscription({
                                    plan : Number(selectedPlan),
                                    employer: res['user']['profile']['employer'],
                                    token: res['token']
                                }).then(
                                    res => {setState(res.data)}
                                )
                            }
                        })
                
                    } else {
                       alert("Error, please contact support@jobcore for help")
                    }
                })
            }
        },
        [],
      );


    useEffect(() => {
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
        window.location.assign(`https://employer.jobcore.co/?token=${token}`);
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
                        <p style={{fontWeight:"bolder"}}>You will be redirected to JobCore in ...{seconds}</p>

                        <a href="https://employer.jobcore.co/login"><button className="btn radius btn-darkgreen px-4 py-2 mb-3">Redirect to login page</button></a>
                    </div>
                </div>
            </div>
        </Layout>

    )


 
}

export default withLocation(PaymentSuccess);
