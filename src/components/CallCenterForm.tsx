"use client";

import { callCenterPlans } from "@/lib/constants";
import React, { useState, useEffect } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  selectedPlan: string;
  agents: string;
  contactMethods: {
    [key: string]: boolean;
  };
  currentSystem: string;
  expectedCallVolume: string;
  primaryTools: {
    [key: string]: boolean;
  };
  goals: {
    [key: string]: boolean;
  };
  otherGoals: string;

  importantFeatures: {
    [key: string]: number;
  };
  remoteSupport: boolean;
  softwareIntegration: string;
  phoneNumbers: string;
  budget: string;
  decisionMaker: string;
  implementationTimeline: string;
  message: string;
}
const CallCenterForm = () => {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    company: "",
    selectedPlan: "",
    agents: "",
    contactMethods: {
      phone: false,
      email: false,
      socialMedia: false,
      twitter: false,
      facebook: false,
      instagram: false,
      linkedin: false,
      whatsapp: false,
      tiktok: false,
    },
    currentSystem: "",
    expectedCallVolume: "",
    primaryTools: {
      phone: false,
      email: false,
      videoConferencing: false,
      instantMessaging: false,
      others: false,
    },
    goals: {
      costSavings: false,
      scalability: false,
      improvedReliability: false,
      advancedFeatures: false,
      betterCustomerService: false,
      mobilitySupport: false,
    },
    otherGoals: "",
    importantFeatures: {
      callQuality: 1,
      scalability: 1,
      integration: 1,
      advancedCallManagement: 1,
      customerSupport: 1,
      costEfficiency: 1,
      securityCompliance: 1,
    },
    remoteSupport: false,
    softwareIntegration: "",
    phoneNumbers: "",
    budget: "",
    decisionMaker: "",
    implementationTimeline: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (formData.selectedPlan) {
      const plan = callCenterPlans.find(
        (plan) => plan.title === formData.selectedPlan
      );
      if (plan) {
        let price = 0;
        plan.options.forEach((option) => {
          if (option.name === "Agents") {
            price +=
              parseFloat(option.value.replace(/[^0-9.-]+/g, "")) *
              Number(formData.agents);
          } else if (option.value.includes("/month")) {
            price += parseFloat(option.value.replace(/[^0-9.-]+/g, ""));
          }
        });
        setTotalPrice(price);
      }
    }
  }, [formData.selectedPlan, formData.agents]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type, id } = e.target;
    if (type === "checkbox") {
      const checkbox = e.target as HTMLInputElement; // Type assertion
      switch (id) {
        case "contactMethods":
          console.log("contactMethods----", name, value, type, id);

          setFormData((prevData) => ({
            ...prevData,
            contactMethods: {
              ...prevData.contactMethods,
              [name.split(".")[1]]: checkbox.checked,
            },
          }));
          break;
        case "primaryTools":
          console.log("primaryTools----", name, value, type, id);

          setFormData((prevData) => ({
            ...prevData,
            primaryTools: {
              ...prevData.primaryTools,
              [name.split(".")[1]]: checkbox.checked,
            },
          }));
          break;

        case "remoteSupport":
          console.log("remoteSupport----", name, value, type, id);

          setFormData((prevData) => ({
            ...prevData,
            remoteSupport: checkbox.checked,
          }));
          break;
        case "goals":
          console.log("goals----", name, value, type, id);

          setFormData((prevData) => ({
            ...prevData,
            goals: {
              ...prevData.goals,
              [name.split(".")[1]]: checkbox.checked,
            },
          }));
          break;
        default:
          break;
      }
    } else if (type === "radio") {
      // Radio handling logic
    } else if (name.startsWith("importantFeatures.")) {
      // Important features handling logic
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
        className="w-full mx-auto text-left flex flex-col px-2 md:px-4 py-2 md:py-6"
      >
        <h1 className="text-xl mb-4">
          Call Center Setup Form: Get Ready to Go Live with Our Tailored Plans
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
              htmlFor="selectedPlan"
              className="block text-sm font-medium text-gray-600"
            >
              Select Plan
            </label>
            <select
              id="selectedPlan"
              name="selectedPlan"
              value={formData.selectedPlan}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select...</option>
              {callCenterPlans.map((plan) => (
                <option key={plan.title} value={plan.title}>
                  {plan.title}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="agents"
              className="block text-sm font-medium text-gray-600"
            >
              Number of Agents
            </label>
            <input
              type="number"
              id="agents"
              name="agents"
              value={formData.agents}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="currentSystem"
              className="block text-sm font-medium text-gray-600"
            >
              Current Communication System
            </label>
            <input
              type="text"
              id="currentSystem"
              name="currentSystem"
              value={formData.currentSystem}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="expectedCallVolume"
              className="block text-sm font-medium text-gray-600"
            >
              Expected Call Volume
            </label>
            <input
              type="text"
              id="expectedCallVolume"
              name="expectedCallVolume"
              value={formData.expectedCallVolume}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600">
              Contact Methods
            </label>
            {[
              "phone",
              "email",
              "socialMedia",
              "twitter",
              "facebook",
              "instagram",
              "linkedin",
              "whatsapp",
              "tiktok",
            ].map((method) => (
              <label key={method} className="flex items-center">
                <input
                  type="checkbox"
                  id="contactMethods"
                  name={`contactMethods.${method}`}
                  checked={formData.contactMethods[method]}
                  onChange={handleChange}
                  className="mr-2"
                />
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </label>
            ))}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600">
              Primary Communication Tools
            </label>
            {[
              "phone",
              "email",
              "videoConferencing",
              "instantMessaging",
              "others",
            ].map((tool) => (
              <label key={tool} className="flex items-center">
                <input
                  type="checkbox"
                  id="primaryTools"
                  name={`primaryTools.${tool}`}
                  checked={formData.primaryTools[tool]}
                  onChange={handleChange}
                  className="mr-2"
                />
                {tool.charAt(0).toUpperCase() + tool.slice(1)}
              </label>
            ))}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600">
              Goals with the New Communication System
            </label>
            {[
              "costSavings",
              "scalability",
              "improvedReliability",
              "advancedFeatures",
              "betterCustomerService",
              "mobilitySupport",
            ].map((goal) => (
              <label key={goal} className="flex items-center">
                <input
                  type="checkbox"
                  name={`goals.${goal}`}
                  id="goals"
                  checked={formData.goals[goal]}
                  onChange={handleChange}
                  className="mr-2"
                />
                {goal.charAt(0).toUpperCase() + goal.slice(1)}
              </label>
            ))}
            <input
              type="text"
              name="otherGoals"
              value={formData.otherGoals}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              placeholder="Other goals"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label className="block text-sm font-medium text-gray-600">
              Important Features (Rate 1-5)
            </label>
            {[
              "callQuality",
              "scalability",
              "integration",
              "advancedCallManagement",
              "customerSupport",
              "costEfficiency",
              "securityCompliance",
            ].map((feature) => (
              <div key={feature} className="flex items-center">
                <label className="mr-2">
                  {feature.charAt(0).toUpperCase() + feature.slice(1)}:
                </label>
                <input
                  type="range"
                  name={`importantFeatures.${feature}`}
                  value={formData.importantFeatures[feature]}
                  onChange={handleChange}
                  min="1"
                  max="5"
                  className="mr-2"
                />
                <span>{formData.importantFeatures[feature]}</span>
              </div>
            ))}
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="remoteSupport"
              className="block text-sm font-medium text-gray-600"
            >
              Support for Remote/Mobile Employees
            </label>
            <input
              type="checkbox"
              id="remoteSupport"
              name="remoteSupport"
              checked={formData.remoteSupport}
              onChange={handleChange}
              className="mr-2"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="softwareIntegration"
              className="block text-sm font-medium text-gray-600"
            >
              Specific Software/Tools Integration
            </label>
            <input
              type="text"
              id="softwareIntegration"
              name="softwareIntegration"
              value={formData.softwareIntegration}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="phoneNumbers"
              className="block text-sm font-medium text-gray-600"
            >
              Number of Phone Numbers/Extensions
            </label>
            <input
              type="number"
              id="phoneNumbers"
              name="phoneNumbers"
              value={formData.phoneNumbers}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="budget"
              className="block text-sm font-medium text-gray-600"
            >
              Budget for the New Communication System
            </label>
            <input
              type="number"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="decisionMaker"
              className="block text-sm font-medium text-gray-600"
            >
              Decision-Maker in the Company
            </label>
            <input
              type="text"
              id="decisionMaker"
              name="decisionMaker"
              value={formData.decisionMaker}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <div className="mb-4 w-full flex flex-col items-start">
            <label
              htmlFor="implementationTimeline"
              className="block text-sm font-medium text-gray-600"
            >
              Select Implementation Timeline
            </label>
            <select
              id="implementationTimeline"
              name="implementationTimeline"
              value={formData.implementationTimeline}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            >
              <option value="">Select ...</option>
              {["Immediately", "In 3 months", "In 6 months", "In 1 year"].map(
                (timeline) => (
                  <option key={timeline} value={timeline}>
                    {timeline}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div className="w-full">
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
          <div className="mb-4 w-full flex flex-col items-start">
            <div className="text-lg font-medium">
              Total Price: ${totalPrice.toFixed(2)}
            </div>
          </div>
          <button type="submit" className="bg-[#84a6e4] rounded-2xl px-6 py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CallCenterForm;
