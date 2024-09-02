import React from 'react';

interface RectangleProps {
    x: number;
    y: number;
    width: number;
    height: number;
    onClick?: () => void;
}

const Rectangle: React.FC<RectangleProps> = ({ x, y, width, height, onClick }) => {
    return (
        <div
            style={{
                position: 'absolute',
                left: x,
                top: y,
                width: width,
                height: height,
                backgroundColor: 'blue',
            }}
            onClick={(e) => {
                e.stopPropagation();
                if (onClick) onClick();
            }}
        />
    );
};

export default Rectangle;
