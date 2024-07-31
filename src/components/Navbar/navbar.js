import Link from "next/link";
import { useRouter } from "next/navigation";
import { CgMenuLeft } from "react-icons/cg";

const Navbar = ({ scrolled, ui, Expanedcontrol }) => {
    const router = useRouter()
    return (
        <div className={`${(!ui && scrolled) ? "bg-white" : " "} ${ui ? 'absolute top-5' : 'fixed'} flex z-50 top-20 lg:justify-between md:justify-around justify-normal h-20 items-center w-full lg:px-10   lg:w-full`}>
            <div className="flex gap-6 items-center  justify-start md:mr-80 lg:mr-0 mr-0" >
                <button className="md:mr-60 lg:mr-0 pl-2 md:pl-0" onClick={() => Expanedcontrol(true)}>{(!ui && scrolled) ? <CgMenuLeft size={30} /> : <CgMenuLeft color="white" size={30} />}</button>
                <h1 className={`text-2xl  font-light ${(!ui && scrolled) ? "text-black" : " text-white"}`}>
                    <Link href='/'>PRIVILEE</Link>
                </h1>
            </div>
            <div className="hidden lg:block">
                <button className={`${(!ui && scrolled) ? "bg-gray-700 text-white" : " bg-white"} btn  py-3 px-14 rounded-3xl font-semibold mr-4`} type="button" onClick={() => router.push('/sigine')}>Join now</button>
                <button className={`btn ${(!ui && scrolled) ? "border-black" : "text-white"}  border-2 hover:bg-white hover:text-black   py-3 px-14 rounded-3xl font-semibold`} type="button" onClick={() => router.push('/')}>View venues</button>
            </div>
        </div>
    );
};

export default Navbar;