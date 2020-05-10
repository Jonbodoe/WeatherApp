// import { useContext } from 'react';
// import AppContext from '../dataHandling/AppContext'
// import axios from "axios";
// // import Content from "../Components/Content"


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

// export default apiHandler


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