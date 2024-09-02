import React from 'react';
import { Element } from '../canvas/CanvasState';

interface ConnectorProps {
    startElement: Element;
    endElement: Element;
}

const Connector: React.FC<ConnectorProps> = ({ startElement, endElement }) => {
    return (
        <line
            x1={startElement.x}
            y1={startElement.y}
            x2={endElement.x}
            y2={endElement.y}
            stroke="black"
        />
    );
};

export default Connector;
