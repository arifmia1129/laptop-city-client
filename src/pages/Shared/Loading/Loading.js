import React from 'react';

const Loading = () => {
    // Added bootstrap spinner
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "90vh" }}>
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>
    );
};

export default Loading;