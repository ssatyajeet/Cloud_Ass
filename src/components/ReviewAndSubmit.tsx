import React from 'react';
import { FormData } from '../types/FormData';

const ReviewAndSubmit: React.FC<{ formData: FormData }> = ({ formData }) => {
  return (
    <div className="form-card">
      <h2 className="form-title">Review and Submit</h2>
      <div className="summary-details">
        <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Address:</strong> {formData.street}, {formData.city}, {formData.state} {formData.zipCode}</p>
      </div>
      <div className="submit-button-container">
        <button
          type="submit"
          className="submit-button"
        >
          Submit Form
        </button>
      </div>
    </div>
  );
};

export default ReviewAndSubmit;
