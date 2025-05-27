import React from 'react';
import { FormData } from '../types/FormData';

interface FormStepProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  errors: { [key: string]: string };
  setErrors: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const AddressInformationForm: React.FC<FormStepProps> = ({ formData, setFormData, errors, setErrors }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="form-card">
      <h2 className="form-title">Address Information</h2>
      <div className="form-group">
        <label htmlFor="street" className="form-label">
          Street:
        </label>
        <input
          type="text"
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
          className={`form-input ${errors.street ? 'input-error' : ''}`}
          placeholder="123 Main St"
        />
        {errors.street && <p className="error-message">{errors.street}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="city" className="form-label">
          City:
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className={`form-input ${errors.city ? 'input-error' : ''}`}
          placeholder="Anytown"
        />
        {errors.city && <p className="error-message">{errors.city}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="state" className="form-label">
          State:
        </label>
        <input
          type="text"
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className={`form-input ${errors.state ? 'input-error' : ''}`}
          placeholder="CA"
        />
        {errors.state && <p className="error-message">{errors.state}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="zipCode" className="form-label">
          Zip Code:
        </label>
        <input
          type="text"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
          className={`form-input ${errors.zipCode ? 'input-error' : ''}`}
          placeholder="90210"
        />
        {errors.zipCode && <p className="error-message">{errors.zipCode}</p>}
      </div>
    </div>
  );
};

export default AddressInformationForm;
