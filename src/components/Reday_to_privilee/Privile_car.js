import Image from 'next/image';
import React from 'react';

const Privile_car = ({src,counter,title,descirtion}) => {
    return (
        <div className='md:w-4/12 py-3 ml-10 space-y-2'>
             <Image width={300} className='rounded-xl' height={10} src={src} alt='pic'></Image>
             <div className='flex items-center md:gap-2'>
                <span className='text-white text-3xl'>{counter}</span>
                <div className='w-[80%] h-[2px] bg-white'></div>
             </div>
             <h3 className='text-xl font-semibold text-white'>{title}</h3>
             <p className='text-white'>{descirtion}</p>
        </div>
    );
};

export default Privile_car;