import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}>
            <div className="spinner-border text-primary" role="status">
            </div>
        </div>
    );
};

export default Loading;