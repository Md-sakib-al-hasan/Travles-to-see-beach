import Image from "next/image";
import Link from "next/link";
import googl from '@/../public/gooplay.png'
import { PiFacebookLogoLight } from "react-icons/pi";
import { PiYoutubeLogoThin } from "react-icons/pi";
import { PiLinkedinLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";

const Footer = () => {
    return (
        <div className=" w-full  bg-[#7788a2] pt-20 pb-40">
            <div className="w-[80%] mx-auto bg-[#7788a2] md:flex justify-evenly">
                <div className="text-white font-semibold flex gap-10 ">
                    <div className=" space-y-6">
                      <p><Link href="/">Home</Link></p>
                      <p><Link href="/">Pool & Beach</Link></p>
                      <p><Link href="/">Kids & Family</Link></p>
                      <p><Link href="/">Gym & Fitness</Link></p>
                      <p><Link href="/">Corporate</Link></p>
                      <p><Link href="/">Join Now</Link></p>
                    </div>
                    <div className="space-y-6">
                    <p><Link href="/">View Venues</Link></p>
                      <p><Link href="/">Privilee Insider</Link></p>
                      <p><Link href="/">FAQs</Link></p>
                      <p><Link href="/">Careers</Link></p>
                      <p><Link href="/">Contarct us</Link></p>
                      <p><Link href="/"> WhatsApp</Link></p>
                    </div>
                </div>
                <div className="text-center md:hidden block py-5">
                     <hr className="text-white pt-5"></hr>
                    <h4 className="uppercase text-lg text-white">follow us</h4>
                    <div className="flex gap-5 pt-3">
                    <PiFacebookLogoLight  fontSize={40} color="white"/>
                    <PiYoutubeLogoThin  fontSize={40} color="white" />
                    <PiLinkedinLogoThin  fontSize={40} color="white" />
                    <PiInstagramLogoThin fontSize={40} color="white" />
                    </div>

                </div>
                <div className="text-white space-y-2">
                    <h4 className="uppercase font-semibold">Download our app</h4>
                    <Image src={googl} alt="googl"></Image>
                    <h4 className="text-6xl uppercase pt-28">privilee</h4>      
                </div>
                <div className="text-center hidden md:block">
                    <h4 className="uppercase text-lg text-white">follow us</h4>
                    <div className="flex gap-5 pt-3">
                    <PiFacebookLogoLight  fontSize={40} color="white"/>
                    <PiYoutubeLogoThin  fontSize={40} color="white" />
                    <PiLinkedinLogoThin  fontSize={40} color="white" />
                    <PiInstagramLogoThin fontSize={40} color="white" />
                    </div>

                </div>

            </div>
            <div className="text-white flex md:justify-end justify-center mt-16 mr-7">
                <p className="mx-8">privacy</p>
                <p>Terms & Conditons</p>
            </div>
        </div>
    );
};

export default Footer;