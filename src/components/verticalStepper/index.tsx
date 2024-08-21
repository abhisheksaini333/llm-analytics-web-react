import React from 'react';
import './styles.css';

interface StepperProps {
    steps: string[];
    currentStep: number;
}

const VerticalStepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
    return (
        <div className="vertical-stepper-container">
            {steps.map((step, index) => (
                <div key={index} className="step-container">
                    <div className={`step ${index <= currentStep ? 'completed' : ''}`}>
                        {index < currentStep ? '✔' : index + 1}
                    </div>
                    <div className="step-content">
                        {/* <div className="step-label">{step}</div> */}
                        {index < steps.length - 1 && (
                            <div className={`step-line ${index < currentStep ? 'completed' : ''}`}></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VerticalStepper;
