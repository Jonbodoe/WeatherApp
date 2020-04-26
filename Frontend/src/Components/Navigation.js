import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import NavRow from './NavRow'

const Navigation = () => {
    const searchContext = useContext(AppContext)
    const listContext = useContext(AppContext)
    const search = searchContext.search
    const weatherList = listContext.weather


    const displayList = () => {
        if (!Array.isArray(weatherList) || !weatherList.length) {
            // console.log('is empty')
            return (
                <div>
                    <p className="font-weight-lighter">Lets look up some shit</p>
                </div>
            )
        } else {
            mappedList()
        }
    }
    const mappedList = () => {
        weatherList.map((item) => {
            return <NavRow date={item} />
        })
    }
    return (
        <>
            <div className="fixed-top container">
                <div className="row">
                    <div id="nav" className="col-sm-4 p-5 shadow">
                        <div className="py-1">
                            <h1>Weather</h1>
                            <p className="font-weight-light">Providing your local weather information with mad style.</p>
                            <button
                                onClick={() => search.set(!search.state)}
                                className="btn text-secondary"
                            >
                                <i className="fa fa-search"></i>
                            </button>
                            <input
                                className={`h-100 p-2 bg-light ${!search.state ? 'invisible' : ''}`}
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
            </div>


        </>
    )
}
export default Navigation 