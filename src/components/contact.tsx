"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to an API or processing it further
    console.log(formData);
    // Reset form fields after submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-5xl mx-auto text-left px-2 md:px-4 py-2 md:py-6 grid grid-cols-1 md:grid-cols-2 gap-4 "
    >
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
          value={formData.name}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-600"
        >
          Your Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
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
          value={formData.email}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-600"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
        />
      </div>

      <div className="mb-4 w-full md:col-span-2 ">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600 "
        >
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="mt-1 p-2 w-full border rounded-md"
          aria-multiline
          rows={4}
          required
        ></textarea>
      </div>

      <button type="submit" className="bg-[#84a6e4] rounded-2xl px-6 py-2">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
