import React from 'react'
import PropTypes from 'prop-types'
import Link from "gatsby-link";

/* eslint-disable */

export default Object.assign(({ data }) => (

    <div className="pb-3">
        <img src={data.image} style={{ width: '100%' }} />
        <h4 className="pt-3">{data.title}</h4>
        <small className="text-secondary">
            {data.date} <a className="text-brightblue">{data.author}</a>
        </small>
        <p className="text-gray py-3">
            {data.content}
        </p>
        <Link

            to={'/blog/' + data.url}
            style={{ textDecoration: `none`, color: `inherit` }}
        >
            <button className="btn radius btn-darkgreen px-4 py-2 mb-3">
                Read More
        </button>
        </Link>


        <hr className="w-620px" />
    </div>
),
    {
        propTypes: {
            data: PropTypes.object
        }
    }
);