"use client";
import { useAnimate } from "framer-motion";
type ServiceType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const NO_CLIP = "polygon(0% 0%, 100% 0,100%  100% , 0 100%  )";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100% ,100% 100%, 0 100% )";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100% , 0 100% )";
const TOP_LEFT_CLIP = "polygon(0 0,  100% 0, 100% 100%, 100% 0 )";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};
type Side = 'left' | 'bottom' | 'top' | 'right';

const Service = ({ service }: { service: ServiceType }) => {
  const { icon, title, description } = service;
  const [scope, animate] = useAnimate();

  const handleMouseEnter = (e: any) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: ENTRANCE_KEYFRAMES[side],
    });
  };
  const handleMouseLeave = (e: any) => {
    const side = getNearestSide(e);
    animate(scope.current, {
      clipPath: EXIT_KEYFRAMES[side],
    });
  };
  const getNearestSide = (e: React.MouseEvent<HTMLDivElement>): Side => {
    const box = e.currentTarget.getBoundingClientRect();
    const proximityToLeft = { proximity: Math.abs(box.left - e.clientX), side: 'left' as Side };
    const proximityToRight = { proximity: Math.abs(box.right - e.clientX), side: 'right' as Side };
    const proximityToTop = { proximity: Math.abs(box.top - e.clientY), side: 'top' as Side };
    const proximityToBottom = { proximity: Math.abs(box.bottom - e.clientY), side: 'bottom' as Side };

    const sortedProximity = [proximityToLeft, proximityToRight, proximityToTop, proximityToBottom]
      .sort((a, b) => a.proximity - b.proximity);

    return sortedProximity[0].side;
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="bg-white p-6 rounded-lg shadow-md relative "
    >
      <div className="text-[#000000]">{service.icon}</div>
      <h3 className=" sm:text-sm md:text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-700 sm:text-xs md:text-sm">
        {service.description}
      </p>
      <div
        className="p-6 rounded-lg bg-[#020617] text-white absolute inset-0"
        style={{
          clipPath: NO_CLIP,
        }}
        ref={scope}
      >
        <div className="text-white">{service.icon}</div>
        <h3 className=" sm:text-sm md:text-xl font-bold mb-2">
          {service.title}
        </h3>
        <p className="text-gray-200 sm:text-xs md:text-sm">
          {service.description}
        </p>
      </div>
    </div>
  );
};

export default Service;
