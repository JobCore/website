import React, { useState, useEffect } from "react";

const Countdown = ({ deadline }) => {

    const calculateTimeLeft = (deadline) => {
        const difference = +new Date(deadline) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
                m: Math.floor((difference / 1000 / 60) % 60),
                s: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft(deadline));
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach(interval => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span style={{ color: "black" }}>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });

    return (
        <div>
            Ends in {timerComponents.length ? timerComponents : <span style={{ color: "black" }}>Ends in 0 Days 0 hr 0 m 0 s</span>}
        </div>
    );
}


export default Countdown
