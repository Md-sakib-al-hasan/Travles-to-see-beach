import React from 'react';

const SubSelection = () => {
    return (
        <div className=' text-blue-950 '>
            <button className='flex bg-white w-[60%] mx-auto items-center justify-between px-2 rounded-t-xl py-2 '>
                <p>12 months</p>
                <div className='ml-14 text-[10px] bg-slate-500 rounded-xl px-2'>
                    Bestvalue
                </div>
                <div className='text-right'>
                    <p className='text-[10px] mr-1'>from</p>
                    <div className='text-[15px]'>AED 549/month</div>
                </div>
            </button>
            <hr className=' w-[60%] mx-auto '></hr>
            <button className='flex bg-white w-[60%] mx-auto items-center justify-between px-2  py-2 '>
                <p>3 months</p>
                <div className='ml-4 text-[10px] bg-[#ddecbd] rounded-xl px-2'>
                    summer offer
                </div>
                <div className='text-right'>
                    <p className='text-[10px] mr-1'>from</p>
                    <div className='text-[15px]'>AED 599/month</div>
                </div>
            </button>
            <hr className=' w-[60%] mx-auto '></hr>
            <button className='flex bg-white w-[60%] mx-auto items-center justify-between px-2 rounded-b-xl py-2 '>
                <p>1 months</p>

                <div className='text-right'>
                    <p className='text-[10px] mr-1'>from</p>
                    <div className='text-[15px]'>AED 1,099</div>
                </div>
            </button>

        </div>
    );
};

export default SubSelection;