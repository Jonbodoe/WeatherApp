import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import WeatherSection from './WeatherSection';

const InfoContainer = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const location = stateContext.location;
    const results = stateContext.results;

    const listResults = () => {
        if (!results.state.length && !location.state.display) {
            console.log(!location.state.display)
            return (
                <div id="info" className="p-5 d-flex justify-content-center align-items-center">
                    <div>
                        {
                            <>
                                <p className="text-center"><i id="weather-icon" className="fa fa-cloud text-gray"></i></p>
                                <h3 className="text-gray font-weight-lighter">
                                    {
                                        !results.state.length ? 'Look up Weather For Any Major City!' : 'Oh no! please check your spelling if not, please try again'
                                    }
                                </h3>
                            </>
                        }
                    </div>
                </div>
            )
        } else {
            return (
                <>
                    {
                        location.state.map((data, index) =>
                            <WeatherSection data={data} key={index} />
                        )
                    }
                </>
            )
        }
    }
    return (
        <>
            <section id="Weather-Container">
                {
                    listResults()
                }
            </section>
        </>
    )
}

export default InfoContainer