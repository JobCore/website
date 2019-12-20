import React, { useState } from 'react';
import InfiniteList from '../components/infinite-list';

export default function App() {

    const [state, setState] = useState([]);

    return (
        <div className='App'>
            <InfiniteList state={state} setState={setState} />
        </div>
    );
};