import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import axios from "axios";

const Navigation = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const results = stateContext.results;
    const location = stateContext.location;
    const error = stateContext.error;
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
                        error.set(error.state = {
                            display: !error.state.display ? !error.state.display : false,
                            details: 'Uh oh.. either the location is not available or check your typing'
                        })
                    } else if (response.data.location) {
                        error.set(error.state = { display: error.state.display ? !error.state.display : false, details: '' })
                        const locationRow =
                        {
                            location: response.data.location,
                            weather: response.data.weather,
                        }
                        results.set([locationRow, ...results.state])
                        location.set([locationRow])
                    }
                })
                // .then(
                //     console.log(error.state)
                // )
                .catch(function (error) {
                    error.set(error.state = {
                        display: !error.state.display ? !error.state.display : false,
                        details: error
                    })
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
                                onKeyDown={(e) => {
                                    if (e.keyCode === 13) {
                                        apiHandler()
                                    }
                                }
                                }
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