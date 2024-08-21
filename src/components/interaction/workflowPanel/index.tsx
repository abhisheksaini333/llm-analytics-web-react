import React from 'react';
import AgenticFeed from '../../agenticFeed';
import './styles.css';

interface WorkflowPanelProps {
    queryResponse?: any;
    loading: boolean;
}


const WorkflowPanel: React.FC<WorkflowPanelProps> = ({ queryResponse, loading }) => {

    return (
        <div className="workflow-panel">
            <h4>Data Agents</h4>
            <AgenticFeed queryResponse={queryResponse} loading={loading} />
        </div>
    );
}

export default WorkflowPanel;
