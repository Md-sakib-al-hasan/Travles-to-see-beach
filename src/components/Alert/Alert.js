
"use client"
import styles from './styles.module.css'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useEffect, useState } from "react";

export default function Custmom_alert({Setui}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Set a timer to show the alert after 50 seconds
    const timer = setTimeout(() => {
      setOpen(true);
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div >
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogContent className={`border-none   w-full xl:w-1/3  bg-[#c0d68f] text-[#113377] ${styles.roun}`}>
          <AlertDialogHeader className="absolute   top-1/4 left-[70px] md:left-1/4" >
            <AlertDialogCancel className="border-none absolute right-[-100px] top-[-100px]"><button onClick={() => Setui(false)} className={`text-xl bg-white px-2 font-light ${styles.crosround}`}>x</button></AlertDialogCancel>
            <AlertDialogTitle className="text-5xl  font-bold">Summer <br></br><span className={styles.sk}>your wauy</span></AlertDialogTitle>
            <AlertDialogDescription >
               <div className='uppercase text-4xl mt-4'>3 months <br></br> aed 1,799</div>
            </AlertDialogDescription>
            <AlertDialogAction> <button  className="bg-gray-500 text-white hover:bg-gray-800 w-full py-3 rounded-xl mt-4 ">Join now</button></AlertDialogAction>
          </AlertDialogHeader>
          <AlertDialogFooter>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
