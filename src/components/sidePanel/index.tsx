import React, { useState } from 'react';
import { styled } from 'styled-components';
import VerticalStepper from '../verticalStepper';

import './styles.css';


const StyledSidePanelContainer = styled.div`
    background-color: ${(props) => props.theme.headerBackground};
    width: 48px;
    height: 100%;
    z-index: 1000;
    position: fixed;
    top: 82px;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
    line-height: 1.5;
    /* color: #fff; */
    padding: 20px;
`;


interface SidePanelProps {
    selectedTheme: string;
}


const SidePanel: React.FC<SidePanelProps> = ({ selectedTheme }) => {
    const [currentStep, setCurrentStep] = useState<number>(0);
    const steps = ['Step 1', 'Step 2', 'Step 3'];
    return (
        <StyledSidePanelContainer>
            {/* <VerticalStepper steps={steps} currentStep={currentStep} /> */}
        </StyledSidePanelContainer>
    );
}

export default SidePanel;
