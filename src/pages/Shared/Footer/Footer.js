import React from 'react';

const Footer = () => {
    return (
        <div>
            {/* load date dynamic */}
            <p className="text-center fw-bold"><small>&copy; {new Date().getFullYear()} Laptop City.</small></p>
        </div>
    );
};

export default Footer;