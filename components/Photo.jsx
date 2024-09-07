"use client";

import { motion } from "framer-motion";
import Image from "next/image";



const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div
               initial={{ opacity: 0}}
               animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
               }}>
                <div className="w- [298px] h-[298px] xl:w-[498px] xl:h-[498px]  absolute">
                   <Image src="/profilepic.jpeg" 
                     priority
                     quality={100}
                     width={400}
                     height={400}
                     className="rounded-full aspect-square object-cover "
                     style ={{
                        borderRadius: "50%",
                        overflow: "hidden",
                     }}
                   
                    />
                </div>
               {/* circle */} 
               <motion.svg className="w-[440px] xl:w-440px] h-[440px] xl:h-[430px] absolute"
               fill="transparent"
               viewBox="0 0 506 506"
               xmlns="http://www.w3.org/2000/svg"
               >
               <motion.circle cx="230" cy="235" r="250" stroke="#00ff99"
               strokeWidth="10"
               strokeLinecap="round"
               strokeLinejoin="round"
               initial={{ strokeDasharray: "30 10 0 0 " }}
               animate={{
                strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                rotate: [120, 360 ], 
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                /> 
               </motion.svg>
            </motion.div>
        </div>
    );
};

export default Photo 