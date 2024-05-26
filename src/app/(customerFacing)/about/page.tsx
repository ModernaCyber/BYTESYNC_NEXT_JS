import React from "react";

const About = () => {
  return (
    <div id="about-us" className="w-full h-auto md:mt-2 mb-10">
      <div className="md:container mx-auto p-2 md:p-8 flex flex-col justify-center">
        <div className="w-full text-center flex flex-col items-center justify-center h-auto min-h-[480px]  ">
          <h2
            className="max-w-3xl bg-gradient-to-br from-[#ffa826e2] to-[#ffa726] bg-clip-text text-center text-3xl font-medium leading-tight text-transparent 
          sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight"
          >
            Welcome to ByteSync
          </h2>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            Welcome to ByteSync, your destination for seamless integration and
            unparalleled support! At ByteSync, we are on a mission to transform
            your business software experience with cutting-edge solutions
            tailored to elevate your operations.
          </p>
        </div>
        <div className=" w-full mt-6 hidden lg:flex lg:flex-col ">
          <h3 className="text-2xl font-bold mb-6 text-center ">
            What Sets Us Apart?
          </h3>
          <ul className=" list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4 mb-6 ">
            <li className="w-full h-auto min-h-44 shadow-lg  p-4 rounded-sm flex-flex-col ">
              <span className="font-bold">Specialization:</span>
              <span className="mt-4 text-xs md:text-sm ">
                We focus on Enterprise Resource Planning (ERP), Customer
                Relationship Management (CRM), and Enterprise Content Management
                (ECM) systems.
              </span>
            </li>
            <li className="w-full h-auto min-h-44 shadow-lg  p-4 rounded-sm flex-flex-col ">
              <span className="font-bold">Committed Partnership:</span>
              <span className="mt-4 text-xs md:text-sm ">
                ByteSync is your dedicated partner in navigating the dynamic
                landscape of modern business technologies.
              </span>
            </li>
            <li className="w-full h-auto min-h-44 shadow-lg  p-4 rounded-sm flex-flex-col ">
              <span className="font-bold">Operational Efficiency:</span>
              <span className="mt-4 text-xs md:text-sm ">
                We understand that the key to operational efficiency lies in
                robust software solutions.
              </span>
            </li>
            <li className="w-full h-auto min-h-44 shadow-lg  p-4 rounded-sm flex-flex-col ">
              <span className="font-bold">Technological Edge:</span>
              <span className="mt-4 text-xs md:text-sm ">
                Our mission is to synchronize your business processes with the
                latest advancements in ERP, CRM, and ECM systems, giving you a
                competitive edge.
              </span>
            </li>
          </ul>
        </div>
        <span className="leading-relaxed text-xs text-center md:text-sm mt-2 font-light mb-4 ">
          Join ByteSync in revolutionizing your business software experience —
          where technology and support converge for your success!
        </span>

        <div className="mt-8 w-full">
          <h3 className="text-2xl font-bold mb-6 text-center ">
            Why Choose ByteSync?
          </h3>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 ">
            <p className="leading-relaxed text-sm  rounded-md shadow-lg p-4 flex flex-col items-start h-auto w-full  ">
              <span className="font-bold mt-2 text-sm sm:text-lg mb-4">
                Expert Consultation:
              </span>{" "}
              Our seasoned team of professionals is ready to guide you through
              the software landscape, ensuring you make informed decisions for
              your unique business needs.
            </p>
            <p className="leading-relaxed text-sm  rounded-md shadow-lg p-4 flex flex-col items-start h-auto w-full ">
              <span className="font-bold mt-2 text-sm sm:text-lg mb-4">
                Tailored Solutions:
              </span>{" "}
              We recognize that one size does not fit all. ByteSync crafts
              customized solutions, ensuring your business software aligns
              seamlessly with your operations and goals.
            </p>
            <p className="leading-relaxed text-sm  rounded-md shadow-lg p-4 flex flex-col items-start h-auto w-full ">
              <span className="font-bold mt-2 text-sm sm:text-lg mb-4">
                Reliable Support:
              </span>{" "}
              Beyond implementation, ByteSync is committed to providing
              top-notch support. Our team is at your service, ensuring your
              software runs smoothly and adapts to the evolving needs of your
              business.
            </p>
            <p className="leading-relaxed text-sm  rounded-md shadow-lg p-4 flex flex-col items-start h-auto w-full ">
              <span className="font-bold mt-2 text-sm sm:text-lg mb-4">
                Innovative Sales Approach:
              </span>{" "}
              ByteSync doesnt just sell software; we offer transformative
              solutions. Our sales approach focuses on understanding your
              challenges and proposing software solutions that propel your
              business forward.
            </p>
          </div>
          <p className="leading-relaxed text-sm  mt-4 font-light mb-4 ">
            <span className="font-light">ByteSync caters to businesses</span>{" "}
            across diverse sectors, embracing the challenge of enhancing
            operational efficiency regardless of industry. Join us in
            revolutionizing your business software experience—ByteSync: where
            technology and support converge for your success!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
