"use client";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  AnimatePresence
} from "framer-motion";
import React, { useState, useEffect } from "react";
import { COLORS } from "@/lib/constants";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
const Header = () => {
  const imageMessages = [
    {
      src: "assets/erp_two.jpg",
      message:
        "Unlock ERP Power for Business Success, Transforming Operations and Processes.",
    },
    {
      src: "assets/crm_one.jpg",
      message:
        "Forge Strong Customer Bonds with Advanced CRM Solutions, Empowering Business Growth.",
    },
    {
      src: "assets/dms.webp",
      message:
        "Elevate Content Management with Cutting-edge ECM Tools, Streamlining Workflows for Efficiency.",
    },
    {
      src: "assets/dms.webp",
      message:
        "Streamline Document Processing with Dynamic DMS Solutions, Enhancing Organization.",
    },
    {
      src: "assets/webD1.webp",
      message:
        "Craft Stunning, Functional Websites for Unforgettable Online Experiences.",
    },
    {
      src: "assets/topview-app.jpg",
      message:
        "Revolutionize Digital Presence with Exceptional, Intuitive Mobile Apps.",
    },
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50% , ${color})`;
  //`radial-gradient(125% 125% at 50% 0%, #020617 50% , #dd335c)`
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imageMessages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [currentImage]);

  return (
    <AnimatePresence initial={false} mode="wait" >
    <header
      id="hero-header"
      className="w-full header-height  relative overflow-hidden "
    >
      <motion.div
        style={{
          backgroundImage,
        }}
        className="absolute inset-0 "
      />
      <div className="absolute bottom-20 left-10">
        <svg
          width="26"
          height="48"
          viewBox="0 0 26 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.7857 35.2V12.8C22.7857 7.05624 18.2126 2.4 12.5714 2.4C6.93023 2.4 2.35714 7.05624 2.35714 12.8V35.2C2.35714 40.9438 6.93023 45.6 12.5714 45.6C18.2126 45.6 22.7857 40.9438 22.7857 35.2ZM12.5714 0C5.62842 0 0 5.73075 0 12.8V35.2C0 42.2692 5.62842 48 12.5714 48C19.5144 48 25.1429 42.2692 25.1429 35.2V12.8C25.1429 5.73076 19.5144 0 12.5714 0Z"
            fill="white"
          />
          <path
            id="svg-dot"
            className="dot-animation"
            d="M15.7143 12.8C15.7143 14.5673 14.3072 16 12.5714 16C10.8357 16 9.42857 14.5673 9.42857 12.8C9.42857 11.0327 10.8357 9.6 12.5714 9.6C14.3072 9.6 15.7143 11.0327 15.7143 12.8Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>

      {imageMessages.map((item, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center opacity-0  transition-opacity duration-1000 ${
            index === currentImage ? " opacity-100" : "opacity-0"
          }`}
        >
          <motion.h1
            variants={{
              initial: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            initial="initial"
            animate="visible"
            exit="exit"
            transition={{
              duration: 0.2,
              delay: 1,
              ease: "easeInOut",
            }}
            className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          max-w-3xl bg-gradient-to-br  from-white to-gray-400 bg-clip-text text-center text-xl font-medium leading-tight text-transparent 
          sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight 
          "
          >
            {item.message}
          </motion.h1>

        </div>
      ))}
    </header>
    </AnimatePresence>
  );
};

export default Header;
