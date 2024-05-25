import React from "react";

const Copyright = () => {
  const currentYear = new Date().getFullYear();
  const companyName = "ByteSync";

  return (
    <div
      id="copyright"
      className="w-full h-auto flex justify-center items-center container text-sm mx-auto "
    >
      <p>
        &copy; {currentYear}{" "}
        <span className="text-orange-400 text-sm font-mono ">
          {companyName}
        </span>{" "}
        . All rights reserved.
      </p>
    </div>
  );
};

export default Copyright;
