import React, { useEffect, useRef, useState } from 'react';
import { VegaLite } from 'react-vega';
import './styles.css';
import DancingEllipses from '../../dancingEllipses';
import { parseTableData } from '../../../utils/parsers';
import TableData from '../../dataTable';
import ChatTable from '../../chatTable';
import { BotIcon, UserIcon } from './icons/chatAvatar';
import magicBI from '../../../assets/icons/MagicBI.jpg';

const spec = {
    "width": 400,
    "height": 200,
    "data": [{ "name": "table" }],
    "signals": [
        {
            "name": "tooltip",
            "value": {},
            "on": [
                { "events": "rect:mouseover", "update": "datum" },
                { "events": "rect:mouseout", "update": "{}" }
            ]
        }
    ],
}

const barData = {
    table: [
        { a: 'A', b: 28 },
        { a: 'B', b: 55 },
        { a: 'C', b: 43 },
        { a: 'D', b: 91 },
        { a: 'E', b: 81 },
        { a: 'F', b: 53 },
        { a: 'G', b: 19 },
        { a: 'H', b: 87 },
        { a: 'I', b: 52 },
    ],
}

interface ChatPanelProps {
    onQuerySend: (query: string) => void;
    queryResponse: any;
    loading: boolean;
}


const ChatPanel: React.FC<ChatPanelProps> = ({ onQuerySend, queryResponse, loading }) => {
    const [messages, setMessages] = useState<{ text: string, sender: string, type?: string, tableData?: any }[]>([]);
    const [input, setInput] = useState<string>('');
    const [isExpect, setIsExpect] = useState<boolean>(false);
    const [suggestedQueries, setSuggestedQueries] = useState<string[]>([
        "Show me income by marital status ?",
        "What's the total sales for last 30 days?",
        "Tell me the profit vs cost.",
    ]);
    const sendButtonRef = useRef<HTMLButtonElement>(null);
    const chatDisplayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isExpect) {
            setMessages(prevMessages => [...prevMessages, { text: 'This is a bot response.', sender: 'bot', type: 'table', tableData: queryResponse?.table_data }]);
            setIsExpect(false);
        }
    }, [queryResponse]);


    const handleSend = () => {
        if (input.trim() === '') return;
        onQuerySend(input);
        setIsExpect(true);

        // Add user message
        setMessages([...messages, { text: input, sender: 'user' }]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            // setMessages(prevMessages => [...prevMessages, { text: 'This is a bot response.', sender: 'bot' }]);
            scrollToBottom();
        }, 0);
    };

    const handleKeyPress = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSend();
        }
    };

    const handleQuerySelect = (query: string) => {
        setInput(query);
        handleSend();
        setTimeout(() => {
            if (sendButtonRef.current) {
                sendButtonRef.current.click();
            }
        }, 0);
    }

    const scrollToBottom = () => {
        if (chatDisplayRef.current) {
            chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <div className="chat-panel">
            <div className="chat-container">
                <div className="chat-display" ref={chatDisplayRef}>
                    {messages.map((msg, index) => (
                        <div key={index} className={`chat-message ${msg.sender}`}>
                            {
                                msg.sender === 'bot' &&
                                <div className='bot-icon'>
                                    {/* <BotIcon /> */}
                                    <img src={magicBI} alt='bot' />
                                </div>
                            }
                            {
                                msg.sender === 'user' &&
                                <div className='user-icon'>
                                    <UserIcon />
                                </div>
                            }
                            {
                                msg.type !== 'table' &&
                                <div className='chat-text'>
                                    {msg.text}
                                </div>
                            }
                            {
                                msg.type === 'table' &&
                                <div className='chat-table'>
                                    <ChatTable data={msg.tableData} />
                                </div>
                            }
                        </div>
                    ))}
                    {
                        loading && isExpect &&
                        <div className='wait-cursor'>
                            <DancingEllipses />
                        </div>
                    }
                    <div className="chat-message bot">
                        {/* <VegaLite spec={spec} data={barData} /> */}

                    </div>
                </div>
                <div className="suggested-queries">
                    {suggestedQueries.map((query, index) => (
                        <div key={index} className="query-card" onClick={() => handleQuerySelect(query)}>
                            {query}
                        </div>
                    ))}
                </div>
                <div className="chat-input querySection">
                    <textarea
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask a question..."
                    />
                    <button ref={sendButtonRef} onClick={handleSend} className="send-button">Send</button>
                </div>
            </div>
        </div >
    );
}

export default ChatPanel;
