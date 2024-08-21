import React, { useState } from 'react';
import Navigation from '../navigation';
import styled from 'styled-components';

import './styles.css';
import brandLogoLight from '../../assets/logo/Logo4_lightBG.svg';
import brandLogoDark from '../../assets/logo/Logo4_darkBG.svg';
import ToggleSwitch from '../toggle';


const StyledHeaderContainer = styled.header`
    background-color: ${(props) => props.theme.headerBackground};
    height: 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding: 10px 50px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
`;

const LightLogo = styled.img`
    height: 30px;
`;

const DarkLogo = styled.img`
    height: 30px;
`;

interface HeaderProps {
    toggleTheme: () => void;
}


const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
    const [theme, setTheme] = useState('Dark');

    const navItems = [
        // { label: "Home", path: "/" },
        { label: "Connect", path: "/connect" },
        { label: "Data", path: "/data" },
        { label: "Interact", path: "/interact" },
        // { label: "Stories", path: "/stories" },
    ];

    const toggleTheTheme = (theme: string) => {
        setTheme(theme === 'Light' ? 'Dark' : 'Light');
        toggleTheme();
    }


    const redirectToAnotherSite = () => {
        window.location.href = '/connect';
    };

    return (
        <header className="header">
            <StyledHeaderContainer>
                <div className="logo">
                    {
                        theme === 'Light'
                            ? <LightLogo src={brandLogoDark} alt="llm-logo-light" onClick={redirectToAnotherSite} />
                            : <DarkLogo src={brandLogoLight} alt="llm-logo-dark" onClick={redirectToAnotherSite} />
                    }
                </div>
                <nav className="navigation">
                    <Navigation items={navItems} />
                </nav>
                <div className="user-management">
                    <ToggleSwitch option1={'Light'} option2={'Dark'} initialSelected={'Light'} onToggle={toggleTheTheme} />
                </div>
            </StyledHeaderContainer>
        </header>
    );
}

export default Header;

