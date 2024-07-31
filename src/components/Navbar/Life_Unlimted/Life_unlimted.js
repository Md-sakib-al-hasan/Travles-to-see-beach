import Expolored from '@/components/Shard/Expolored';
import { Link } from 'lucide-react';
import React from 'react';
import Sharedimage from '@/components/Shard/Sharedimage';

const Life_unlimted = ({ convert, title, description, buttentext, src }) => {
    return (
        <div className=''>
            <div className={`w-full md:flex  ${`${convert} ${(convert == "flex-row-reverse") ? "lg:pl-24 " : "ml-0"}`}`}>
                <div className='md:w-[50%] w-full lg:w-[58%] flex justify-center items-center'>
                    <Sharedimage src={src}></Sharedimage>
                </div>
                <div className=' md:w-[40%]'>
                    <Expolored title={title} description={description} buttentext={buttentext}></Expolored>
                </div>
            </div>
        </div>
    );
};

export default Life_unlimted;