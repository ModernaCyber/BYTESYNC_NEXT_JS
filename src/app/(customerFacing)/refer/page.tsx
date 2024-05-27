import ReferForm from "@/components/ReferForm";
import React from "react";

const Login = () => {
  return (
    <div className="h-auto min-h-dvh w-full flex flex-col items-center ">
      <div className="w-full relative text-center flex flex-col items-center justify-center h-auto min-h-[600px]">
        <h2 className="max-w-3xl bg-gradient-to-br from-[#ffa826e2] to-[#ffa726] bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Earn With Our CallCenter Referals
        </h2>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Welcome to ByteSync! Discover our comprehensive suite of services
          designed to optimize your business processes and drive growth. From
          Enterprise Resource Planning (ERP) to Web Development and Design, we
          have the solutions to meet your unique needs.
        </p>
        <h2 className="text-4xl leading-tight font-bold text-center my-2">
          ...$1.5/Agent...
        </h2>
        <div className="absolute bottom-8 md:bottom-10 left-10">
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
              fill="#FFAF37"
            />
            <path
              id="svg-dot"
              className="dot-animation"
              d="M15.7143 12.8C15.7143 14.5673 14.3072 16 12.5714 16C10.8357 16 9.42857 14.5673 9.42857 12.8C9.42857 11.0327 10.8357 9.6 12.5714 9.6C14.3072 9.6 15.7143 11.0327 15.7143 12.8Z"
              fill="#FFAF37"
            />
          </svg>
        </div>
      </div>
      <div className="w-full h-ato min-h-[480px] flex items-center">
        <ReferForm />
      </div>
    </div>
  );
};

export default Login;
