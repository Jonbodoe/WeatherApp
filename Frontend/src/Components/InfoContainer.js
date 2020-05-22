import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import WeatherSection from './WeatherSection';
import CallToAction from './CallAction';

const InfoContainer = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const location = stateContext.location;
    const results = stateContext.results;
    const error = stateContext.error;
    const loader = stateContext.loader

    const listResults = () => {
        if (!results.state.length || error.state.display) {
            return (
                <CallToAction info={error.state} search={input.state} loader={loader.state}/>
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
            <div>
                

            </div>
                {
                    listResults()
                }
            </section>
        </>
    )
}

export default InfoContainer