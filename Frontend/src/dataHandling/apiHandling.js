// import React, { useContext} from 'react';
// import AppContext from '../dataHandling/AppContext'
// import axios from "axios";


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