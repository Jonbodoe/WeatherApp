import { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'
import axios from "axios";
// import Content from "../Components/Content"

// let locationRow = {}
const apiHandler = () => {
    const stateContext = useContext(AppContext);
    const input = stateContext.input;
    const results = stateContext.results;
    const location = stateContext.location;
    const error = stateContext.error;
    if (!input.state.length) {
        return
    } else {
        console.log(input.state)
        axios
            .post("http://localhost:5000/search", { query: input.state })
            .then(function (response) {
                if (!response.data.location) {
                    console.log('aint got shit')
                    error.set(error.state = {
                        display: !error.state.display ? !error.state.display : false,
                        details: 'Uh oh.. either the location is not available or check your typing'
                    })
                } else if (response.data.location ) {
                    error.set(error.state = {display: error.state.display ? !error.state.display : false, details:''})
                    const locationRow = 
                        {
                            location: response.data.location,
                            weather: response.data.weather,
                        }
                    results.set([locationRow,...results.state])
                    location.set([locationRow])
                }
            })
            .then(
                console.log(error.state)
            )
            .catch(function (error) {
                // console.log(error, 'aint aint working');
                error.set(error.state = {
                    display: !error.state.display ? !error.state.display : false,
                    details: error
                })
        });
    }
}


// const apiHandler = () => {
//     const stateContext = useContext(AppContext);
//     const input = stateContext.input;
//     const results = stateContext.results;
//     axios
//         .post("http://localhost:5000/search", { query: input.state })
//         .then(function (response) {
//             if (!response.data.location) {
//                 return console.log(response)
//             } else if (response.data.location ) {
//                 return results.push(response.data.location)
//             }
//         })
//         .then(
//             console.log(results)
//         )
//         .catch(function (error) {
//             console.log(error);
//         });
// } 

export default apiHandler


// const apiHandling = async() => {
//     const searchResults = () => {
//         await axios
//             .get("/")
//             .then(function(response) {
//             console.log(response)
//             .catch(function (error) {
//                 console.log(error);
//             });
//         })
//     }
//     const passQuery = () => {
//         axios           
//         .post("/", 
//         {
//             query:input.state,
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 "Access-Control-Allow-Origin": "*",
//               }
        
//         })
//             .then(function(response){
//                 console.log(response)
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });

//     }
//     return {search: searchResults, apiFetch: passQuery }
// }

// export default apiHandling