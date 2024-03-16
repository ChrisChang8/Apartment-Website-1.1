import React, { useState, useEffect } from 'react';
import { ReactTyped } from "react-typed";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-scroll';
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';

const Home = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check if the screen size is small
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000); // Change the value as per your requirement
    };

    // Event listener to check screen size on resize
    window.addEventListener('resize', handleResize);

    // Initial check for screen size
    handleResize();

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='home' className='bg-black'>

      {/* Image background & styling */}
      <div style={{ position: 'relative', textAlign: 'center' }}>
        <img
          src={p1}
          alt="/"
          style={{
            width: '100%',
            maxHeight: '100vh', // Adjust the maximum height of the image
            minHeight: '60vh',
            objectFit: 'cover', // Ensure the image covers the entire container
            opacity: 0.7 
          }}
        />

        {/* Text "Here for" and ReactTyped component */}
        {!isSmallScreen && (
          <div className='flex justify-center items-center' style={{fontSize:'30px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
            <p className='mr-2'>We're a</p>
            <ReactTyped
              strings={['family.', 'community.', 'team.']}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
        )}

        {/* Center Title Text styling & styling*/}
        <div style={{fontSize: '50px', position: 'absolute', top: isSmallScreen ? '50%' : '57%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white' }}>
          <h1 className='font-bold'>The Perfect Lifestyle </h1>
        </div>

        {/* Button */}
        {!isSmallScreen && (
          <button className='text-white bg-black w-[200px] rounded-md font-medium px-6 py-3 hover:bg-[#c4c4c4] transition-colors duration-300 ' style={{position: 'absolute', top: '65%', left: '50%', transform: 'translate(-50%, -50%)'}}>
            <Link
              to="floorplans"
              spy={true}
              smooth={true}
              offset={-30}
              duration={500}>
              EXPLORE
            </Link>
          </button>
        )}

      </div>
    </div>
  );
};

export default Home;
