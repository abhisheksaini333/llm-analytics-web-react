import React, { useEffect, useState } from 'react';
import './styles.css';

const AgenticFeed: React.FC = () => {
    const [items, setItems] = useState<string[]>([]);
    const [newItem, setNewItem] = useState<string | null>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            const newItem = `New Feed ${items.length + 1}`;
            setItems((prevItems) => [newItem, ...prevItems]);
            setNewItem(newItem);
        }, 3000);

        return () => clearInterval(interval);
    }, [items]);

    useEffect(() => {
        if (newItem) {
            const timeout = setTimeout(() => {
                setNewItem(null);
            }, 500); // Duration of the animation

            return () => clearTimeout(timeout);
        }
    }, [newItem]);

    return (
        <div className="agentic-feed">
            <div className="feed-items">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`feed-item ${newItem === item ? 'slide-in' : ''}`}
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgenticFeed;
