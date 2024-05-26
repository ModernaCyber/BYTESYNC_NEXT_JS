"use client";

import React from "react";
import { PHONE } from "@/lib/constants";
import Image from "next/image";

const Whatsapp: React.FC = () => {
  return (
    <a
      className="fixed w-14 h-auto bottom-6 right-4 z-20 bg-[#ffffff] rounded-full p-2 cursor-pointer"
      aria-label="Chat on WhatsApp"
      href={`https://wa.me/${PHONE}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        alt="Chat on WhatsApp"
        src="/assets/whatsapp.svg"
        className="w-full h-full"
        width={16}
        height={16}
      />
    </a>
  );
};

export default Whatsapp;
