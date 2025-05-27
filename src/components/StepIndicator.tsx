import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepNames: string[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps, stepNames }) => {
  const stepItems = Array.from({ length: totalSteps }, (_, index) => index + 1);

  return (
    <div className="step-indicator-container">
      {stepItems.map((step) => (
        <React.Fragment key={step}>
          <div className="step-item">
            <div
              className={`step-circle ${currentStep >= step ? 'step-active' : 'step-inactive'}`}
            >
              {step}
            </div>
            <div className="step-name">
              {stepNames[step - 1]}
            </div>
          </div>
          {step < totalSteps && (
            <div
              className={`step-line ${currentStep > step ? 'line-active' : 'line-inactive'}`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default StepIndicator;
