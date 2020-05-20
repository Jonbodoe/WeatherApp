import React from 'react';

const GetTime = (offset) => {
    // console.log('from get Time')
    let initialDate = new Date();
    let utc = initialDate .getTime() + (initialDate.getTimezoneOffset() * 60000);  
    let newDate = new Date(utc + (3600000*offset.utc));
    let hours = newDate.getHours()
    let minutes = initialDate.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    return (
        <>
            {`${hours}:${minutes} ${ampm}`}
        </>
    )
}


export default GetTime