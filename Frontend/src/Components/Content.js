import React, { useContext } from 'react';
import AppContext from '../dataHandling/AppContext'

const Content = () => {
    const stateContext = useContext(AppContext);
    // const search = stateContext.search
    const results = stateContext.results;
    console.log(results)
    return (
    <>
        <p>yea</p>
     </>
     )
}
export default Content