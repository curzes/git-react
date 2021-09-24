import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';

export default function FetchReactTest() {

    const [data, setData] = useState();
    const [test, setTest] = useState();

    useEffect(() => {

        fetch("http://universities.hipolabs.com/search?country=Sweden")
            .then(response => response.json())
            .then(json => setData(json));

        console.log(data);
    }, []);

    const updateTest = () => {

        setTest(prevValue => {

            const newVal = 'Hello'

            if (newVal !== prevValue) {
                return newVal
            }
            console.log("Same value")

        })

    };

    useEffect(() => {

        console.log("Test is updated");

    }, [test]);

    return (
        <div>
            <button>Fetch data</button>
            <button onClick={updateTest}>Update test {test}</button>
        </div>
    )

}
