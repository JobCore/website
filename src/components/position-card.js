import React from 'react'
import PropTypes from 'prop-types'
import Countdown from "../components/countdown";
import moment from "moment"
import { navigate } from '@reach/router'

const PositionCard = ({ data, onClick }) => (
    <div onClick={e => navigate(`/position/`)} className="position-card border mx-auto">
        <div className="d-flex justify-content-between">
            <div>
                <i class="fas fa-map-marker-alt mr-1 text-purple"></i>
                <span>{data.venue.street_address.split(",").splice(0, data.venue.street_address.split(",").length - 2).join()}</span>
            </div>
            <div>
                <i class="fas fa-money-bill-wave mr-1 text-purple"></i>
                <span>${data.minimum_hourly_rate}/hrs</span>
            </div>
        </div>

        <h6>{data.position.title}</h6>

        <p>Earn ${Math.floor(Math.abs(new Date(data.ending_at) - new Date(data.starting_at)) / 36e5) * data.minimum_hourly_rate} working as a {data.position.title} during {Math.floor(Math.abs(new Date(data.ending_at) - new Date(data.starting_at)) / 36e5)} on {moment(data.starting_at).format("MMMM Do")}.</p>

        <div className="d-flex justify-content-between align-items-center">
            <button className="btn radius btn-darkgreen d-inline">
                Read more
            </button>
            <small><Countdown deadline={data.starting_at} /></small>
        </div>
    </div>
)

PositionCard.propTypes = {
    data: PropTypes.object,
    onClick: PropTypes.func
}

export default PositionCard
