import { useRouter } from 'next/navigation';
import React from 'react';

const Join_now = () => {
    const router = useRouter();
    return (
        <div className='py-40 text-center space-y-12'>
            <h4 className='text-4xl'>Get instant access from just AED 549 a month</h4>
            <button className='bg-gray-800 w-[50%] md:w-[20%] py-3 rounded-xl text-white' onClick={() => router.push('/sigine')}>Join now</button>
            
        </div>
    );
};

export default Join_now;