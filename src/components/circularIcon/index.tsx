import React from 'react';
import './styles.css';

interface CircularIconProps {
    type: 'user' | 'chatbot';
}

const CircularIcon: React.FC<CircularIconProps> = ({ type }) => {
    const getIconSrc = () => {
        if (type === 'user') {
            return 'path/to/user-icon.png'; // Replace with the path to your user icon
        } else if (type === 'chatbot') {
            return 'path/to/chatbot-icon.png'; // Replace with the path to your chatbot icon
        }
    };

    return (
        <div className="circular-icon">
            <img src={getIconSrc()} alt={`${type} icon`} />
        </div>
    );
};

export default CircularIcon;
