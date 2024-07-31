"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import beachimage from "@/../public/sigine1.jpg"
import { GrGroup } from "react-icons/gr";
import { BsExclamationCircle } from "react-icons/bs";
import SwitchDemo from '@/components/Shard/MangeSwithch';
import style from "./signe.module.css"
import Selectionmab from '@/components/Shard/Selectionmab';
import Selection_one_dropdonw from '@/components/Shard/Selection_one_dropdonw';
import Link from 'next/link';

const Sigine = () => {
    const [membership, setMembership] = useState(1);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isoverflow, setisoverflow] = useState(false);
    // Togglefore white
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const toggleoverlow = () => {
        setisoverflow(!isoverflow);
        console.log("sk")
    };

    return (
        <div className={style.voerflowclip}>
            <h1 className='uppercase absolute  text-white z-50 xl:top-16 md:top-4 lg:top-12 left-28 md:left-1/3 lg:left-20 text-3xl md:text-4xl'><Link href="/">privilee</Link></h1>
            <div className='  text-center'>
                <Image className={`xl:h-[990px] h-[800px]  lg:h-[880px] md:h-[585px]  object-cover ${isExpanded ? style.imgezoom : " "} ${isoverflow ? style.imgezoom : " "}`} src={beachimage} alt='bg-imge' />
                <div className='absolute  top-8 lg:top-20 md:top-20 w-full px-2 xl:top-32 xl:left-[400px] lg:left-[270px] lg:w-[50%] xl:w-[40%] space-y-5 '>
                    <h4 className='md:text-3xl text-xl text-white'>Select your membership</h4>
                    <div className='bg-[#c3d1dd] flex justify-between py-2 text-white items-center px-2 rounded-2xl'>
                        <h3 className='text-gray-600 md:text-[15px] text-[12px]'>Adults (18+)</h3>
                        <button className={` p-1 px-3 text-2xl rounded-xl text-white ${(membership === 1) ? "bg-[#7788a2]" : "bg-[#313f53]"}`} onClick={() => (membership === 2) ? setMembership(membership - 1) : setMembership(membership)} >-</button>
                        <span>{membership}</span>
                        <button className={` p-1 px-3 text-2xl rounded-xl text-white ${(membership === 2) ? "bg-[#7788a2]" : "bg-[#313f53]"}`} onClick={() => (membership === 2) ? setMembership(membership) : setMembership(membership + 1)}>+</button>

                        <h5 className='text-gray-400'>Children bundle</h5>
                        <div className='flex space-x-3 text-gray-400'>
                            <BsExclamationCircle />
                            <GrGroup fontSize={20} />
                        </div>
                        <SwitchDemo toggleExpand={toggleExpand} isExpanded={isExpanded} ></SwitchDemo>
                    </div>
                    <div className=' flex justify-center items-center text-white text-xl'>
                        <h5>Pay upfront</h5>
                        <SwitchDemo toggleExpand={toggleoverlow} isExpanded={isoverflow}></SwitchDemo>
                        <h5 className='ml-5'>pay monthly</h5>
                    </div>
                    <div className='bg-[#7788a2] rounded-xl pb-7'>
                        <div className='text-xl text-white font-light bg-[#8f9db2] py-2 rounded-t-xl'>
                            {(membership == 1) ? <p>Individual membership</p> : <p>couple membership</p>}
                        </div>
                        <div className='text-white'>
                            <h5>FROM</h5>
                            <h5 className='text-2xl'>AED 549/month</h5>
                            <h5>PER ADULT</h5>
                        </div>
                        <Selectionmab></Selectionmab>
                        <Selection_one_dropdonw></Selection_one_dropdonw>
                        <div className='bg-gray-800 w-[35%] mx-auto py-2 rounded-xl text-white' >continue</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sigine;