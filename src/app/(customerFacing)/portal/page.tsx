import LoginForm from "@/components/loginForm";
import React from "react";

const Portal = () => {
  return (
    <div className="h-auto min-h-dvh w-full flex flex-col items-center ">
      <div className="w-full text-center flex flex-col items-center justify-center h-auto ">
       
        {/* <div className="gap-4 w-auto flex ">
          <Link
            className="px-4 md:px-6 py-2 rounded-full border border-[#0FC487] "
            href={"/admin"}
          >
            Admin
          </Link>
          <Link
            className="px-4 md:px-6 py-2 rounded-full border border-[#0FC487] "
            href={"/user"}
          >
            User
          </Link>
        </div> */}
        aah eeeh yesu wastahili heshima na utukufu
        <LoginForm/>
      </div>
    </div>
  );
};

export default Portal;
