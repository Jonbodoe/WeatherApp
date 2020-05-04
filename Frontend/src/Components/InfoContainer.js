import React, { useContext, useEffect } from 'react';
import AppContext from '../dataHandling/AppContext'
import axios from "axios";


const resultList = []

const InfoContainer = () => {
    // Declare useEffect
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    // const results = stateContext.results;

    const apiHandler = () => {
        axios
            .post("http://localhost:5000/search", { query: input.state })
            .then(function (response) {
                if (!response.data.location) {
                    return console.log(response)
                } else if (response.data.location ) {
                    return resultList.push(response.data.location)
                }
            })
            .then(
                console.log(resultList)
            )
            .catch(function (error) {
                console.log(error);
            });
    } 


    // useEffect(() => {
    //     apiHandler()
    // })

    // USEEFFECT TO MESS WITH THIS VVVVVV
    const displayPrompt = () => {
        apiHandler()
        if (input.state !== "") {
            return (
                <>
                    <p className="text-secondary text-center">searching...</p>
                </>
            )
        } else if (input.state === "") {
            return (
                <div>
                    <p className="text-center"><i id="cloud" className="fa fa-cloud text-warning"></i></p>
                    <h3 className="text-secondary font-weight-lighter">Look up Weather For Any Major City!</h3>
                </div>
            )
        }
    }

    return (
        <>
            <div id="info" className="p-5 d-flex justify-content-center align-items-center">
                <div>
                    <p className="text-center">{input.state}</p>
                    {
                        displayPrompt()
                    }
                </div>
            </div>
        </>
    )
}

export default InfoContainer