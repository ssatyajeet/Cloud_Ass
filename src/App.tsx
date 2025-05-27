import React, { useState } from 'react';
import StepIndicator from './components/StepIndicator';
import PersonalInformationForm from './components/PersonalInformationForm';
import AddressInformationForm from './components/AddressInformationForm';
import ReviewAndSubmit from './components/ReviewAndSubmit';
import { FormData } from './types/FormData';
import './styles/app.css';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 3;
  const stepNames: string[] = ['Personal Info', 'Address Info', 'Review & Submit'];

  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validateStep = (step: number): boolean => {
    let newErrors: { [key: string]: string } = {};
    let isValid = true;

    if (step === 1) {
      if (!formData.firstName.trim()) {
        newErrors.firstName = 'First Name is required.';
        isValid = false;
      }
      if (!formData.lastName.trim()) {
        newErrors.lastName = 'Last Name is required.';
        isValid = false;
      }
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required.';
        isValid = false;
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid.';
        isValid = false;
      }
    } else if (step === 2) {
      if (!formData.street.trim()) {
        newErrors.street = 'Street is required.';
        isValid = false;
      }
      if (!formData.city.trim()) {
        newErrors.city = 'City is required.';
        isValid = false;
      }
      if (!formData.state.trim()) {
        newErrors.state = 'State is required.';
        isValid = false;
      }
      if (!formData.zipCode.trim()) {
        newErrors.zipCode = 'Zip Code is required.';
        isValid = false;
      } else if (!/^\d{5}(-\d{4})?$/.test(formData.zipCode)) {
        newErrors.zipCode = 'Zip Code is invalid.';
        isValid = false;
      }
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  return (
    <div className="app-container">
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />

      <div className="main-card">
        <StepIndicator currentStep={currentStep} totalSteps={totalSteps} stepNames={stepNames} />

        <div className="form-content-area">
          {currentStep === 1 && (
            <PersonalInformationForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {currentStep === 2 && (
            <AddressInformationForm
              formData={formData}
              setFormData={setFormData}
              errors={errors}
              setErrors={setErrors}
            />
          )}
          {currentStep === 3 && <ReviewAndSubmit formData={formData} />}
        </div>

        <div className="navigation-buttons">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="nav-button"
          >
            Back
          </button>
          {currentStep < totalSteps ? (
            <button
              onClick={handleNext}
              className="nav-button nav-button-primary"
            >
              Next
            </button>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};

export default App;