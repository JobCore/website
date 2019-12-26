import React from 'react'
import { navigate } from '@reach/router'
import PropTypes from "prop-types"

// Utilities
import kebabCase from "lodash/kebabCase"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
/* eslint-disable */

const SideBar = ({ keywords }) => {
    return (

        <div className="w-300px text-center s900-hide">
            {/* <input
            className="form-control w-100 shadow mb-5"
            type="text"
            placeholder="Search..." /> */}

            <div className="border p-3 pb-5">
                <h3 className="pt-5 pb-2">
                    There are lots of
                <span className="text-brightblue"> new jobs available </span>
                    on JobCore
            </h3>
                <h6 className="mb-2">
                    Sign up today to get started.
            </h6>
                <button className="btn radius btn-purple w-220px mt-5 mb-2 py-3" onClick={() => navigate(`/job-seekers-signup/`)}>
                    Get Started
            </button>
                <button className="btn radius btn-darkgreen w-220px mt-3 mb-4 py-3" onClick={() => navigate(`/positions/`)}>
                    View Positions
            </button>
            </div>

            <h5 className="text-brightblue text-left mt-4">Keywords</h5>
            <div className="row" style={{ fontSize: "14px", fontWeight: "bolder" }}>
                {keywords.map(tag => (

                    <div className="col-4 mt-3 ">
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>

                            <div className="border w-100 py-1">{tag.fieldValue}</div>
                        </Link>
                    </div>

                ))}

            </div>

        </div>

    )
}

export default SideBar
