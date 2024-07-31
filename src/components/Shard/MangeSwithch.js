import React, { useState } from 'react';

 export default function SwitchDemo ({isExpanded,toggleExpand })  {


    return (
        
            <label className="relative inline-flex items-center ml-4 cursor-pointer">
                <input 
                    type="checkbox" 
                    className="sr-only peer bg-red-600 z-50" 
                    onChange={toggleExpand} 
                    checked={isExpanded}
                />
                <div className="w-16 h-9 bg-white rounded-full peer peer-checked:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white  after:absolute after:top-[4px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-7 after:w-7 after:transition-all"></div>
                
            </label>
    
    );
};

