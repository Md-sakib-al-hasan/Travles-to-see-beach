import Image from 'next/image';
import React from 'react';
import badmilnton from '@/../public/badminton.jpg'
const Discover = () => {
    return (
        <div className='w-[80%] mx-auto rounded-2xl md:flex  bg-[#7788A2] text-center'>
            <div className='lg:w-3/12 md:w-6/12'>
              <Image  className='rounded-l-2xl w-full md:h-72 lg:h-auto' src={badmilnton} alt='badmiltion'/>
            </div>
            <div className='md:w-9/12 space-y-7 pt-4 pb-5  lg:pb-0'>
              <h3 className='text-4xl text-white font-light'>Discover Privilee Padel</h3>
              <p className='text-white'>Get complimentary access to padel courts in Abu Dhabi, Dubai and Sharjah.</p>
              <button className='btn py-2 lg:w-[30%] w-[60%]  border-2 rounded-2xl text-white border-white'>Explore padel counts</button>  
            </div>
        </div>
    );
};

export default Discover;