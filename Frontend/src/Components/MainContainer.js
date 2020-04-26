import React from 'react';

const MainContainer = (props) => {

    return (
    <>
    <div className="container">
        <div className="row">
            {props.children}
        </div>
    </div>
    </>
    )
}
export default MainContainer