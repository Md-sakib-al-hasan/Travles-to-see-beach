import * as React from "react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRight } from 'react-icons/fa';

export function CarouselSize() {
  // State to hold the image sources
  const [imageSources, setImageSources] = useState([
    "https://i.ibb.co/D728jR6/logoone.jpg",
    "https://i.ibb.co/XDVbRJK/v1032-v547-minty-10-logo.jpg",
    "https://i.ibb.co/PgqNPc5/5643919.jpg",
    "https://i.ibb.co/bbD4LJy/28481.jpg",
    "https://i.ibb.co/qk0f25Y/6537937.jpg",
  ]);



  return (
    <div className="w-[80%] ">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-sm"
      >
        <CarouselContent className='z-0'>
          {imageSources.map((src, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex">
                <Image className="rounded-full" width={90} height={90} src={imageSources[index]} alt="i" />
                <Image className="rounded-full md:hidden block" width={90} height={90} src={imageSources[index+1]} alt="i" />
                <Image className="rounded-full  md:hidden block " width={90} height={90} src={imageSources[index+2]} alt="i" />
              </div>
            </CarouselItem>
          ))}
          
          <Carousel className='z-0'>
            <CarouselContent className="-ml-2 md:-ml-4">
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
              <CarouselItem className=" md:pl-4 pl-0"></CarouselItem>
            </CarouselContent>
          </Carousel>
        </CarouselContent>
        
        <CarouselNext className="bg-slate-600 h-14 w-14 border-none hidden md:block pl-5 text-white hover:text-white hover:bg-slate-600" />
      </Carousel>
    
    </div>
  );
}
