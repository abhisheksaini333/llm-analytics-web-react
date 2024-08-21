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

    const mockSteps = [
        {
            agent: 'Intent Agent',
            description: 'Understanding the question'
        },
        {
            agent: 'Context Agent',
            description: 'Gathering the right context',
            attributes: []
        },
        {
            agent: 'Planning Agent',
            description: 'Creating the execution plan',
            attributes: []
        },
        {
            agent: 'Query Agent',
            description: 'Query the right tables and columns',
            attributes: []
        },
        {
            agent: 'Insight Agent',
            description: 'Present the story',
            attributes: []
        },
        {
            agent: 'Action Agent',
            description: 'Recommend actions',
            attributes: []
        }
    ]

    useEffect(() => {
        if (queryResponse?.steps) {
            mockSteps[3].attributes = queryResponse?.selected_attributes;
            // setItems(queryResponse.steps);
            setItems(mockSteps);
        }
    }, [queryResponse]);

    useEffect(() => {
        if (items.length === 0) return;

        const interval = setInterval(() => {
            setAnimatedItems((prevItems) => {
                if (prevItems.length >= items.length) return prevItems;
                return [...prevItems, items[prevItems.length]];
            });
        }, 1500);

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
                    >
                        <div className='agent'>{item?.agent}</div>
                        <div className='description'>{item?.description}</div>
                        {
                            item?.attributes && item?.attributes.length > 0 &&
                            <div className='attributes'>
                                {
                                    item.attributes.map((i: string, ind: number) => {
                                        return <div key={`inner` + ind} className='attribute'>{ind + 1}. {i}</div>
                                    })
                                }
                            </div>
                        }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AgenticFeed;
