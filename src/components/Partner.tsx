"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export type PartnerType = {
  img: string;
  name: string;
  message: string;
  href: string;
};
const Partner = ({ partner }: { partner: PartnerType }) => {
  const { img, name, message, href } = partner;
  const MessageVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const h4Variants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const borderVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <a
      target="_blank"
      href={href}
      className="w-full h-[400px] flex justify-center items-center relative overflow-hidden shadow-xl rounded-md "
    >
      <Image
        src={img}
        alt={name}
        width={200}
        height={200}
        className="w-auto max-w-[200px] absolute inset-0 object-contain mx-auto z-20"
      />
      <div className="absolute bg-[#272243]/25 bottom-0 h-[250px] p-2 z-10 flex flex-col cursor-pointer ">
        <motion.h4
          variants={h4Variants}
          initial="initial"
          // animate="animate"
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.1,
          }}
          className="text-xl mt-4 mb-2 font-semibold"
        >
          {name}
        </motion.h4>
        <motion.div
          variants={borderVariants}
          initial="initial"
          // animate="animate"
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.1,
          }}
          className="w-4/5 mr-auto h-[1px] bg-gray-400"
        />
        <motion.p
          variants={MessageVariants}
          initial="initial"
          // animate="animate"
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1.0,
            delay: 0.3,
          }}
          className="text-gray-700 sm:text-xs md:text-sm"
        >
          {message}
        </motion.p>
      </div>
    </a>
  );
};

export default Partner;
