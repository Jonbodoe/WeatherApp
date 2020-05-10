import React, { useContext} from 'react';
import AppContext from '../dataHandling/AppContext'
// import axios from "axios";
// import Content from './Content'
// import { Fragment } from 'react';


// const resultList = []

const InfoContainer = () => {
    // Declare useEffect
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const results = stateContext.results;

    // const getDate = (offset) => {
    //     let initialDate = new Date(1589101260 * 1000);
    //     let utc = initialDate .getTime() + (initialDate.getTimezoneOffset() * 60000);  
    //     let newDate = new Date(utc + (3600000*offset));
    //     console.log(newDate)
    //     let hours = newDate.getHours()
    //     let minutes = newDate.getMinutes()
    //     let ampm = hours >= 12 ? 'pm' : 'am';
    //     hours = hours % 12;
    //     hours = hours ? hours : 12; // the hour '0' should be '12'
    //     minutes = minutes < 10 ? '0'+minutes : minutes;
    //     return (
    //         <>
    //             {`${hours} : ${minutes} ${ampm}`}
    //         </>
    //         )
    // }

    // const apiHandler = () => {
    //     axios
    //         .post("http://localhost:5000/search", { query: input.state })
    //         .then(function (response) {
    //             if (!response.data.location) {
    //                 return console.log(response)
    //             } else if (response.data.location ) {
    //                 return resultList.push(response.data.location)
    //             }
    //         })
    //         .then(
    //             console.log(resultList)
    //         )
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // } 
    const mapResults = () => {
        console.log(results.state)
        // return <div>
        //     got mapped!
        // </div>
        return results.state.map((item, index) =>
            <React.Fragment key={index}>
                {/* {item.name} */}
                <div className="p-4 d-flex flex-column">
                    {/* <div className="py-2"> */}
                    <p className="text-gray pb-3">{`Searched: ${item.location.name} | Results: ${results.state.length}`}</p>
                    <div className="">
                        <div className="py-4 text-center">
                            <i id="sun-icon-spin" className="fa fa-sun-o text-light"></i>
                        </div>
                        <div className="d-flex flex-row justify-content-between align-items-center py-3 h-100">
                            <div className="text-left p-3">
                                <p className="text-gray font-weight-light">Current Weather</p>
                                <div className="d-flex flex-row text-light serif">
                                    <h2 className="">{item.weather.weather_descriptions[0]}</h2>
                                    <h2 className="px-2"> / </h2>
                                    <h2 className="">{`${item.weather.temperature}°C`}</h2>
                                </div>
                            </div>
                            <div className="text-left px-3"> 
                                <div>
                                    <h3 className="text-light font-weight-light">
                                        {/* {getDate(parseInt(item.location.utc_offset))} */}
                                        whatever time
                                    </h3>
                                </div>
                                <div className="text-gray">
                                    <h3 className="font-weight-bold">{item.location.name}</h3>
                                    <p className="text-gray ">{`${item.location.country} , ${item.location.region}`}</p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex flex-row px-3">
                            <div className="bg-teal p-4 m-2 flex-grow-1">
                                <h3 className="text-light font-weight-bold">Precip</h3>
                                <h3 className="">{`${item.weather.precip}%`}</h3>
                            </div>
                            <div className="bg-orange p-4 m-2 flex-grow-1">
                                <h3 className="text-light font-weight-bold">Wind</h3>
                                <h3 className="">{`${item.weather.wind_dir} ${item.weather.wind_speed} mph`}</h3>
                            </div>
                            <div className="bg-warning p-4 m-2 flex-grow-1">
                                <h3 className="text-light font-weight-bold">Humidity</h3>
                                <h3 className="">{`${item.weather.humidity}%`}</h3>
                            </div>
                        </div>
                    </div>
                    </div>
            </React.Fragment>
        )
    }

    // useEffect(() => {
    //     apiHandler()
    // })
    const listResults = () => {
        if (!results.state.length) {
            return (
                <div id="info" className="p-5 d-flex justify-content-center align-items-center">
                    <div>
                        <p className="text-center"><i id="weather-icon" className="fa fa-cloud text-warning"></i></p>
                        <h3 className="text-gray font-weight-lighter">Look up Weather For Any Major City!</h3>
                    </div>
                </div>
            )
        } else {
        return (
            <>

                    {/* <p>Results: 1</p>
                        </div> */}
                    {mapResults()}
            </>
        )
        }
    }

    // USEEFFECT TO MESS WITH THIS VVVVVV
    // const displayPrompt = () => {
    //     // apiHandler()
    //     if (input.state !== "") {
    //         return (
    //             <>
    //                 <p className="text-secondary text-center">searching...</p>
    //             </>
    //         )
    //     } else if (input.state === "") {
    //         return (
    //             <div>
    //                 <p className="text-center"><i id="cloud" className="fa fa-cloud text-warning"></i></p>
    //                 <h3 className="text-secondary font-weight-lighter">Look up Weather For Any Major City!</h3>
    //             </div>
    //         )
    //     }
    // }

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