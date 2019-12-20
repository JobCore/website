import React, { useState } from 'react'
import validator from 'validator'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Player from '../components/player'
import GetStarted from '../components/input-getstarted'
import GetStartedModal from '../components/modal-getstarted'
//banner video
import BannerVideo from '../videos/BannerVideo.mp4'
import Logo from '../images/jobcorelogo.png'

import { Link } from 'gatsby'
//assets
import AppStore from '../images/app-store.png'
import GooglePlay from '../images/google-play.png'
import Magnify from '../images/magnifying-glass.png'
import Star from '../images/star.png'
import Clock from '../images/clock.png'
import BannerVideoPlaceholder from '../images/BannerPHVideo.png'

import Suitcase from '../images/suitcase.png'
import Calendar from '../images/calendar.png'
import Money from '../images/money.png'
import Envelope from '../images/envelope.png'
import animationEmployer from '../images/animation-employer.gif'
import animationEmployee from '../images/animation-employee.gif'
import Review1 from '../images/review1.png'
import Review2 from '../images/review2.png'
import Review3 from '../images/review3.png'
import Customer1 from '../images/customer1.png'
import Customer2 from '../images/customer2.png'
import Customer3 from '../images/customer3.png'
import { navigate } from '@reach/router'
import GooglePlayStore from '../images/googleplay.svg'
import AppleStore from '../images/applestore.svg'
import { get } from 'https'
/* eslint-disable */

export default () => {
    const [getStarted, setGetStarted] = useState()
    const [emailGetStarted, setemailGetStarted] = useState({
        email: '',
    })

    const handleInputChange = event => {
        event.persist()

        setemailGetStarted(emailGetStarted => ({ ...emailGetStarted, [event.target.name]: event.target.value }))
    }

    return (
        <Layout>
            <SEO title="Home" />

            <div>
                <img src={Logo} />
                <h4>SEPTEMBER 23 - SEPTEMBER 30, 2019</h4>
                <table>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Layout >
    )
}
