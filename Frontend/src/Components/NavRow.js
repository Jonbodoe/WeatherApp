import React, { useContext } from 'react';

const NavRow = () => {
    return (
        <>
            <div className="bg-light navRow p-3">
                <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <p className="font-weight-bold">Philadelphia</p>
                            <p className="font-weight-light">Sunny</p>
                        </div>
                        <p className="font-weight-bold temp">78°F</p>
                </div>
            </div>
        </>
    )
}

export default NavRow