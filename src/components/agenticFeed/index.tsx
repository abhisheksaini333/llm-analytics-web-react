import React, { useEffect, useState } from 'react';
import './styles.css';

interface AgenticFeedProps {
    queryResponse: any;
    loading: boolean;
}

const AgenticFeed: React.FC<AgenticFeedProps> = ({ queryResponse, loading }) => {
    const [newItem, setNewItem] = useState<string | null>(null);
    const [items, setItems] = useState<any[]>([]);
    const [animatedItems, setAnimatedItems] = useState<any[]>([]);

    useEffect(() => {
        if (queryResponse?.steps) {
            setItems(queryResponse.steps);
        }
    }, [queryResponse]);

    useEffect(() => {
        if (items.length === 0) return;

        const interval = setInterval(() => {
            setAnimatedItems((prevItems) => {
                if (prevItems.length >= items.length) return prevItems;
                return [...prevItems, items[prevItems.length]];
            });
        }, 2000);

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

    if (loading) {
        setTimeout(() => {
            setAnimatedItems([]);
        }, 0);
        return <></>;
    }

    return (
        <div className="agentic-feed">
            <div className="feed-items">
                {animatedItems.map((item, index) => (
                    <div
                        key={index}
                        className={`feed-item ${index < animatedItems.length ? 'slide-in' : ''}`}
                        // className={`feed-item ${newItem === item ? 'slide-in' : ''}`}
                    >
                        <div>Agent: {item?.agent}</div>
                        <div>Instruction: {item?.instruction}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgenticFeed;
