import React from 'react';
import AgenticFeed from '../../agenticFeed';
import './styles.css';

interface WorkflowPanelProps {
    handleQueryResponse: any;
}


const WorkflowPanel: React.FC<WorkflowPanelProps> = ({ handleQueryResponse }) => {
    // Dummy data for workflow feed
    const workflowFeed = [
        "Agent action 1",
        "Agent action 2",
        // Add more actions
    ];

    return (
        <div className="workflow-panel">
            <h2>Agent Feed</h2>
            <AgenticFeed />
            {/* <ul>
                {workflowFeed.map((action, index) => (
                    <li key={index}>{action}</li>
                ))}
            </ul> */}
        </div>
    );
}

export default WorkflowPanel;
