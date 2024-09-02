import React from 'react';
import './styles.css';

interface DataConnector {
    id: string;
    name: string;
    color: string;
    img: any;
}

interface DataConnectorsProps {
    connectors: DataConnector[];
    onConnectorClick: (id: string) => void;
}

const DataConnectors: React.FC<DataConnectorsProps> = ({ connectors, onConnectorClick }) => {
    return (
        <div className="data-connectors-grid">
            {connectors.map((connector) => (
                <button
                    key={connector.id}
                    className="data-connector-button"
                    style={{ backgroundColor: connector.color }}
                    onClick={() => onConnectorClick(connector.id)}
                >
                    <img src={connector.img} alt='data-con' />
                    {connector.name}
                </button>
            ))}
        </div>
    );
};

export default DataConnectors;
