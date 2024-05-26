"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { COLORS, DURATION } from "@/lib/constants";

const CallCenterHero: React.FC = () => {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const headerText = "Set Up Your Call Center in Minutes";
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    console.log(element);

    if (element) {
      const targetY = element.offsetTop - 50;

      const durationMultiplier = 1;

      const startingY = window.scrollY;

      const distance = Math.abs(targetY - startingY);

      // console.log('durationMultiplier'+distance)

      const diff = targetY - startingY;

      const duration = DURATION + distance * durationMultiplier;

      let start: number;

      // Animation function
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
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  return (
    <motion.section
      style={{ backgroundImage }}
      className="relative grid header-height w-full place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center md:container mx-auto">
        <span className="mb-1.5 inline-block rounded-full bg-gray-500/50 px-3 py-1.5 text-sm">
          AFRICALL - Revolutionizing Call Centers
        </span>
        <h1
          className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent 
          sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
        >
          {headerText.split("").map((letter, index) => (
            <span className="call_center_headerText" key={index}>
              {letter}
            </span>
          ))}
        </h1>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          With AFRICALL, all you need to do is provide the number of agents,
          make a payment, and our system will auto-configure. Within Minutes,
          you will receive your login details via email. No more un-necessary
          on-premise installations!
        </p>
        <motion.button
          onClick={(e) => {
            handleScroll("callcenter_plans");
          }}
          whileHover={{ scale: 1.015 }}
          whileTap={{ scale: 0.985 }}
          style={{ border, boxShadow }}
          className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50"
        >
          Get Started with AFRICALL
          <FiArrowRight className="transition-transform group-hover:rotate-45 group-active:-rotate-12" />
        </motion.button>
      </div>
      <div className="absolute inset-0 z-0">
        <Canvas>
          <Stars radius={50} count={2500} factor={4} fade speed={2} />
        </Canvas>
      </div>
    </motion.section>
  );
};
export default CallCenterHero;
