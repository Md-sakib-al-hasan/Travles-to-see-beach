"use client"
import Custmom_alert from '@/components/Alert/Alert';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import Navbar from '@/components/Navbar/navbar';
import YouTubeVideo from '@/components/Banner/Banner';
import Banner from '@/components/Banner/Banner';
//image
import beachimge from "@/../public/beach_tabile.jpg"
import gymrom from "@/../public/jymrom.jpg"
import watertranel from "@/../public/watertranerl.jpg"
import restorent from "@/../public/restorent.jpg"

import Life_unlimted from '@/components/Navbar/Life_Unlimted/Life_unlimted'
import Discover from '@/components/Discover/Discover';
import CarouselSizes from '@/components/Feedback/Feedback';
import Ready_to_privilee from '@/components/Reday_to_privilee/Ready_to_privilee';
import Join_now from '@/components/Join_now/Join_now';
import Footer from '@/components/Footer/Footer';
import Menupage from '@/components/Menupage/Menupage';
import { SelectTrigger } from '@radix-ui/react-select';


const Home = () => {
  const [ui, Setui] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  //hoempage menu Expeanedcontrol
  const Expanedcontrol = (value) => {
    setIsExpanded(value);

  }

  // scrolled section start and collection scrolling pixles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);

    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div >
      <div className={isExpanded ? "hidden" : ""}>
        {/* alert_sectio start */}

        <Custmom_alert Setui={Setui}></Custmom_alert>
        {
          ui ? "" : <div className='w-full z-50 fixed h-20 text-[#113377] flex flex-row-reverse lg:flex-row justify-between items-center text-lg md:text-3xl bg-[#c0d68f] px-2 md:px-11'>
            <div className='font-bold md:w-auto w-1/5'>
              Summer <span className={` ${styles.sk}`}>your wauy</span>
            </div>
            <div className='uppercase font-semibold'>3 months  aed 1,799</div>
          </div>
        }
        {/* alert_section end */}

        <header>
          <Navbar Expanedcontrol={Expanedcontrol} scrolled={scrolled} ui={ui}></Navbar>
        </header>
        <main>
          {/* banner section */}
          <section><Banner></Banner></section>
          {/* Life unlimite section start */}
          <section>
            <div className='mb-20 space-y-20 mt-10 '>
              <h3 className='text-center md:text-4xl text-2xl py-4 font-light '>Live life unlimited with one app</h3>
              <Life_unlimted convert='flex-row' src={beachimge} title={"Daycay at iconic resorts"} description={'Enjoy complimentary access to the most beautiful beaches and five-star pools that the UAE has to offer.'} buttentext={"Explore resort access"} ></Life_unlimted>
              <Life_unlimted convert='flex-row-reverse' src={gymrom} title={"Get active at popular gyms"} description={"Work out close to home or close to work, with access to premium gyms, studios and fitness classes."} buttentext={"View complimentary gyms"} ></Life_unlimted>
              <Life_unlimted convert='flex-row' src={watertranel} title={"Have fun with the family"} description={"Make memories that last a lifetimeat family-friendly resorts, splash pads and kids’ clubs."} buttentext={"Discover family-friendly venues "} ></Life_unlimted>
              <Life_unlimted convert='flex-row-reverse' src={restorent} title={"Dine at the city's best spots"} description={"Save at restaurants, bars and lounges, plus enjoy curated offers exclusively for Privilee Members."} buttentext={"Discover Restaurants "} ></Life_unlimted>
            </div>
          </section>
          {/* life unlimte section end */}

          <section>  <Discover></Discover></section>
          {/* Feedback */}
          <section>
            <div className='my-20'>
              <h3 className='text-4xl font-light text-center'>{`Don't just take our word for it`}</h3>
              <CarouselSizes></CarouselSizes>
            </div>
          </section>

          {/* reday privily */}
          <section><Ready_to_privilee></Ready_to_privilee></section>
          {/* Join now */}
          <section> <Join_now></Join_now></section>
        </main>
        <footer><Footer></Footer></footer>

      </div  >
      <div className={isExpanded ? " " : " hidden"} >
        <Menupage Expanedcontrol={Expanedcontrol} isExpanded={isExpanded} ></Menupage>
      </div>
    </div>
  );
};

export default Home;