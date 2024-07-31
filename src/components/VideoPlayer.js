import { useRouter } from 'next/navigation';
import React, { useEffect, useRef } from 'react';

const VideoPlayer = () => {
    const router = useRouter();
    const videoRef = useRef(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.play();
            }
        }, 5000); // 5 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='relative w-full h-screen'>
            <video className='w-full h-full object-cover' ref={videoRef} muted loop>
                <source src="/sk.mp4" type="video/mp4" />
            </video>
            <div className='pl-2 md:0 absolute top-1/2 md:left-5 xl:left-24 ml-1 space-y-3 transform -translate-y-1/2 pt-11'>
                <h1 className='text-4xl md:text-6xl font-light text-white'>YOUR LIFE, UNLIMITED</h1>
                <p className='text-white md:w-[65%] xl:w-[56%] text-lg md:text-xl xl:text-3xl '>
                    One award-winning membership, providing complimentary access to the UAE’s best beach clubs,
                    five-star hotel pools and beaches, and world-class gyms.
                </p>
            </div>
            <div className='absolute bottom-2 md:ml-8 lg:hidden'>
                <button className='btn bg-white py-3 px-14 rounded-3xl font-semibold mr-4' type="button" onClick={() => router.push('/sigine')}>Join now</button>
                <button className='btn text-white text-wrap border-2 hover:bg-white hover:text-black py-3 px-8 rounded-3xl font-semibold' type="button" onClick={() => router.push('/')}>View venues</button>
            </div>
        </div>
    );
};

export default VideoPlayer;
