
import Image from "next/image";
import { CarouselSize } from "./Carasoule";
  

const Expolored = ({title,description,buttentext}) => {
    return (
        <div className=" space-y-5 md:text-left text-center">
            <h4 className="lg:text-4xl text-2xl  font-light md:text-2xl ">
                {title}
            </h4>
            <div className="w-9/12 md:ml-0 ml-12">
              {description}
            </div>
           <div className="w-full pl-10 md:pl-0">
              
              <CarouselSize></CarouselSize>
            </div>
            <button className="btn py-2 md:w-auto w-[80%]  lg:px-16 md:px-8  hover:border-none border-[1px] text-gray-900 md:text-lg text-sm  font-semibold border-black rounded-2xl hover:bg-[#696A71]">{buttentext}</button> 
        </div>
    );
};

export default Expolored;