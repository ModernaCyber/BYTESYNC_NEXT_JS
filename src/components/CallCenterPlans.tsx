"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { COLORS, callCenterPlans } from "@/lib/constants";
import { FiCheckSquare } from "react-icons/fi";

const CallCenterPlans = () => {
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

  return (
    <div
      id="callcenter_plans"
      className="w-full h-auto pt-6 px-2 md:px-4 md:pt-8 flex-col "
    >
      <div className="w-full text-center flex flex-col items-center justify-center h-auto py-4  ">
        {" "}
        <h2
          className="max-w-3xl bg-gradient-to-br from-[#ffa826e2] to-[#ffa726] bg-clip-text text-center text-xl font-medium leading-tight text-transparent 
          sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight"
        >
          {" "}
          ByteSync CallCenter Plans
        </h2>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Welcome to ByteSync, your destination for seamless integration and
          unparalleled support! At ByteSync, we are on a mission to transform
          your business software experience with cutting-edge solutions tailored
          to elevate your operations.
        </p>
      </div>
      <div className="w-full h-auto min-h-[480px] pt-6 px-2 md:px-4 md:pt-8 grid grid-cols-1 md:grid-cols-3 place-content-center gap-4 ">
        {callCenterPlans.map((plan, index) => (
          <motion.div
            whileHover={{ scale: 1.011 }}
            whileTap={{ scale: 0.985 }}
            style={{ border, boxShadow }}
            className="w-full px-2 rounded-xl flex flex-col items-center cursor-pointer"
            key={index}
          >
            <motion.h2
              style={{ backgroundImage }}
              className="text-left md:text-center bg-clip-text text-xl font-medium leading-tight text-transparent 
          sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight pt-4 mb-2 "
            >
              {plan?.title}
            </motion.h2>
            <div className="w-full h-auto mt-1">
              {plan.options.map((option, ind) => (
                <div
                  className="flex gap-x-2 h-auto  w-full items-center"
                  key={ind}
                >
                  <FiCheckSquare className="text-[#0FC487]" />
                  <span className="">{option.name}</span>
                  <span className="">{option.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CallCenterPlans;
