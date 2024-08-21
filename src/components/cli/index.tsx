import React, { useState } from 'react';
import './styles.css';

const CLI: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState<string[]>([]);
    const [history, setHistory] = useState<string[]>([]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value);
    };

    const handleInputKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            handleCommand(input);
        }
    };

    const handleCommand = (command: string) => {
        // Add the command to history
        setHistory([...history, command]);

        // Process the command and generate output
        let newOutput: string[] = [];
        switch (command.trim().toLowerCase()) {
            case 'help':
                newOutput = ['Available commands:', '1. help - Show available commands', '2. about - Display information about the CLI'];
                break;
            case 'about':
                newOutput = ['CLI Application', 'Version 1.0', 'Created by Your Name'];
                break;
            default:
                newOutput = [`Command not recognized: ${command}`];
                break;
        }

        // Update the output
        setOutput([...output, ...newOutput]);

        // Clear the input field
        setInput('');
    };

    return (
        <div className="cli-container">
            <div className="cli-output">
                {output.map((line, index) => (
                    <div key={index} className="cli-output-line">{line}</div>
                ))}
            </div>
            <div className="cli-input">
                <span>$ </span>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    autoFocus
                />
            </div>
        </div>
    );
};

export default CLI;
