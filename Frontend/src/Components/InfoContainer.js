import React, { useContext, useEffect } from 'react';
import AppContext from '../dataHandling/AppContext'
import axios from "axios";

// process.env.PORT <- use when on public server
const InfoContainer = () => {
    // Declare useEffect
    const stateContext = useContext(AppContext);
    const input = stateContext.input;

    // useEffect(()=> {
    //     axios
    //     .get("/search")
    //     .then(function(response) {
    //         console.log(response)
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    //     // axios           
    //     // .post("http://localhost:5000/search", {query: input.state})
    //     //     .then(function(response){
    //     //         console.log(response)
    //     //     })
    //     //     .catch(function (error) {
    //     //         console.log(error);
    //     //     });
    // })
    // const apiHandler = async(props) => {
    //     // await searchResults();
    //     await passQuery(props);
    // }

    // const passQuery = (stateQuery) => {
    //     axios           
    //     .post("http://localhost:5000/search", {query: stateQuery})
    //         .then(function(response){
    //             console.log(response)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });

    // }
    useEffect(() => {
        axios           
        .post("http://localhost:5000/search", {query: input.state})
            .then(function(response){
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            });

    })
    // const apiHandling = async() => {
    //     await searchResults()
    //     await passQuery()
    //     return {search: searchResults(), post: passQuery()}
        
    // }
    // console.log(apiHandling)
    const displayList = (state) => {
        if(input.state !== "") {
            // apiHandler(state)
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
                    {displayList(input.state)}
                </div>
            </div>
        </>
    )
}

export default InfoContainer