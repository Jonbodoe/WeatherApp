import React from 'react';

const CallToAction = (props) => {
    const {name, value} = props.search
    return (
        <>
            <div id="info" className="p-5 d-flex justify-content-center align-items-center">
                <div>
                    {
                        props.info.display ? 
                        <>
                           <p className="text-center"><i id="weather-icon" className="fa fa-frown-o text-gray"></i></p> 
                            <p className="text-white text-center">Searched: {props.search}</p>
                            <p className="text-gray font-weight-lighter">{props.info.details}</p>  
                        </>
                        :
                        <>
                            <p className="text-center"><i id="weather-icon" className="fa fa-cloud text-gray"></i></p>
                            <h3 className="text-gray font-weight-lighter">Look up Weather For Any Major City!</h3>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default CallToAction