"use client";

import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Copyright from "./copyright";
import Whatsapp from "./whatsapp";
import {
  DURATION,
  EMAIL,
  FB_LINK,
  IG_LINK,
  LINKEDLN_LINK,
  PHONE,
  TWITTER_LINK,
} from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Footer: React.FC = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (link_to: string) => {
    if (pathname === "/") {
      scrollTo(link_to);
    } else {
      // Handle navigation when not on the homepage
      router.push(`/${link_to}`);
    }
  };


  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const targetY = element.offsetTop - 50;
      const startingY = window.scrollY;
      const distance = Math.abs(targetY - startingY);
      const diff = targetY - startingY;
      const duration = DURATION + distance;

      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);
        window.scrollTo(0, startingY + diff * percentage);
        if (progress < duration) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }
  };

  return (
    <footer id="footer" className="w-full h-auto min-h-80 flex flex-col bg-[#020617] text-white">
      <div className="w-full h-full flex flex-col container mx-auto">
        <div className="w-full h-auto py-8 px-4 flex justify-center items-center"></div>
        <div className="w-full h-auto p-8">
          <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
            <div className="w-full mb-4 text-left">
              <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
              <div className="mb-4 w-auto flex flex-col items-center justify-center">
                <div className="flex w-full items-center justify-start">
                  <FiPhone className="mr-2" />
                  <span>{PHONE}</span>
                </div>
                <div className="flex w-full items-center justify-start">
                  <FaMailBulk className="mr-2" />
                  <span>info@bytesync.co.ke</span>
                </div>
              </div>
              <div className="flex space-x-4">
                <a href={FB_LINK} target="_blank" className="text-2xl">
                  <FaFacebook />
                </a>
                <a href={TWITTER_LINK} target="_blank" className="text-2xl">
                  <FaTwitter />
                </a>
                <a href={LINKEDLN_LINK} target="_blank" className="text-2xl">
                  <FaLinkedin />
                </a>
                <a href={IG_LINK} target="_blank" className="text-2xl">
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="mb-4 w-full">
              <h3 className="text-lg font-bold mb-2">Quick Links</h3>
              <ul className="list-none">
                <li>
                  <button
                    className="text-xs hover:translate-x-2 transition-all hover:opacity-80 opacity-100 hover:text-orange-400"
                    onClick={() => handleClick("home")}
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    className="text-xs hover:translate-x-2 transition-all hover:opacity-80 opacity-100 hover:text-orange-400"
                    onClick={() => handleClick("about-us")}
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button
                    className="text-xs hover:translate-x-2 transition-all hover:opacity-80 opacity-100 hover:text-orange-400"
                    onClick={() => handleClick("services")}
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    className="text-xs hover:translate-x-2 transition-all hover:opacity-80 opacity-100 hover:text-orange-400"
                    onClick={() => handleClick("contactus")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <h3 className="text-lg font-bold mb-2">Our Services</h3>
              <ul className="list-none">
                <li>
                  <Link className="text-xs hover:translate-x-2 transition-all hover:opacity-80" href="/services">
                    Enterprise Resource Planning
                  </Link>
                </li>
                <li>
                  <Link className="text-xs hover:translate-x-2 transition-all hover:opacity-80" href="/services">
                    Customer Relationship Management
                  </Link>
                </li>
                <li>
                  <Link className="text-xs hover:translate-x-2 transition-all hover:opacity-80" href="/services">
                    Enterprise Content Management
                  </Link>
                </li>
                <li>
                  <Link className="text-xs hover:translate-x-2 transition-all hover:opacity-80" href="/services">
                    Document Management Solution
                  </Link>
                </li>
                <li>
                  <Link className="text-xs hover:translate-x-2 transition-all hover:opacity-80 text-red-500" href="/services">
                    Web Design & Development
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-4 w-full">
              <h3 className="text-lg font-bold mb-2">Connect With Us</h3>
              <ul className="list-none">
                <li>
                  <a href={`mailto:${EMAIL}`} target="_blank" className="text-xs">
                    Email Us: {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={`tel:${PHONE}`} target="_blank" className="text-xs">
                    Phone: {PHONE}
                  </a>
                </li>
                <li className="w-auto h-8">
                  <a href={`https://wa.me/${PHONE}`} target="_blank" className="text-xs flex items-center">
                    <Whatsapp />
                    <span className="ml-2">Whatsapp</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-auto bg-gray-200 opacity-100 py-2 text-gray-600">
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
