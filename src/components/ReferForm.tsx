"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

const ReferForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
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
        className="w-full max-w-[600px] mx-auto text-left flex flex-col px-2 md:px-4 py-2 md:py-6"
      >
        <h1 className="text-xl mb-4">
          Fill Out Our Referal Form To get YOUR rEFERAL LINK ON EMAIL and login
          details
        </h1>
        <div className="grid grid-cols-1 gap-2">
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
        </div>
        <button type="submit" className="bg-[#84a6e4] rounded-2xl px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReferForm;
