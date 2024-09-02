import React, { useState, useEffect } from 'react';

interface CircleProps {
    id: string;
    x: number;
    y: number;
    radius: number;
    onSelect: (id: string) => void;
    onMove: (id: string, x: number, y: number) => void;
}

const Circle: React.FC<CircleProps> = ({ id, x, y, radius, onSelect, onMove }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);

    const handleMouseDown = (e: React.MouseEvent<SVGCircleElement>) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - x, y: e.clientY - y });
        onSelect(id);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (isDragging && dragStart) {
            onMove(id, e.clientX - dragStart.x, e.clientY - dragStart.y);
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setDragStart(null);
    };

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [isDragging, dragStart]);

    return (
        <circle
            cx={x}
            cy={y}
            r={radius}
            fill="blue"
            onMouseDown={handleMouseDown}
            style={{ cursor: 'pointer' }}
        />
    );
};

export default Circle;
