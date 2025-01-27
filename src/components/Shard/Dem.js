import React, { useState } from 'react';

const SelectionMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        console.log('sk')
    };

    return (
        <div className="absolute inline-block text-left">
            <div>
                <button 
                    type="button" 
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none" 
                    onClick={toggleMenu}
                >
                    Select an Option
                </button>
            </div>

            {isOpen ?   (
                <section 
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
                    role="menu" 
                    aria-orientation="vertical" 
                    aria-labelledby="menu-button" 
                    tabIndex="-1"
                >
                    <div className="py-1" role="none">
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                            role="menuitem" 
                            tabIndex="-1" 
                            id="menu-item-0"
                        >
                            Option 1
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                            role="menuitem" 
                            tabIndex="-1" 
                            id="menu-item-1"
                        >
                            Option 2
                        </a>
                        <a 
                            href="#" 
                            className="text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100" 
                            role="menuitem" 
                            tabIndex="-1" 
                            id="menu-item-2"
                        >
                            Option 3
                        </a>
                    </div>
                </section>
            ): ""}
        </div>
    );
};

export default SelectionMenu;
