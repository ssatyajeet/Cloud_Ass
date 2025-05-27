import React from 'react';
import { FormData } from '../types/FormData';

interface FormStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const PersonalInformationForm: React.FC<FormStepProps> = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Personal Information</h2>
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">
          First Name:
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className={`form-input ${errors.firstName ? 'input-error' : ''}`}
          placeholder="John"
        />
        {errors.firstName && <p className="error-message">{errors.firstName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">
          Last Name:
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className={`form-input ${errors.lastName ? 'input-error' : ''}`}
          placeholder="Doe"
        />
        {errors.lastName && <p className="error-message">{errors.lastName}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`form-input ${errors.email ? 'input-error' : ''}`}
          placeholder="john.doe@example.com"
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
    </div>
  );
};

export default PersonalInformationForm;
