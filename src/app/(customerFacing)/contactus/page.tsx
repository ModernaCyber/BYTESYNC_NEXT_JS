import React from "react";

const ContactUs = () => {
  return (
    <div id="contact" className="w-full h-auto min-h-dvh md:mt-2 mb-10 p-8 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
      <form  className="max-w-md mx-auto text-left">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"

            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
          >
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded-md"
            aria-multiline
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-[#84a6e4] rounded-2xl px-6 py-2"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
