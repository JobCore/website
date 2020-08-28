import React, { useState } from "react";

const FAQ = ({
    question,
    text
}) => {
    const [showFAQ, setShowFAQ] = useState(false)

    return (
        <div className="row justify-content-between border-bottom" onClick={() => setShowFAQ(!showFAQ)} style={{ cursor: 'pointer' }}>
            <div className="col-md-10 mt-3 mb-3">{question}</div>
            <div className="col-md-1 ml-auto  my-auto">{showFAQ ? <i className="fas fa-chevron-up pr-4"></i> : <i className="fas fa-chevron-down pr-4"></i>}</div>
            <div class="w-100"></div>
            {showFAQ && (
                <div className='pl-3 pb-3' style={{ fontSize: '14px' }}>
                    {text}        </div>
            )}
        </div>
    );
};

export default FAQ;