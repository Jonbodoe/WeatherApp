import React from 'react';
import GetTime from '../dataHandling/GetTime'
import GetIconWeather from '../dataHandling/GetIconWeather';


const WeatherSection = (props) => {
    const CtoF = Math.floor(props.data.weather.temperature*1.8+32)
    return (
        <React.Fragment>
            <div className="p-4 d-flex flex-column">
                <p className="text-gray pb-3">{`Searched: ${props.data.location.name}`}</p>
                <div className="">
                    <div className="py-4 text-center">
                        <GetIconWeather condition={props.data.weather.weather_descriptions[0]}/>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center py-3 h-100">
                        <div className="text-left p-3">
                            <p className="text-gray font-weight-light">Current Weather</p>
                            <div className="d-flex flex-row text-light serif">
                                <h2 className="">
                                    {props.data.weather.weather_descriptions[0]}
                                    {/* <div className="px-2"> / </div> */}                 
                                </h2>
                                <div className="px-2"> / </div>
                                <h3>
                                    {`${CtoF}°F`}
                                </h3>
                            </div>
                        </div>
                        <div className="text-left px-3">
                            <div>
                                <h3 className="text-light font-weight-light">
                                    <GetTime utc={parseInt(props.data.location.utc_offset)} />
                                </h3>
                            </div>
                            <div className="text-gray">
                                <h3 className="font-weight-bold">{props.data.location.name}</h3>
                                <p className="text-gray ">{`${props.data.location.country} , ${props.data.location.region}`}</p>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row px-3">
                        <div className="bg-teal p-4 m-2 flex-grow-1">
                            <h3 className="text-light font-weight-bold">Precip</h3>
                            <h3 className="">{`${props.data.weather.precip}%`}</h3>
                        </div>
                        <div className="bg-orange p-4 m-2 flex-grow-1">
                            <h3 className="text-light font-weight-bold">Wind</h3>
                            <h3 className="">{`${props.data.weather.wind_dir} ${props.data.weather.wind_speed} mph`}</h3>
                        </div>
                        <div className="bg-warning p-4 m-2 flex-grow-1">
                            <h3 className="text-light font-weight-bold">Humidity</h3>
                            <h3 className="">{`${props.data.weather.humidity}%`}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}
export default WeatherSection;


