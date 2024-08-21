import React from 'react';
import './styles.css';

interface StepperProps {
  steps: string[];
  currentStep: number;
}

const HorizontalStepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="stepper-container">
      {steps.map((step, index) => (
        <div key={index} className="step-container">
          <div className={`step ${index <= currentStep ? 'completed' : ''}`}>
            {index < currentStep ? '✔' : index + 1}
          </div>
          {index < steps.length - 1 && (
            <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
          )}
          {/* <div className="step-label">{step}</div> */}
        </div>
      ))}
    </div>
  );
};

export default HorizontalStepper;
