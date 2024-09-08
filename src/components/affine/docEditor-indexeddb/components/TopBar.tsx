import React, { useState } from 'react';
import './TopBar.css'; 

interface TopBarProps {
    title: string;
    onToggle: (state: boolean) => void;
}

const TopBar: React.FC<TopBarProps> = ({ title, onToggle }) => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(prevState => !prevState);
        onToggle(!isToggled);
    };

    return (
        <div className="top-bar">
            <div className="top-bar-title">{title}</div>
            <button className="toggle-button" onClick={handleToggle}>
                {isToggled ? 'Canvas' : 'Editor'}
            </button>
        </div>
    );
};

export default TopBar;
