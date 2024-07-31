import React from 'react';
import styles from './style.module.css'
import vidoes from "@/../public/vidoes.jpg"
import Image from 'next/image';
import VideoPlayer from '../VideoPlayer';
const Banner = () => {
  return (
    <div>
      <div className=''>
        <VideoPlayer></VideoPlayer>
      </div>
      <div className='bg-white h-28 left-1/2 absolute w-[2px]'>

      </div>
      <div className='bg-[#282828] w-full gap-4 xl:gap-0 md:h-28 h-auto text-white flex justify-between items-center px-2  xl:px-28'>
        <div className='md:flex block xl:gap-0 gap-1 '>
          <p className='xl:mr-20  '>{`What's On Awards Favourite Lifestyles`}<br></br>App</p>
          <div className='font-bold '>
            <div className=''>
              {`WHAT'S ON`}
            </div>
            <div className='bg-white w-full h-1'>
            </div>
            AWARS 2024
          </div>
          <p className={`uppercase hidden md:block border-2 text-[5px] xl:h-15 mt-1 text-center ${styles.vertical_rl} ${styles.text_mixed}`}>Djeal</p>
        </div>
        <div className='md:flex block items-center xl:gap-0 gap-6'>
          <p>Useful memberships to have in Dubai</p>
          <div className='xl:pl-32   '>
            <p className='bg-black py-4 px-2 font-bold  md:text-xl xl:text-2xl'><span className={styles.outline}>Time OUt</span></p>
            <p className='bg-red-500 text-center'>Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;