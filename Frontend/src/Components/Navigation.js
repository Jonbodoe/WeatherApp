import React, { useContext, useEffect } from 'react';
import AppContext from '../dataHandling/AppContext'
import NavRow from './NavRow'
// import AddRow from './AddRow';
// import apiHandler from '../dataHandling/apiHandling'
import axios from "axios";
// import Content from "./Content"

const Navigation = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const results = stateContext.results;
    const location = stateContext.location;
    let locationRow = {}
    const apiHandler = () => {
        if (!input.state.length) {
            return
        } else {
            console.log(input.state)
            axios
                .post("http://localhost:5000/search", { query: input.state })
                .then(function (response) {
                    if (!response.data.location) {
                        console.log('aint got shit')
                        locationRow = {
                            location: input.state,
                            display: false 
                        }
                        
                    } else if (response.data.location ) {

                        locationRow = 
                            {
                                location: response.data.location,
                                weather: response.data.weather,
                                display: true
                            }
                        results.set([locationRow,...results.state])
                        location.set([locationRow])
                    }
                })
                .then(
                    console.log(results)
                )
                .catch(function (error) {
                    console.log(error, 'aint aint working');
            });
        }
    }
    return (
        <>
            <div className="">
                <div id="nav" className="px-4 d-flex align-items-center">
                    <div className="py-1">
                        <h1>Weather</h1>
                        <p className="font-weight-light text-brown">Providing your local weather information with mad style.</p>
                        <h2 className="font-weight-bold">Location</h2>
                        <div className="">
                            <input
                                className="p-2 bg-warning form-control w-100 my-2"
                                onChange={(e) => input.set(e.target.value)}
                                type="text"
                                name="name"
                                placeholder="Enter A City"
                            />
                            <button
                                id="search"
                                onClick={() => apiHandler()}
                                className="btn btn-light text-dark"
                            >
                                <i className="fa fa-search px-2"></i>
                                Search
                            </button>
                            </div>
                        <div className="line"></div>
                    </div>
                    <div className="py-4 d-flex flex-column">
                        {/* {
                            displayList()
                        } */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation 