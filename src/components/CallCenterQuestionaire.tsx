// components/Questionnaire.tsx
import React, { useState } from "react";
interface FormState {
  callCenterType: string;
  hostingPreference: string;
  currentCommunicationSystem: string;
  seats: string;
  primaryTools: string[];
  primaryGoals: string[];
  featureImportance: {
    [key: string]: number;
  };
  remoteSupport: string;
  specificIntegration: string;
  phoneNumbers: string;
  callVolume: string;
  budget: string;
  decisionMaker: string;
  implementationTimeline: string;
}

const CallCenterQuestionnaire: React.FC = () => {
  const initialFormState: FormState = {
    callCenterType: "",
    hostingPreference: "",
    currentCommunicationSystem: "",
    seats: "",
    primaryTools: [],
    primaryGoals: [],
    featureImportance: {
      callQuality: 3,
      scalability: 3,
      integration: 3,
      callManagement: 3,
      customerSupport: 3,
      costEfficiency: 3,
      security: 3,
    },
    remoteSupport: "",
    specificIntegration: "",
    phoneNumbers: "",
    callVolume: "",
    budget: "",
    decisionMaker: "",
    implementationTimeline: "",
  };

  const [formState, setFormState] = useState<FormState>(initialFormState);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
  
    setFormState((prevState) => {
      let newTools: string[];
      
      if (checked) {
        newTools = [...prevState.primaryTools, value];
      } else {
        newTools = prevState.primaryTools.filter((tool) => tool !== value);
      }
  
      return {
        ...prevState,
        primaryTools: newTools,
      };
    });
  };
  
  
  
  

  const handleFeatureImportanceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
  
    setFormState((prevState) => {
      return {
        ...prevState,
        featureImportance: {
          ...prevState.featureImportance,
          [name]: parseInt(value), // Parse value to ensure it's a number
        },
      };
    });
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-bold">Africall Questionnaire</h2>

      <div>
        <label>1. Are you looking for a CALL Center Solution?</label>
        <div>
          <label>
            <input
              type="radio"
              name="callCenterType"
              value="Inbound"
              onChange={handleChange}
            />
            Inbound
          </label>
          <label>
            <input
              type="radio"
              name="callCenterType"
              value="Outbound"
              onChange={handleChange}
            />
            Outbound
          </label>
          <label>
            <input
              type="radio"
              name="callCenterType"
              value="Blended"
              onChange={handleChange}
            />
            Blended
          </label>
        </div>
      </div>

      <div>
        <label>2. Where would your Ideal Hosting be?</label>
        <div>
          <label>
            <input
              type="radio"
              name="hostingPreference"
              value="On Premise"
              onChange={handleChange}
            />
            On Premise
          </label>
          <label>
            <input
              type="radio"
              name="hostingPreference"
              value="Cloud"
              onChange={handleChange}
            />
            Cloud
          </label>
        </div>
      </div>

      <div>
        <label>
          3. What type of communication system are you currently using?
        </label>
        <select name="currentCommunicationSystem" onChange={handleChange}>
          <option value="">Select...</option>
          <option value="Traditional phone system">
            Traditional phone system
          </option>
          <option value="VoIP">VoIP</option>
          <option value="Cloud-based calling solution">
            Cloud-based calling solution
          </option>
          <option value="Other">Other (please specify)</option>
        </select>
        {formState.currentCommunicationSystem === "Other" && (
          <textarea
            name="otherCommunicationSystem"
            placeholder="Please specify..."
            onChange={handleChange}
          ></textarea>
        )}
      </div>

      <div>
        <label>
          4. How many seats/users does your current system support or expect to
          support?
        </label>
        <input type="number" name="seats" onChange={handleChange} />
      </div>

      <div>
        <label>
          5. What are the primary communication tools you use? (Select all that
          apply)
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              name="primaryTools"
              value="Phone"
              onChange={handleCheckboxChange}
            />
            Phone
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryTools"
              value="Email"
              onChange={handleCheckboxChange}
            />
            Email
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryTools"
              value="Video conferencing"
              onChange={handleCheckboxChange}
            />
            Video conferencing
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryTools"
              value="Instant messaging"
              onChange={handleCheckboxChange}
            />
            Instant messaging
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryTools"
              value="Other"
              onChange={handleCheckboxChange}
            />
            Other (please specify)
          </label>
        </div>
        {formState.primaryTools.includes("Other") && (
          <textarea
            name="otherPrimaryTools"
            placeholder="Please specify..."
            onChange={handleChange}
          ></textarea>
        )}
      </div>

      <div>
        <label>
          6. What are the primary goals you want to achieve with a new
          communication system? (Select all that apply)
        </label>
        <div>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Cost savings"
              onChange={handleCheckboxChange}
            />
            Cost savings
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Scalability"
              onChange={handleCheckboxChange}
            />
            Scalability
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Improved reliability"
              onChange={handleCheckboxChange}
            />
            Improved reliability
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Advanced features"
              onChange={handleCheckboxChange}
            />
            Advanced features (e.g., call analytics, IVR, integration with CRM)
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Better customer service"
              onChange={handleCheckboxChange}
            />
            Better customer service
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Mobility/remote work support"
              onChange={handleCheckboxChange}
            />
            Mobility/remote work support
          </label>
          <label>
            <input
              type="checkbox"
              name="primaryGoals"
              value="Other"
              onChange={handleCheckboxChange}
            />
            Other (please specify)
          </label>
        </div>
        {formState.primaryGoals.includes("Other") && (
          <textarea
            name="otherPrimaryGoals"
            placeholder="Please specify..."
            onChange={handleChange}
          ></textarea>
        )}
      </div>

      <div>
        <label>
          7. How important are the following features to you? (Rate on a scale
          from 1 to 5)
        </label>
        <div>
          <label>Call quality</label>
          <input
            type="range"
            name="callQuality"
            min="1"
            max="5"
            value={formState.featureImportance.callQuality}
            onChange={handleFeatureImportanceChange}
          />
          <label>Scalability</label>
          <input
            type="range"
            name="scalability"
            min="1"
            max="5"
            value={formState.featureImportance.scalability}
            onChange={handleFeatureImportanceChange}
          />
          <label>Integration with existing tools</label>
          <input
            type="range"
            name="integration"
            min="1"
            max="5"
            value={formState.featureImportance.integration}
            onChange={handleFeatureImportanceChange}
          />
          <label>Advanced call management features</label>
          <input
            type="range"
            name="callManagement"
            min="1"
            max="5"
            value={formState.featureImportance.callManagement}
            onChange={handleFeatureImportanceChange}
          />
          <label>Customer support</label>
          <input
            type="range"
            name="customerSupport"
            min="1"
            max="5"
            value={formState.featureImportance.customerSupport}
            onChange={handleFeatureImportanceChange}
          />
          <label>Cost efficiency</label>
          <input
            type="range"
            name="costEfficiency"
            min="1"
            max="5"
            value={formState.featureImportance.costEfficiency}
            onChange={handleFeatureImportanceChange}
          />
          <label>Security and compliance</label>
          <input
            type="range"
            name="security"
            min="1"
            max="5"
            value={formState.featureImportance.security}
            onChange={handleFeatureImportanceChange}
          />
        </div>
      </div>

      <div>
        <label>8. Do you require support for remote or mobile employees?</label>
        <div>
          <label>
            <input
              type="radio"
              name="remoteSupport"
              value="Yes"
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="remoteSupport"
              value="No"
              onChange={handleChange}
            />
            No
          </label>
        </div>
      </div>

      <div>
        <label>
          9. Do you need integration with any specific software or tools? If
          yes, please specify.
        </label>
        <textarea name="specificIntegration" onChange={handleChange}></textarea>
      </div>

      <div>
        <label>
          10. How many phone numbers or extensions do you currently use?
        </label>
        <input type="number" name="phoneNumbers" onChange={handleChange} />
      </div>

      <div>
        <label>
          11. What is your expected call volume (inbound/outbound) on a
          daily/weekly basis?
        </label>
        <textarea name="callVolume" onChange={handleChange}></textarea>
      </div>

      <div>
        <label>12. What is your budget for a new communication system?</label>
        <div>
          <label>
            <input
              type="radio"
              name="budget"
              value="Less than 500/month"
              onChange={handleChange}
            />
            Less than 500/month
          </label>
          <label>
            <input
              type="radio"
              name="budget"
              value="$500 - $1000/month"
              onChange={handleChange}
            />
            $500 - $1000/month
          </label>
          <label>
            <input
              type="radio"
              name="budget"
              value="$1000 - $2000/month"
              onChange={handleChange}
            />
            $1000 - $2000/month
          </label>
          <label>
            <input
              type="radio"
              name="budget"
              value="Over $2000/month"
              onChange={handleChange}
            />
            Over $2000/month
          </label>
        </div>
      </div>

      <div>
        <label>
          13. Who is the primary decision-maker for communication systems in
          your company?
        </label>
        <select name="decisionMaker" onChange={handleChange}>
          <option value="">Select...</option>
          <option value="Yourself">Yourself</option>
          <option value="IT Manager">IT Manager</option>
          <option value="Operations Manager">Operations Manager</option>
          <option value="Other">Other (please specify)</option>
        </select>
        {formState.decisionMaker === "Other" && (
          <textarea
            name="otherDecisionMaker"
            placeholder="Please specify..."
            onChange={handleChange}
          ></textarea>
        )}
      </div>

      <div>
        <label>
          14. When do you plan to implement the new communication system?
        </label>
        <div>
          <label>
            <input
              type="radio"
              name="implementationTimeline"
              value="Immediately"
              onChange={handleChange}
            />
            Immediately
          </label>
          <label>
            <input
              type="radio"
              name="implementationTimeline"
              value="Within 1-3 months"
              onChange={handleChange}
            />
            Within 1-3 months
          </label>
          <label>
            <input
              type="radio"
              name="implementationTimeline"
              value="Within 3-6 months"
              onChange={handleChange}
            />
            Within 3-6 months
          </label>
          <label>
            <input
              type="radio"
              name="implementationTimeline"
              value="More than 6 months"
              onChange={handleChange}
            />
            More than 6 months
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Submit
      </button>
    </form>
  );
};

export default CallCenterQuestionnaire;
