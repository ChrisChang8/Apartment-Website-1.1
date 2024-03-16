import React from 'react'
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { MdApartment } from "react-icons/md";
import { FaPaw } from "react-icons/fa";

const Amenities = () => {
    return (
        <div id='amenities' className='w-[100%] p-[80px] bg-[#8CB9BD] mx-auto'>
            
            <div className='mx-auto grid md:grid-cols-3'>

                <div className='flex flex-col justify-center text-center p-10'>
                    <div className='flex justify-center items-center h-full'>
                        <SiHomeassistantcommunitystore className='text-4xl' />
                    </div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Community Amenities</h1>
                    <ul className="text-center">
                        <li>- Shopping: Firewheel Town Center, Garland Plaza</li>
                        <li>- Entertainment: AMC Firewheel 18, Curtis Culwell Center</li>
                        <li>- Parks and Recreation: Bradfield Park, Central Park</li>
                        <li>- Restaurants: Along Buckingham Rd, Shiloh Rd, and Belt Line Rd</li>
                        <li>- Fitness Centers: 24 Hour Fitness, Planet Fitness</li>
                        <li>- Grocery Stores: Walmart Supercenter, Kroger</li>
                    </ul>
                </div>


                <div className='flex flex-col justify-center text-center p-10'>
                    <div className='flex justify-center items-center h-full'>
                        <MdApartment className='text-5xl' />
                    </div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Apartment Amenities</h1>
                    <div class="w-full">
                        <ul class="text-center">
                        <li>- Spacious Floor Plans</li>
                            <li>- Modern Kitchen Appliances</li>
                            <li>- Washer and Dryer Connections</li>
                            <li>- Walk-in Closets</li>
                            <li>- Pet-Friendly Options</li>
                            <li>- High-Speed Internet Access</li>
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col justify-center text-center p-10'>
                    <div className='flex justify-center items-center h-full'>
                        <FaPaw className='text-4xl' />
                    </div>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Pet Policy</h1>
                    <ul class="text-center">
                        <li>- Maximum of two pets per apartment</li>
                        <li>- Breed restrictions may apply</li>
                        <li>- Pet deposit and monthly pet rent required</li>
                        <li>- Proof of current vaccinations required</li>
                        <li>- Pet interview may be required</li>
                        <li>- Pet weight limit of 50 lbs per pet</li>
                    </ul>
                </div>
                

            </div>
            
        </div>
    )
}

export default Amenities