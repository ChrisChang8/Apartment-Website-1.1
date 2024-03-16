import React, { useState } from 'react';
import Gray_Splash from '../assets/Gray Splash.jpg';
import Blue_Splash from '../assets/Blue Splash.jpg';
import Mint_Splash from '../assets/Mint Splash.jpg';

const Plans = () => {
    const [bedrooms, setBedrooms] = useState('');
    const [baths, setBaths] = useState('');
    const [squareFootage, setSquareFootage] = useState('');

    // Sample card data
    const cardData = [
        { title: 'XYZ', price: '$1000', bedrooms: '1 BEDROOM', baths: '1 BATH', squareFootage: '1000 Sq. Ft.', image: Gray_Splash },
        { title: 'XYZ', price: '$1500', bedrooms: '2 BEDROOMS', baths: '2 BATH', squareFootage: '2000 Sq. Ft.', image: Blue_Splash },
        { title: 'XYZ', price: '$3000', bedrooms: '3 BED', baths: '3 BATH', squareFootage: '3000 Sq. Ft.', image: Mint_Splash },
        { title: 'XYZ', price: '$3000', bedrooms: '3 BED', baths: '3 BATH', squareFootage: '3000 Sq. Ft.', image: Mint_Splash },
        { title: 'XYZ', price: '$1500', bedrooms: '2 BEDROOMS', baths: '2 BATH', squareFootage: '2000 Sq. Ft.', image: Blue_Splash },
        { title: 'XYZ', price: '$1000', bedrooms: '1 BEDROOM', baths: '1 BATH', squareFootage: '1000 Sq. Ft.', image: Gray_Splash },
        // Add more card data as needed
    ];

    // Function to filter cards based on selected criteria
    const filteredCards = cardData.filter(card => {
        if ((bedrooms === '' || card.bedrooms === bedrooms) &&
            (baths === '' || card.baths === baths) &&
            (squareFootage === '' || card.squareFootage === squareFootage)) {
            return true;
        }
        return false;
    });

    // Function to clear filters
    const clearFilters = () => {
        setBedrooms('');
        setBaths('');
        setSquareFootage('');
    };

    return (
        <div id='floorplans' className='w-full py-[5.5rem] px-4 min-h-[900px]'>

            <div className='underline' style={{ textAlign: 'center', fontSize: '48px', marginBottom: '50px', fontWeight: 'bold' }}>FLOOR PLANS</div>

            {/* Dropdown filters */}
            <div className="flex justify-center space-x-4 mb-8">
                <select value={bedrooms} onChange={e => setBedrooms(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-md">
                    <option value="">Bedrooms</option>
                    <option value="1 BEDROOM">1 Bedroom</option>
                    <option value="2 BEDROOMS">2 Bedrooms</option>
                    <option value="3 BED">3 Bedrooms</option>
                    {/* Add more options as needed */}
                </select>
                <select value={baths} onChange={e => setBaths(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-md">
                    <option value="">Baths</option>
                    <option value="1 BATH">1 Bath</option>
                    <option value="2 BATH">2 Baths</option>
                    <option value="3 BATH">3 Baths</option>
                    {/* Add more options as needed */}
                </select>
                <select value={squareFootage} onChange={e => setSquareFootage(e.target.value)} className="border border-gray-300 px-4 py-2 rounded-md">
                    <option value="">Square Footage</option>
                    <option value="1000 Sq. Ft.">1000 Sq. Ft.</option>
                    <option value="2000 Sq. Ft.">2000 Sq. Ft.</option>
                    <option value="3000 Sq. Ft.">3000 Sq. Ft.</option>
                    {/* Add more options as needed */}
                </select>
                <button onClick={clearFilters} className="border bg-white border-gray-30 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">Clear Filters</button>
            </div>

            {/* Display filtered cards or "No available" message */}
            {filteredCards.length > 0 ? (
                <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-10'>
                    {filteredCards.map((card, index) => (
                        <div key={index} className={`bg-[#ffffff] border-blackw-full shadow-xl flex flex-col p-3 my-4 rounded-lg hover:scale-105 duration-300`} style={{ height: '570px', border: '1px solid black'}}>
                            <h2 className='text-xl font-bold text-center py-2'>{card.title}</h2>
                            <p className='text-center text-2xl font-bold'>{card.price}</p>
                            <div className='text-center font-medium mb-4'>
                                <p className='py-1 border-b mx-2 mt-3'>{card.bedrooms}</p>
                                <p className='py-1 border-b mx-2'>{card.baths}</p>
                                <p className='py-1 border-b mx-2'>{card.squareFootage}</p>
                            </div>
                            <img className='w-64 mx-auto bg-white' src={card.image} alt="/" />
                            <button className='text-white bg-black w-48 rounded-md font-medium my-6 mx-auto px-6 py-2 hover:bg-gray-800 transition-colors duration-300 '>Availability</button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="p-10 text-center text-4xl font-bold">NO AVAILABLE OPTIONS</div>
            )}

        </div>
    )
}

export default Plans;
