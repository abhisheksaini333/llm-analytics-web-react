import React, { useState, useRef, useEffect } from 'react';
import './Canvas.css';
import Rectangle from '../shapes/Rectangle';
import Circle from '../shapes/Circle';
import Connector from '../shapes/Connector';
import { applyPanning, applyZoom } from '../../utils/zoomUtils';
import Toolbar from '../toolbar';

const Canvas: React.FC = () => {
    const [elements, setElements] = useState<any[]>([]);
    const [selectedElement, setSelectedElement] = useState<number | null>(null);
    const canvasRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [translate, setTranslate] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (canvasRef.current) {
            applyZoom(scale, canvasRef.current);
            applyPanning(translate.x, translate.y, canvasRef.current);
        }
    }, [scale, translate]);

    const handleElementClick = (index: number) => {
        setSelectedElement(index);
    };

    const handleDelete = () => {
        if (selectedElement !== null) {
            setElements(prev => prev.filter((_, idx) => idx !== selectedElement));
            setSelectedElement(null);
        }
    };

    const handleCanvasClick = () => {
        setSelectedElement(null);
    };

    return (
        <div className="canvas" ref={canvasRef} onClick={handleCanvasClick}>
            <Toolbar
                onAddRectangle={() => setElements([...elements, { type: 'rectangle', x: 100, y: 100, width: 100, height: 50 }])}
                onAddCircle={() => setElements([...elements, { type: 'circle', x: 200, y: 200, radius: 50 }])}
            />
            {elements.map((el, idx) => {
                if (el.type === 'rectangle') {
                    return <Rectangle key={idx} {...el} onClick={() => handleElementClick(idx)} />;
                } else if (el.type === 'circle') {
                    return <Circle key={idx} {...el} onClick={() => handleElementClick(idx)} />;
                } else if (el.type === 'connector') {
                    return <Connector key={idx} {...el} onClick={() => handleElementClick(idx)} />;
                }
                return null;
            })}
            {selectedElement !== null && (
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            )}
        </div>
    );
};

export default Canvas;
