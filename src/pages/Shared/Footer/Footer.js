import { ChatAltIcon, LocationMarkerIcon, PhoneIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-primary text-white p-2 rounded-3'>

            <div>
                <div className='ps-5 container pt-5'>
                    <h3 className='mb-5 fw-bold'>Laptop City</h3>
                    <p><LocationMarkerIcon width={30} /> Level-4, 34, Awal Centre, Banani, Dhaka</p>
                    <p><ChatAltIcon width={30} /> Official: web@laptop-city.com</p>
                    <p><PhoneIcon width={30} /> Helpline : 01322810873 , 01322810867 , 01322810869
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