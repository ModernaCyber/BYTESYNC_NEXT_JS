import ContactForm from "@/components/contact";
import React from "react";

const ContactUs = () => {
  return (
    <div
      id="contact"
      className="w-full h-auto min-h-dvh md:mt-2 mb-10 p-8 text-center"
    >
      <div className="w-full text-center flex flex-col items-center justify-center h-auto min-h-[480px]">
        <h2 className="max-w-3xl bg-gradient-to-br from-[#ffa826e2] to-[#ffa726] bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Get in Touch With Us
        </h2>
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Have questions or want to learn more about our services? We&lsquo;re here to
          help! Contact us today and let&lsquo;s start a conversation. Whether you&lsquo;re
          interested in our Enterprise Resource Planning (ERP) solutions or need
          assistance with Web Development and Design, we&lsquo;re ready to assist you.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactUs;
