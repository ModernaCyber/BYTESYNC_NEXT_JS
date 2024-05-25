"use client";

import React from "react";
import { PHONE } from "@/lib/constants";
import Image from "next/image";
const Whatsapp = () => {
  return (
    <a
      aria-label="Chat on WhatsApp"
      href={` https://wa.me/${PHONE}`}
      target="_blank"
    >
      <Image
        alt="Chat on WhatsApp"
        src={"/assets/whatsapp.svg"}
        className="w-full h-full"
        width={16}
        height={16}
      />
    </a>
  );
};

export default Whatsapp;