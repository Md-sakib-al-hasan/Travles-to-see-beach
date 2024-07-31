import React from 'react';
import Privile_car from './Privile_car';

const Ready_to_privilee = () => {
    return (
        <div className='bg-[#c0beb2] py-20 '>
            <h1 className='text-4xl pb-8 md:ml-44 font-light text-white'>Ready to Privilee?</h1>
           <div className='md:w-[80%] w-full  mx-auto md:flex '>
           <Privile_car counter="01" title={"Select a membership"} descirtion="Choose a plan, start date and payment option to suit you" src={"https://i.ibb.co/ZX66GpY/pexels-joao-victor-valeriote-3691654-12579155.jpg"}></Privile_car>
           <Privile_car counter="02" title={"Download the app"} descirtion="Create your account and discover all of your Privilee Member benefits." src={"https://i.ibb.co/7rT2cQ7/pexels-footnoteintravel-3229452.jpg"}></Privile_car>
           <Privile_car counter="03" title={`Start Privilee’ing!`} descirtion="Use your app to plan visits, check in and out of venues and redeem discounts." src={"https://i.ibb.co/ZX66GpY/pexels-joao-victor-valeriote-3691654-12579155.jpg"}></Privile_car>
           </div>
        </div>
    );
};

export default Ready_to_privilee;