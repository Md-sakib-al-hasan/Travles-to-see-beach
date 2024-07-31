import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
const Selection_one_dropdonw = () => {
    const [selctopen, setSelectiopne] = useState(false)
    return (
        <div className="py-2">
            <button onClick={() => setSelectiopne(!selctopen)} className="flex justify-center [w-30%] mx-auto items-center"><p>Plant terms</p>
                {selctopen ? <IoIosArrowUp /> : <IoIosArrowDown></IoIosArrowDown>}
            </button>
            <div className={`w-[80%] mx-auto text-white py-4 text-sm ${selctopen ? "block" : "hidden"}`}>
                <p className="flex gap-2">{<FaCheck />}Your membership will automatically renew</p>
                <p className="flex gap-2 text-left">{<FaCheck />}Two Guest passes valid for five consecutive weekdays are included</p>
                <p className="flex gap-2">{<FaCheck />}Transferable at a fee of AED 549</p>
            </div>
        </div>
    );
};

export default Selection_one_dropdonw;