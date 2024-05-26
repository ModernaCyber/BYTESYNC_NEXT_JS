"use client";
import React, { useState } from "react";

const SystemQuestionaire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    serviceInterestedIn: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form submission (e.g., send email)
    console.log("Form submitted:", formData);
  };

  return (
    <div className="w-full px-2 py-4 mb-2 md:container">
      <form
        onSubmit={handleSubmit}
        className="w-full mx-auto text-left flex flex-col px-2 md:px-4 py-2 md:py-6"
      >
        <h1 className="text-xl mb-4">Service Inquiry Form</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className="mb-4 w-full flex flex-col items-start">
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
          <div className="mb-4 w-full flex flex-col items-start">
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
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-600"
            >
              Your Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-600"
            >
              Company Name
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-600"
            >
              Service Interested In
            </label>
            <select
              id="service"
              name="serviceInterestedIn"
              value={formData.serviceInterestedIn}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select...</option>
              <option value="ERP">Enterprise Resource Planning (ERP)</option>
              <option value="CRM">
                Customer Relationship Management (CRM)
              </option>
              <option value="ECM">Enterprise Content Management (ECM)</option>
              <option value="DMS">Document Management System (DMS)</option>
              <option value="WebDevelopment">Web Development and Design</option>
              <option value="AppDevelopment">App Development and Design</option>
            </select>
          </div>
        </div>{" "}
        <div className="mb-4 w-full flex flex-col items-start">
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-600"
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
            placeholder="Any other message"
          ></textarea>
        </div>
        <button type="submit" className="bg-[#84a6e4] rounded-2xl px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SystemQuestionaire;
