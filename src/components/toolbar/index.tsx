import React from 'react';

interface ToolbarProps {
    onAddRectangle: () => void;
    onAddCircle: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onAddRectangle, onAddCircle }) => {
    return (
        <div className="toolbar">
            <button onClick={onAddRectangle}>Add Rectangle</button>
            <button onClick={onAddCircle}>Add Circle</button>
        </div>
    );
};

export default Toolbar;
