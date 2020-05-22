import React from 'react';

const NavRow = (props) => {
    // console.log(props.current)
    return (
        <>
            {/* <div className="navRow p-3 nav-widget"> */}
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <p className="font-weight-bold">{props.current.location.name}</p>
                        <p className="font-weight-light">{props.current.weather.weather_descriptions[0]}</p>
                    </div>
                    <p className="font-weight-bold temp">{Math.floor(props.current.weather.temperature * 1.8 + 32)}°F</p>
                </div>
            {/* </div> */}
        </>
    )
}

export default NavRow