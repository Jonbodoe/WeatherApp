import React from 'react';

const GetIconWeather = (props) => {
    console.log(props.condition)
    let conditions = [
        {
            html: <i id="weather-icon" className="fas fa-cloud-rain text-light"></i>,
            weather: ['Rain, Mist', 'Heavy Rain', 'Light Rain', 'Light Rain Shower', 'Heavy Rain Shower', 'Light Rain With Thunderstorm', 'Heavy Rain With Thunderstorm'],
        },
        {
            html: <i id="weather-icon" className="fas fa-cloud text-light"></i>,
            weather: ['Partly cloudy', 'Overcast', 'Patchy rain possible']
        },
        {
            html: <i id="weather-icon" className="fas fa-moon text-light"></i>,
            weather: ['Clear']
        },
        {
            html: <i id="weather-icon" className="fas fa-sun text-light"></i>,
            weather: ['Sunny']
        }
    ]
    let matchWeather = conditions.filter((current) => {
        return current.weather.includes(props.condition)
    })
    let displayIcon = (weather) => weather[0].html
    return (
        <>
            {
                matchWeather.length ? displayIcon(matchWeather) :
                <div id="" className="text-light">N/A</div>
            }
        </>
    )
}

export default GetIconWeather

