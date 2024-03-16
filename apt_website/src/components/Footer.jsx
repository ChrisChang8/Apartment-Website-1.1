import React from 'react';
import {
    FaFacebookSquare,
    FaInstagram,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-full mx-auto py-20 flex flex-col justify-center items-center text-white bg-black'>

            <div className='lg:col-span-3 flex justify-center space-x-[150px] mr-[160px]'>
                <div className='text-center'>
                    <h6 className='font-medium' style={{ fontWeight: 'bold'}}>ADDRESS</h6>
                    <ul>
                        <li className='py-2 text-sm'>1234 Streename Street City, State 12345</li>
                    </ul>
                </div>

                <div className='text-center'>
                    <h6 className='font-medium' style={{ fontWeight: 'bold'}}>OFFICE HOURS</h6>
                    <ul>
                        <li className='py-2 text-sm'>Monday - Friday: 8:30 AM to 5:30 PM</li>
                        <li className='py-2 text-sm'>Saturday: 10 AM to 4 PM</li>
                        <li className='py-2 text-sm'>Sunday: Closed</li>
                    </ul>
                </div>

                <div className='text-center'>
                    <h6 className='font-medium' style={{ fontWeight: 'bold'}}>PHONE</h6>
                    <ul>
                        <li className='py-2 text-sm'>(123)-456-7890</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Footer;
