import React from 'react';

const CallToAction = (props) => {
    return (
        <>
            <div id="info" className="p-5 d-flex justify-content-center align-items-center">
                { !props.loader ?
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
                                <p className="text-center"><i id="sun-icon-spin" className="fas fa-sun-o text-light"></i></p>
                                <h3 className="text-gray font-weight-lighter">Look up Weather For Any Major City!</h3>
                            </>
                    }
                    
                </div>
                :                          
                <div className="spinner-border text-secondary" role="status">
                    <span className="sr-only">Loading...</span>
                </div> 
                }
            </div>
        </>
    )
}

export default CallToAction