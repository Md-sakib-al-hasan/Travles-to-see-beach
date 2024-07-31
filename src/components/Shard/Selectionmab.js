import React, { useState } from 'react';
import SubSelection from './Absouleteselectionment';

const Selectionmab = () => {
    const [seletionitem, setSeletionitm] = useState(0);
    const [seletionitem2, setSeletionitm2] = useState(0);
    const [seletionitem3, setSeletionitm3] = useState(0);
    console.log(seletionitem)
    return (
        <div className=' text-blue-950 py-4'>
            {/* one */}
            <button onClick={() => ((seletionitem >= 2) ? setSeletionitm(seletionitem) : setSeletionitm(seletionitem + 1))} className={` ${((seletionitem == 1 || seletionitem == 0 || seletionitem == 2) && (seletionitem2 == 0 && seletionitem3 == 0)) ? 'block' : 'hidden'} flex bg-white w-[60%] mx-auto items-center justify-between px-2  ${seletionitem == 1 || seletionitem == 2 ? "rounded-xl" : "rounded-t-xl"} py-2`}>
                <p className='md:text-md text-[10px]'>12 months</p>
                <div className='md:ml-14 ml-10 text-[8px] md:text-[10px] bg-slate-500 rounded-xl px-2'>
                    Bestvalue
                </div>
                <div className='text-right '>
                    <p className='md:text-[10px] text-[8px] mr-1'>from</p>
                    <div className='md:text-[15px] text-[10px]'>AED 549/month</div>
                </div>
            </button>
            <div className={`mt-3 ${seletionitem === 2 ? "block" : "hidden"}`}>
                <SubSelection></SubSelection>
            </div>
            <hr className={` w-[60%] mx-auto ${(seletionitem == 1 || seletionitem2 == 1 || seletionitem3 == 1 || seletionitem == 2 || seletionitem2 == 2 || seletionitem3 == 2) ? "hidden" : " "} '`}></hr>

            {/* two */}
            <button onClick={() => (seletionitem2 >= 2 ? setSeletionitm2(seletionitem2) : setSeletionitm2(seletionitem2 + 1))} className={`${((seletionitem2 == 1 || seletionitem2 == 0 || seletionitem2 == 2) && (seletionitem == 0 && seletionitem3 == 0)) ? 'block' : 'hidden'} flex bg-white w-[60%] mx-auto items-center justify-between px-2  ${seletionitem2 == 1 || seletionitem2 == 2 ? "rounded-xl" : ""}  py-2`} >
                <p className='md:text-md text-[10px]'>3 months</p>
                <div className='ml-4 text-[7px] md:text-[10px] bg-[#ddecbd] rounded-xl px-2'>
                    summer offer
                </div>
                <div className='text-right'>
                    <p className='text-[10px] mr-1'>from</p>
                    <div className='md:text-[15px] text-[10px]'>AED 599/month</div>
                </div>
            </button>
            <hr className={` w-[60%] mx-auto ${(seletionitem == 1 || seletionitem2 == 1 || seletionitem3 == 1 || seletionitem == 2 || seletionitem2 == 2 || seletionitem3 == 2) ? "hidden" : " "} '`}></hr>
            <div className={`mt-3 ${seletionitem2 === 2 ? "block" : "hidden"}`}>
                <SubSelection></SubSelection>
            </div>
            {/* three */}
            <button onClick={() => (seletionitem3 >= 3 ? setSeletionitm3(seletionitem3) : setSeletionitm3(seletionitem3 + 1))} className={`${((seletionitem3 == 1 || seletionitem3 == 0 || seletionitem3 == 2) && (seletionitem2 == 0 && seletionitem == 0)) ? 'block' : 'hidden'} flex bg-white w-[60%] mx-auto items-center justify-between px-2  ${seletionitem3 == 1 || seletionitem3 == 2 ? "rounded-xl" : "rounded-b-xl"} py-2 `}>
                <p className='md:text-md text-[10px]'>1 months</p>

                <div className='text-right'>
                    <p className='text-[10px] mr-1'>from</p>
                    <div className='md:text-[15px] text-[10px]'>AED 1,099</div>
                </div>
            </button>
            <div className={`mt-3 ${seletionitem3 === 2 ? "block" : "hidden"}`}>
                <SubSelection></SubSelection>
            </div>

        </div>
    );
};

export default Selectionmab;