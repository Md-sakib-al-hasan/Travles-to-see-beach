import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
const Menupage = ({ isExpanded, Expanedcontrol }) => {


    return (
        <div className={` md:flex   transition-width duration-300 ease-in-out ${isExpanded ? 'w-full' : 'w-0'}`}>
            <div className='md:w-1/2  bg-[#7788A2] flex py-14 items-start'>
                <button className='w-1/3 pl-10 md:relative absolute right-0 ' onClick={() => Expanedcontrol(false)}><RxCross1 color='white' fontSize={30} /></button>
                <div className='md:text-2xl text-lg text-white md:space-y-6 space-y-2 pt-10 md:ml-0 pl-10  '>
                    <h2>Home</h2>
                    <hr className='md:w-[400px] w-[335px] '></hr>
                    <h2>Pool & Beach</h2>
                    <hr></hr>
                    <h2>Gym & Fitness</h2>
                    <hr></hr>
                    <h2>Family</h2>
                    <hr></hr>
                    <h2>Dining</h2>
                    <hr></hr>
                    <h2>Corporate</h2>
                    <hr></hr>
                    <h2>View venues</h2>
                    <hr></hr>
                    <h2>Join now</h2>
                    <hr></hr>
                </div>
            </div>
            <div className='md:w-1/2 bg-[#697992]  '>
                <div className=' md:text-2xl text-lg  md:space-y-6 space-y-2 text-white pt-20 pl-10'>
                    <h2>Privilee Insider</h2>
                    <hr className='md:w-[380px]'></hr>
                    <h2>FAQs</h2>
                    <hr className='m:w-[380px]'></hr>
                    <h2>Careers</h2>
                    <hr className='md:w-[380px]'></hr>
                    <h2>Contact us</h2>
                    <hr className='md:w-[380px]'></hr>
                </div>
            </div>
        </div>
    );
};

export default Menupage;
