import React from 'react';
import styled from 'styled-components';

// import brandLogoLight from '../../assets/llm_Logo_Footer.png';
// import brandLogoDark from '../../assets/llm_Logo_Dark_Footer.png';

import './styles.css';

const StyledFooterContainer = styled.footer`
    background-color: ${(props) => props.theme.headerBackground};
    height: 40px;
    z-index: 1000;
    padding: 10px 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    text-align: justify;
    font-size: 11px;
    line-height: 1.5;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    width: calc(100vw - 190px);
    bottom: 0;
    left: 90px;
`;

const LightLogo = styled.img`
    height: 20px;
`;

const DarkLogo = styled.img`
    height: 20px;
`;

interface FooterProps {
    selectedTheme: string;
}

const Footer: React.FC<FooterProps> = ({ selectedTheme }) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <StyledFooterContainer>
            <div className="logo-footer">
                {
                    // selectedTheme === 'light'
                    //     ? <LightLogo src={brandLogoLight} alt="llm-logo-light" onClick={scrollToTop} />
                    //     : <DarkLogo src={brandLogoDark} alt="llm-logo-dark" onClick={scrollToTop} />
                }
            </div>
            <div className="footer-content">
                <p>© 2024 LLM Analytics. All rights reserved.</p>
            </div>
        </StyledFooterContainer>
    );
};

export default Footer;