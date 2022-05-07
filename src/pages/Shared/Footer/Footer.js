import { ChatAltIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-primary text-white p-2'>

            <div>
                <div className='ps-md-5 container pt-md-5'>
                    <h3 className='mb-md-5 fw-bold'>Laptop City</h3>
                    <p><LocationMarkerIcon width={20} /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p><ChatAltIcon width={20} /> Official: web@laptop-city.com</p>
                    <p><PhoneIcon width={20} /> Helpline : 01322810873 , 01322810867 , 01322810869
                        <br />
                        (Available : Sat - Thu, 10:00 AM to 7:00 PM)
                    </p>
                </div>
                <div>
                </div>
            </div>

            {/* load date dynamic */}
            <p className="text-center fw-bold"><small>&copy; {new Date().getFullYear()} Laptop City.</small></p>
        </div>
    );
};

export default Footer;