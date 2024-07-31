import Image from 'next/image';
import React from 'react';
const Sharedimage = ({src}) => {
    return (
        <div className={`md:w-[70%] w-full `}>
           <Image className='rounded-2xl h-[300px]' src={src} alt='imge'></Image> 
        </div>
    );
};

export default Sharedimage;