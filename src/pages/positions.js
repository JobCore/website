import React, { useState, useEffect } from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'
import PositionCard from '../components/position-card'
import useInfiniteScroll from '../components/infinite-list'
import Spinner from '../images/loading2.gif'


const Positions = () => {
    const [hasError, setErrors] = useState(false)
    const [positions, setPositions] = useState([]);
    const [isFetching, setIsFetching] = useInfiniteScroll(fetchMorePositions);
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(true)
    const [noresults, setNoResults] = useState(false)

    async function fetchData() {
        if (!noresults) {
            setLoading(true)
            //upcoming=true
            const res = await fetch(`https://api.jobcore.co/api/public/shifts?limit=6&offset=${offset}`);
            res
                .json()
                .then(res => {
                    if (res.length !== 0) {
                        let next = offset + 5
                        setOffset(next)
                        console.log(res)
                        setPositions(positions.concat(res))
                        setLoading(false)
                    } else {
                        setNoResults(true)
                        setLoading(false)
                    }

                })
                .catch(err => setErrors(err));
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    function fetchMorePositions() {

        setTimeout(() => {
            fetchData()
            setIsFetching(false);
        }, 500);
    }

    async function searchPosition(keywords) {
        if (!noresults) {
            setLoading(true)
            //upcoming=true
            const res = await fetch(`https://api.jobcore.co/api/public/shifts?limit=6&offset=${offset}keywords=${keywords}`);
            res
                .json()
                .then(res => {
                    if (res.length !== 0) {
                        let next = offset + 5
                        setOffset(next)
                        console.log(res)
                        setPositions(res)
                        setLoading(false)
                    } else {
                        setNoResults(true)
                        setLoading(false)
                    }

                })
                .catch(err => setErrors(err));
        }
    }
    return (
        <Layout>
            <SEO title="Positions" />
            <div className="gray-top-image text-light d-flex align-items-center">
                <div className="text-center w-100 px-10">
                    <h1 style={{ color: "white" }}>
                        Every Job In
                        <span className="text-brightblue"> One Place</span>
                    </h1>
                    <h4>
                        Your <span className="text-brightblue">Dream Job</span>{' '}
                        Just A Click Away!
                </h4>
                    <div>Want to find a job? We have 263</div>

                    <form onSubmit={(e) => { e.preventDefault(); console.log(e) }}>
                        <div className="input-group py-5 px-10 w-100">
                            <input
                                type="text"
                                className="form-control border-0 rounded-0 w-50"
                                placeholder="Keywords"
                                size="20"
                            />
                            <select class="custom-select border-top-0 border-bottom-0 border-right-0 w-25">
                                <option selected>Location</option>
                                <option value="1">Miami Beach</option>
                                <option value="2">Coral Gables</option>
                                <option value="3">Downtown</option>
                                <option value="4">Key Biscayne</option>
                            </select>
                            <div className="input-group-append rounded-0">
                                <button type="submit" className="input-group-text btn-purple border-0 rounded-0 px-4" style={{ border: 'none' }}>
                                    Get Started
                        </button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>

            <div className="container text-center my-5 py-5">
                <div className="row my-2">
                    {positions.map((e, i) => {
                        let hide = i === 2 ? "s900-hide" : "";
                        return (
                            <div className={"col my-2 s1000-collapse-margin " + hide}
                                key={i}>
                                <PositionCard data={e} onClick={console.log('clcik')} />
                            </div>
                        )
                    })}
                </div>
                {loading ? <img src={Spinner} /> : null}
                {noresults ? <h4 className="pt-4">No more results found.</h4> : null}
            </div>
        </Layout>
    )
}

export default Positions
