import React from 'react';
import './styles.css';

const HistoryPanel: React.FC = () => {
    // Dummy data for history
    const history = [
        "Previous interaction 1",
        "Previous interaction 2",
        // Add more interactions
    ];

    return (
        <div className="history-panel">
            <h2>Chat History</h2>
            <ul>
                {history.map((interaction, index) => (
                    <li key={index}>{interaction}</li>
                ))}
            </ul>
        </div>
    );
}

export default HistoryPanel;
