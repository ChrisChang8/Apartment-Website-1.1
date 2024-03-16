import React, { useState } from 'react';
import { AiOutlinePhone, AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; 
import { BsHouseHeart } from "react-icons/bs";
import { Link } from 'react-scroll';

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleNav = () => {
      setNav(!nav);
  };

  return (
    /* Navbar's styling, sizing, and fixed position */
    <div className='bg-[#f6fcfe] text-[black] shadow-xl  flex justify-between items-center mx-auto px-4 relative z-10 ' style={{ position: 'fixed', width: '100%', height:'120px', top: 0 }}>
      
      {/* Title styling, sizing */}
      <div className='flex items-center w-full text'>
        {/* <BsHouseHeart className='text-3xl ml-9'/> */}
        <h1 className='text-2xl font-bold' style={{ margin: '30px' }}>BUCKINGHAM COURTS APT.</h1>        
      </div>

      {/* Number styling, sizing */}
      <div className='flex items-center mr-10 '>
        <AiOutlinePhone className='text-2xl mr-2' /> 
        <h2 className='text-1xl font-bold overflow-hidden whitespace-nowrap'>(123)-456-7890</h2>
      </div>
      
      {/* Button styling, sizing */}
      <ul className='hidden md:flex mr-10 bg-[#FEFBF6] shadow-xl rounded-lg whitespace-nowrap'>

        {/* HOME */}
        <li className='p-4 hover:bg-[#e9e9e9] hover:rounded-lg transition-colors duration-300' style={{ cursor: 'pointer' }}>
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}>
            Home
          </Link>
        </li>
        
        {/* ABOUT */}
        <li className='p-4 hover:bg-[#e9e9e9] hover:rounded-lg transition-colors duration-300' style={{ cursor: 'pointer' }}>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-280}
            duration={500}>
            About
          </Link>
        </li>

        {/* AMENITIES */}
          <li className='p-4 hover:bg-[#e9e9e9] hover:rounded-lg transition-colors duration-300' style={{ cursor: 'pointer' }}>
            <Link
              to="amenities"
              spy={true}
              smooth={true}
              offset={-250}
              duration={500}>
              Amenities
            </Link>
        </li>

        {/* FLOOR PLANS */}
        <li className='p-4 hover:bg-[#e9e9e9] hover:rounded-lg transition-colors duration-300' style={{ cursor: 'pointer' }}>
          <Link
            to="floorplans"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}>
            Floor Plans
          </Link>
        </li>

        {/* CONTACT 
        <li className='p-4 hover:bg-[#e9e9e9] hover:rounded-lg transition-colors duration-300' style={{ cursor: 'pointer' }}>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}>
            Contact
          </Link>
        </li>
        */}
        
      </ul>

      <div onClick={handleNav} className='p-3 mr-10 md:text-black shadow-xl hover:bg-[#e9e9e9] transition-colors duration-300 bg-[#FEFBF6]' style={{ cursor: 'pointer' }}>
        {<span>Contact</span>}
      </div>
      
      <div className={!nav ? 'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50' : 'fixed top-[-100%] z-20'}>
        <div className={!nav ? 'fixed left-[32.5%] top-[100px] w-[35%] h-[80%] bg-[#dfdfdf] ease-in-out duration-500 z-20 rounded-[10px]'  : 'fixed top-[-100%] z-20'} style={{ cursor: 'pointer' }}>

          <div onClick={handleNav} className='p-4 md: text-black shadow-xl hover:bg-gray-200 transition-colors duration-300 bg-[#b1b1b1] flex justify-end'>
            {<AiOutlineClose size={20} />}
          </div>
          
          <section id='contact' className="py-12">
            <div className="container mx-auto">
              <h2 className="text-1xl text-center mb-8">Please complete the information below, and we will contact you right away!</h2>
                <form className="max-w-xl mx-auto bg-[#c4c4c4] p-8 rounded-lg shadow-lg">
                  <input
                    type="full_name"
                    placeholder="Full Name"
                    className="w-full mb-4 px-4 py-2 border  border-gray-300 rounded-md focus:outline-none focus:border-black"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    required
                  />
                  <input
                    type="phone_number"
                    placeholder="Phone Number"
                    name="user_number"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Subject"
                    name="user_subject"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                    required
                  />
                  <textarea
                    name="message"
                    placeholder="Message"
                    cols="30"
                    rows="5"
                    className="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-black"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-[#868686] transition-colors duration-300 focus:outline-none focus:border-black"
                  >
                    Send Message
                  </button>
                </form>
              </div>
          </section>
        </div>
      </div>




    </div>
  );
};

export default Navbar;
