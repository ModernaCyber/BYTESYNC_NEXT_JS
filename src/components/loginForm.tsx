"use client";
import React, { useState } from "react";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    password: "",
    email: "",
    admin: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement; // Type assertion
      setFormData({
        ...formData,
        admin: checkbox.checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
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
        <h2 className="max-w-3xl bg-gradient-to-br from-[#ffa826e2] to-[#ffa726] bg-clip-text text-left text-xl font-medium leading-tight text-transparent sm:text-3xl sm:leading-tight md:text-5xl md:leading-tight">
          Login
        </h2>{" "}
        <div className="grid grid-cols-1 gap-2 mt-6 mb-4">
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
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
            <label className="flex items-center w-auto">
              <input
                type="checkbox"
                id="admin"
                name="admin"
                checked={formData.admin}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-fit "
                required
              />
              {"Login as admin".charAt(0).toUpperCase() +
                "Login as admin".slice(1)}
            </label>
          </div>
        </div>
        <button type="submit" className="bg-[#84a6e4] rounded-2xl px-6 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
