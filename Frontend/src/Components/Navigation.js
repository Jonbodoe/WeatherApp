import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import NavRow from './NavRow'
import AddRow from './AddRow';

const Navigation = () => {
    const stateContext = useContext(AppContext);
    const search = stateContext.search
    const weatherList = stateContext.weather
    const input = stateContext.input
    const displayList = () => {
        if (!Array.isArray(weatherList) || !weatherList.length) {
            return <AddRow />
        } else {
            weatherList.map((item) => {
                return <NavRow date={item} />
            })
        }
    }

    return (
        <>
            <div className="pt-5">
                <div id="nav" className=" p-4">
                    <div className="py-1">
                        <h1>Weather</h1>
                        <p className="font-weight-light">Providing your local weather information with mad style.</p>
                        <button
                            onClick={() => search.set(!search.state)}
                            className="btn text-light"
                        >
                            <i className="fa fa-search"></i>
                        </button>
                        <input
                            className={`h-100 p-2 bg-warning ${!search.state ? 'invisible' : ''}`}
                            onChange={(e) => input.set(e.target.value)}
                            type="text"
                            name="name"
                            placeholder="search"
                        />
                        <div className="line"></div>
                    </div>
                    <div className="py-4">
                        {
                            displayList()
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navigation 