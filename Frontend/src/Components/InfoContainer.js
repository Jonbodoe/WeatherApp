import React, { useContext} from 'react';
import AppContext from '../dataHandling/AppContext'
import axios from "axios";


const InfoContainer = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const searchResults = () => {
        axios.get("/search").then(function(response) {
            console.log(response)
        })
    }
    const displayList = () => {
        if(input.state !== "") {
            searchResults()
            return (
                <>
                    <p className="text-secondary text-center">searching</p>
                </>
            )
        } else if (input.state === "") {
            return (
                <div>
                    <i id="cloud" className="fa fa-cloud text-secondary text-center"></i>
                    <h3 className="text-secondary font-weight-lighter">Look up your local Weather!</h3>                 
                </div>
            )
        }
    }
    return (
        <>
            <div id="info" className="p-5 d-flex justify-content-center">
                <div>
                    <p className="text-center">{input.state}</p>
                    {displayList()}
                </div>
            </div>
        </>
    )
}

export default InfoContainer